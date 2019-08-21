import React, {useState , useEffect} from 'react';
import LoginForm from './LoginForm';
import axios from 'axios';

function Login(props) {  
  const [userCred , setUserCred] = useState();

  function postData(userData) {
      setUserCred(userData) 
      console.log(userCred);
  } 
    return(
        <div> 
           <LoginForm postData = {postData} />
        </div>
    )
} 

export default Login;