import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
export default function Login(props){
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isError, setIsError] = React.useState(false);
    const [errorText, setErrorText] = React.useState("username or password is incorrect");
    function loginAdmin(){
        console.log("trying")
        axios.post('http://ec2-65-2-146-200.ap-south-1.compute.amazonaws.com:8080/admin/login',{
            username: username,
            password: password
        }).then(res => {
            console.log("trying")
            console.log(res.data.token)
            localStorage.setItem("token", res.data.token);
            props.setToken(res.data.token);
            props.setLoggedIn(true);
        }).catch(err => {
            console.log(JSON.stringify(err))
            setIsError(true);
        })
    }
    return(
        
        <div>
            <nav>
                <center>
                    <h1>Admin</h1>
                </center>
                
            </nav>
            <div className='card'>
            <div className='card-body'>
                <center>
                <h3 className='card-title admin-login-text'>Login</h3>
                <form>
                    <div className='form-group'>
                        <label for='username' className='admin-form-text'>Username</label>
                        <input type='text' className='form-control' id='username' placeholder='Enter username' onChange={(event) => {setUsername(event.target.value)}} />
                        <br></br>
                        <br></br>
                        <label for='password' className='admin-form-text'>Password</label>
                        <input type='password' className='form-control' id='password' placeholder='Enter password' onChange={(event) => {setPassword(event.target.value)}}/>
                    </div>
                    <div className='login-error-box' style={{display: isError ? "block" : "none"}}>{errorText}</div>
                    <button type= "button" className='btn btn-primary'onClick={loginAdmin} >Submit</button>
                </form>
                </center>
            </div>
        </div>
        </div>
        
    )
}