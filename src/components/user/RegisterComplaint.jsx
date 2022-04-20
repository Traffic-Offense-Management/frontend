import axios from 'axios';
import React, { Component } from 'react';
import Menu from './Menu';
   
class RegisterComplaint extends Component{


    constructor(props) {
        super(props);
        this.state = {
            description : 'Please write your complaint here'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getDateTime = this.getDateTime.bind(this);
    }

    handleChange(event) {
        this.setState({description: event.target.value});
    }

    getDateTime(){
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd
    }
    
    handleSubmit(event) {
        console.log('Form submitted')
        event.preventDefault()

        
        let body = {
            userId : 'gcraske2',
            policeId : null,
            stationId : null,
            description : this.state.description,
            date : this.getDateTime()
        }
        axios.post('http://localhost:8080/complaints', body)
            .then(response => {
                console.log(response)
                alert('Complaint successfully registered')
            }).catch(err => {
                alert('Invalid complaint')
            })
    }

    render() {
        return(
            <div className='user'>
                <Menu />

                <div className='complaint-form center'>
                <form onSubmit={this.handleSubmit}>
                    <table className=''>
                        <tbody>
                            <tr>
                                <td>
                                    <label className=''>Description  </label>
                                </td>
                                <td><textarea className='form-control' required value={this.state.description} onChange={this.handleChange}/></td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="submit" value='Submit'/>                    
                </form>
            </div>
            </div>
            
        )
        
    }
}
 
export default RegisterComplaint;