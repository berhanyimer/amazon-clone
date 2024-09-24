import { useEffect,useContext } from 'react'
import './App.css'
import Routing from './Router'
import {DataContext} from "./Componenets/DataProvider/DataProvider"
import {Type} from "./Utility/action.types"
import {auth} from "./Utility/firebase"
function App() {
 
const [{ user }, dispatch] = useContext(DataContext);

useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      // User is logged in
      dispatch({
        type: Type.SET_USER,
        user: authUser,
      });
    } else {
      // User is logged out
      dispatch({
        type: Type.SET_USER,
        user: null,
      });
    }
  });
}, []);

  return <Routing/>
}

export default App
