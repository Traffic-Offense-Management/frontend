import React from "react";
import {useNavigate} from "react-router";
import '../../css/police/logo.css'
import {Link} from "react-router-dom";

const UserLogo = () => {

    const navigate = useNavigate();

    function signOut(){
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('police_id');
        navigate('/police/login');
    }

    return (
        <div className='user-logo'>
            <div className="dropdown ">

                <div className='' id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {/*{sessionStorage.getItem('username')}*/}
                    <img src={require('../../images/user-logo2.png')} alt="Logo" className='logo-img'/>
                    {sessionStorage.getItem('username')}
                </div>
                <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#" onClick={signOut}>Logout</a>
                </ul>
            </div>

        </div>

    )
}

export  default UserLogo;