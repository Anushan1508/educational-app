function auth (req, res, next) {
    try {
        const token = req.cookies.token;

        if(!token) {
            res
            .status(401)
            .json({errorMessage: "Unauthorized"}); 
        }
    }
    catch (err) {
        console.error(err);
        res.status(401)
        .json({errorMessage: "Unauthorized"});
    }
}

module.exports = auth;