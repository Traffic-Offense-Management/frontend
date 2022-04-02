import React from "react";
import '../css/dbms2.scss';
import { Link } from "react-router-dom";

function roles() {
    return (
        <div className="rolesstyle">
            <div className="head">Select Your Role</div>
            <div className="box">


                <div className="con1"><div className="he">Authority</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vitae veritatis voluptatem maiores sunt odit fugit quos possimus deserunt necessitatibus delectus cumque repellat reiciendis excepturi explicabo repudiandae, aliquid doloribus ex.</p>

                    <Link to="/login"><a href="#">LogIn</a></Link>
                </div>
                <div className="con2"><div className="he">Police Officer</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita deleniti recusandae dicta beatae explicabo fugiat amet et. Asperiores, repellat earum!</p>

                    <Link to="/login"><a href="#">LogIn</a></Link>
                </div>
                <div className="con3"><div className="he">Public</div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quam atque magnam perferendis dignissimos tempora impedit, assumenda distinctio, officiis necessitatibus illum, labore a minus excepturi ut ipsa doloribus? Molestias dignissimos fuga obcaecati incidunt, corporis quibusdam?
                        <br /><br />
                        
                        <Link to="/signin"><a href="#">SignUp</a></Link>
                        <Link to="/login"><a href="#">LogIn</a></Link>
                    </p>


                </div>
            </div>
        </div>

        );
}

export default roles;