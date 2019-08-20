import React from 'react';
import './App.css';  
import { BrowserRouter , Route , Link} from 'react-router-dom';
import Login from './Components/Login';
import Header from './Components/Header'

function App() {
  return ( 
  <BrowserRouter>
     <div className="App">
       <h1>Learning Auth...</h1>    
         <Header />
        <Route path = "login" component = {Login} />
       </div>
    </BrowserRouter>
   
  );
}
export default App;
