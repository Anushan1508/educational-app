const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');
require('dotenv').config();

const mongoose  = require('mongoose')

AdminBro.registerAdapter(AdminBroMongoose)

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
  branding: {
    logo: 'https://www.shutterstock.com/image-vector/book-stack-vector-black-icon-1259060506',
    companyName: 'Alvin',
  }
})

const ADMIN = {
  email: process.env.ADMIN_EMAIL || 'admin@gmail.com',
  password: process.env.ADMIN_PASSWORD || 'admin@123',
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || 'super_admin',
  cookiePassword: process.env.ADMIN_COOKIE_PASS || 'admin123',
  authenticate: async (email, password) =>{
    if (email == ADMIN.email  && password == ADMIN.password) {
      return ADMIN;
    }
    return null;
  }
})

module.exports = router;