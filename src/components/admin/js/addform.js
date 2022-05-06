import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "../css/addremforms.css";
import axios from 'axios';
import {add_forms, navpages} from "./list";
export default function AddForm(props) {
    const [formValues, setFormValues] = React.useState({});
    const [isError, setIsError] = React.useState(false);
    function handleChange(event, item) {
        setFormValues(prev => {
            let temp = prev
            Object.assign(temp, {[item]: event.target.value});
            return(
                temp
            )
        })
    }
    function addValues(){
        axios.post(`http:${props.selfurl}:8080/admin/${navpages[props.pageContent - 1]}/add`,formValues, {
            headers: {
                authorization: `${localStorage.getItem("token")}`
            }
        }).then(res => {
            props.setForm(0);
            setIsError(false);
        }).catch(err => {
            setIsError(true);
        })
        props.setForm(0);
        props.setLoad(prev=>!prev);
    }
    let form = add_forms[navpages[props.pageContent - 1]];


    let form_items = form.map((item, index) => <tr key = {index}><td><label style={{marginRight: "10px", width:"15vh", textAlign:"right" }}>{item}</label></td><td><input type="text" className='form-control' onChange={(event) => handleChange(event, item)}/></td></tr>);
    let itemTable = [];
    for(let i = 0; i < form_items.length; i+=2){
        if(i<form_items.length){
            itemTable.push(<tr key={i}><td>{form_items[i]}</td><td><div style={{width:"30px"}} ></div></td><td>{form_items[i+1]}</td></tr>);
        }else{
            itemTable.push(<tr key={i}><td>{form_items[i]}</td><td></td><td></td></tr>);
        }
    }
    return (
        <center>

        
        <div id="addform" style={{ transition: "0.35s" }}>
            <form>
                <div className="form-header">
                    <h1>Add {navpages[props.pageContent - 1]}</h1>
                </div>
                <br></br>
                <div className="">
                    <table>
                    {itemTable}
                    </table>
                    
                </div>
                <div className='login-error-box' style={{display:isError?"block":"none"}}>
                    Enter correct values
                </div>
                <center>
                <div className="form-footer">
                    <button type = 'button' className="btn btn-primary" onClick={addValues}>Add</button>
                </div>
                </center>
                
            </form>
        </div>
        </center>
    );
}