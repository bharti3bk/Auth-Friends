import React, { useState, useEffect } from 'react';
import axios from 'axios' 
import FriendList from './FriendList'

function LoginForm(props) {
    const [username, setusername] = useState([])
    const [password, setpassword] = useState([])
    const [user, setUser] = useState([]);

    function usernameHandle(event) {
        setusername(event.target.value);
        console.log(username)
    }

    function passwordHandle(event) {
        setpassword(event.target.value);
        console.log(password)
    }

    function submitHandler(event) {
        event.preventDefault();
        setUser([...user, { username: username, password: password }])
        console.log({ username, password })
        axios.post("http://localhost:5000/api/login", { username, password })  // this is how we will pass user credensials in the request boday.
            .then(res => {
                console.log(res);                                     
                // local storage is the read only property of windows object .it stores data in the web browser. 
                // setItem takes a key value and allows to add the key value pair to the storage object.
                window.localStorage.setItem("token", res.data.payload)   
        
                //  res.data.payload has our token this payload that we are seeing here comes from our server . 
                // we will set the token to our local storage  
                // when users will enter their username and password once and receive 
                //a uniquely-generated token in exchange
                // This token is then used to access protected pages or 
                // resources instead of the login credentials for a designated period of time.
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        console.log(user)
    }, [user])
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" name="username" value={username} placeholder="UserName" onChange={usernameHandle} />
                </div>
                <div>
                    <input type="password" name="password" value={password} placeholder="Password" onChange={passwordHandle} />
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
}
export default LoginForm;