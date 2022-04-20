import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';

const Login = () => {
    
    

    return ( 
        <div>
            <form action='/user/profile'>
                <div>
                    <label>Username : </label>
                    <input type='text'/>
                </div>
                <div>
                    <label>Password : </label>
                    <input type='password'/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
        
     );
}
 
export default Login;