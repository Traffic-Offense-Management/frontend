import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
export default function login(){
    return(
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>Login</h5>
                <form>
                    <div className='form-group'>
                        <label for='username'>Username</label>
                        <input type='text' className='form-control' id='username' placeholder='Enter username' />
                        <label for='password'>Password</label>
                        <input type='password' className='form-control' id='password' placeholder='Enter password' />
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}