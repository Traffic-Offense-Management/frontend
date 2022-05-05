import React from "react"
import Navbar from "./js/navbar"
import Sidebar from "./js/sidebar"
import TableManager from "./js/tablehandler.js"
import "./css/header.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./js/login"
import axios from "axios"

export default function App() {
    const [token, setToken] = React.useState(localStorage.getItem("token"))
    const [menuCollapsedStatus, setMenuCollapsedStatus] = React.useState(false);
    const [pageContent, setPageContent] = React.useState(0);
    const [loggedIn, setLoggedIn] = React.useState(false);
    // pageContent: 0 = landing, 1 = Police, 2 = Stations, 3 = Complaints, 4 = Offenses, 5 = Camera
    React.useEffect(() => {
        verifyToken();
    }, [])
    function verifyToken() {
        if (token) {
            axios.get('http://localhost:8080/admin/auth', {
                headers: {
                    authorization: `${localStorage.getItem("token")}`
                }
            }).then(res=>{
                if(res.data===true){
                    setLoggedIn(true);
                }else{
                    console.log("login failed due to invalid token")
                }
            }).catch(error => {
                if(error){
                    if(error.response.status === 401){
                        localStorage.removeItem("token");
                        console.log("login failed")
                        setToken(null);
                    }else if (error.response.status === 200){
                        console.log("login success")
                        setLoggedIn(true);
                    }
                }else{
                    console.log("No error recieved")
                }
            });
        }
    }

function menuClick() {
    setMenuCollapsedStatus(prevStatus => !prevStatus);
}
function setContent(val) {
    setPageContent(() => val);
}
function homeClick() {
    setPageContent(() => 0);
}


return loggedIn ? (
    <div className="main">
        <Navbar menuClick={menuClick} homeClick={homeClick} />
        <div className="bod">

            <Sidebar menuClick={menuClick} menuCollapsedStatus={menuCollapsedStatus} pageContent={pageContent} setContent={setContent} />
            <TableManager menuCollapsedStatus={menuCollapsedStatus} pageContent={pageContent} />

        </div>

    </div>
) : <Login setToken={setToken} setLoggedIn = {setLoggedIn}/>;
}
