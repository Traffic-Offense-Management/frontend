import React from "react"
import Searchbar from "./search"
import TableContainer from "./table.js"
import "../css/header.css"
import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import {columns, options} from "./list"
export default function TableManager(props) {
    const data = [];
    let pad = props.menuCollapsedStatus ? 100 : 250;
    let table = <div id="table" className="main-cont" style={{paddingLeft:`${pad}px`,transition:"0.35s"}}><Searchbar columns={columns[props.pageContent-1]} pageContent = {props.pageContent} options = {options[props.pageContent-1]}/><Container className="table-cont"><TableContainer columns={columns[props.pageContent-1]} data={data} /></Container></div>
    
    if(props.pageContent === 0) {
        return(<div></div>)
    }else{
        return(table)
    }
}