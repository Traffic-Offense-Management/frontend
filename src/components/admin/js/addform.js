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
        axios.post(`http://ec2-65-2-146-200.ap-south-1.compute.amazonaws.com:8080/admin/${navpages[props.pageContent - 1]}/add`,formValues, {
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
    }
    let form = add_forms[navpages[props.pageContent - 1]];
    let form_items = form.map((item, index) => <div key = {index} className='form-group'><label style={{marginRight: "10px"}}>{item}</label><input type="text" className='form-control' onChange={(event) => handleChange(event, item)}/></div>);
    return (
        <div id="addform" style={{ paddingLeft: "250px", transition: "0.35s" }}>
            <form>
                <div className="form-header">
                    <h1>Add {navpages[props.pageContent - 1]}</h1>
                </div>
                <div className="">
                    {form_items}
                </div>
                <div className='login-error-box' style={{display:isError?"block":"none"}}>
                    Enter correct values
                </div>
                <div className="form-footer">
                    <button type = 'button' className="btn btn-primary" onClick={addValues}>Add</button>
                </div>
            </form>
        </div>
    );
}