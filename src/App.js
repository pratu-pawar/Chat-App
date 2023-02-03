
import './App.css';
import Register from './Pages/Register';
import Home from './Pages/Home'; 
// import Sidebar from './Components/Sidebar';
// import Navbar from './Components/Navbar';
// import Chat from './Components/Chat';
import Login from './Pages/Login';
import "./style.scss"
// import Chats from './Components/Chats';
import { 
  BrowserRouter,
  Routes, 
  Route
} from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';


function App() {
 const {currentUser} = useContext(AuthContext)
 console.log(currentUser);

  return (
    <div>
    <BrowserRouter> 
         <Routes> 
          <Route path='/'>
            <Route index element ={<Home/>}></Route> 
            <Route path='login'element={<Login/>}></Route>
            <Route path='register'element={<Register/>}></Route>

          </Route>
         </Routes>
         </BrowserRouter>


      <Register/>  
         {/* <Login/>
        <Home/>
        <Sidebar/>
        <Navbar/>
        <Chat/>
        <Chats/> */}
        
    </div>
  );
}

export default App;
