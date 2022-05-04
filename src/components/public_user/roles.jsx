import React from "react";
import '../../css/public_user/dbms2.scss';
import { Link } from "react-router-dom";

function roles() {
    return (
        <div className="rolesstyle">
            <div className="head">Select Your Role</div>
            <div className="box">


                <div className="con1"><div className="he">Authority</div>
                    <p>It is the highest
                        authority and thus has complete control over the system. The office staff
                        can register new traffic police, monitor the offenses listed by traffic
                        police, change the visibility of data.
                    </p>

                    <div className="Log"><Link to="/admin"><a href="#">LogIn</a></Link></div>
                </div>
                <div className="con2"><div className="he">Police Officer</div>
                    <p>The police at work can report offenses with the details
                        of the offender after generating a ticket. In case the offender escapes, the
                        vehicle number can be noted for further actions. Towing of vehicles shall
                        also be reported through the same system.</p>

                    <div className="Log"><Link to="/police/login"><a href="#">LogIn</a></Link></div>
                </div>
                <div className="con3"><div className="he">Public</div>
                    <p>It is the highest
                        authority and thus has complete control over the system. The office staff
                        can register new traffic police, monitor the offenses listed by traffic
                        police, change the visibility of data.


                        <br /><br />

                        <div className="Sig"><Link to="/signin"><a href="#">SignUp</a></Link></div>
                        <div className="sp"><br /></div>
                        <div className="Log"><Link to="/login"><a href="#">LogIn</a></Link></div>
                    </p>


                </div>
            </div>
        </div>

    );
}

export default roles;