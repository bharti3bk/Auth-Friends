import React from 'react';
import './App.css';  
import { BrowserRouter , Route , Link } from 'react-router-dom';
import Login from './Components/Login'; 
import PrivateRoute from './Components/Privateroute'
import Header from './Components/Header' 
import FriendList from './Components/FriendList'

function App() {
  return ( 
  <BrowserRouter>
     <div className="App">
       <h1>Learning Auth...</h1>    
         <Header /> 
        <Route path = "/login" component = {Login} /> 
        <PrivateRoute exact path="/friendslist" component={FriendList} />
       </div>
    </BrowserRouter>
   
  );
}
export default App;
