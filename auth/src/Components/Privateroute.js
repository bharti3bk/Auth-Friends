import React from 'react';
import { Route, Redirect } from 'react-router';

function PrivateRoute({ component : Component, ...rest}) {
    return (
        <div> 
            <Route  
             {...rest}
             render = {props => {
                 if(localStorage.getItem('token')) {
                     return <Component {...props} />
                 } 
                 return <Redirect to = "/login" />;
             }}
            /> 
        </div>
    )
} 
export default PrivateRoute;