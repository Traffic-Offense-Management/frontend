import React from "react"
import Navbar from "./js/navbar"
import Sidebar from "./js/sidebar"
import TableManager from "./js/tablehandler.js"
import "./css/header.scss"
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {

    const [menuCollapsedStatus, setMenuCollapsedStatus] = React.useState(false);
    const [pageContent, setPageContent] = React.useState(0);
    // pageContent: 0 = landing, 1 = Police, 2 = Stations, 3 = Complaints, 4 = Offenses, 5 = Camera
    function menuClick() {
        setMenuCollapsedStatus(prevStatus => !prevStatus);
    }
    function setContent(val) {
        setPageContent(() => val);
    }
    function homeClick(){
        setPageContent(() => 0);
    }
    return (
        <div className="headeradmin">
        <div className="main">
            <Navbar menuClick={menuClick} homeClick = {homeClick} />
            <div className="bod">

                <Sidebar menuClick={menuClick} menuCollapsedStatus={menuCollapsedStatus} pageContent={pageContent} setContent={setContent} />
                <TableManager menuCollapsedStatus = {menuCollapsedStatus} pageContent={pageContent} />
                
            </div>

        </div>
        </div>
    );
}
