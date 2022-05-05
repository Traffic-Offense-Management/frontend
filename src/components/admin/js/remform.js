import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "../css/addremforms.css";
import axios from 'axios';
import {delete_forms, navpages} from "./list";
export default function RemForms(props) {
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
    function remValues(){
        axios.post(`http://localhost:8080/admin/${navpages[props.pageContent - 1]}/rem`,formValues, {
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
    let form = delete_forms[navpages[props.pageContent - 1]];
    let form_items = form.map((item, index) => <div key = {index} className='form-group'><label style={{marginRight: "10px"}}>{item}</label><input type="text" className='form-control' onChange={(event) => handleChange(event, item)}/></div>);
    return (
        <div id="addform" style={{ paddingLeft: "250px", transition: "0.35s" }}>
            <form>
                <div className="form-header">
                    <h1>Remove {navpages[props.pageContent - 1]}</h1>
                </div>
                <div className="">
                    {form_items}
                </div>
                <div className='login-error-box' style={{display:isError?"block":"none"}}>
                    Enter correct value
                </div>
                <div className="form-footer">
                    <button type = 'button' className="btn btn-primary" onClick={remValues}>Remove</button>
                </div>
            </form>
        </div>
    );
}
