import React, {useState , useEffect} from 'react';
import LoginForm from './LoginForm';
import axios from axios;

function Login(props) {  
  const [userCred , setUserCred] = useState();

  function userLogIn(userInput)  {
   const results = axios.post("http://localhost:5000/api/login", userInput) 
    results.then(res => {
        console.log(res);
      localStorage.setItem("token" , res.data.payload)
      props.history.push('');
    })
    .catch(error => {
        console.log(error)
    }) 
  } 

  function postData(userData) {
      setUserCred(userData) 
      console.log(userCred);
  } 

  useEffect(() => {
      userLogIn(userCred); 
  } , [userCred])


    return(
        <div> 
             <h1>Login</h1>
           <LoginForm />
        </div>
    )
} 

export default Login;