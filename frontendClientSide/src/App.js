import axios from 'axios'
import  { AuthContextProvider } from './context/AuthContext';
import Routers from './Routers';

//import PrivateRoute from './components/Utils/PrivateRoute'

axios.defaults.withCredentials = true;

function App() {

  return (
    <AuthContextProvider>
      <Routers />
    </AuthContextProvider>
  );
}

export default App;
