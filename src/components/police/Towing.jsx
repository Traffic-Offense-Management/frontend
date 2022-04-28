import React, { Component} from 'react';
import '../../css/police/towing.css'
import axios from 'axios';
import Menu from './Menu';
import OffenseDropdown from './OffensesDropdown';
import TowingOffensesDropdown from './TowingOffensesDropwdown';
import Stations from './Stations';


class Towing extends Component{

    constructor(props) {

        
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.getDateTime = this.getDateTime.bind(this);
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
            vehicle_no : document.getElementById('vehicle-no').value,
            police_id : 10004,
            offense_no : document.getElementById('offense-no').value,
            station_id : document.getElementById('police-station-id').value,
            place : document.getElementById('place').value,
            time : this.getDateTime()
        }
        console.log(body);
        axios.post('http://localhost:8080/police/towing/new', body)
            .then(response => {
                console.log(response)
                alert('Towing offense successfully registered')
            }).catch(err => {
                console.log(err)
                alert('Invalid details')
            })
    }


    render() {
        return (
            <div className='new-offense my-bg'>
                <Menu selected='new-towing'/>
                <div className='new-offense-form'>

                    <div className="head center">
                        <h4>Towing Registration Form</h4>
                    </div>
                    
                    <form  onSubmit={this.handleSubmit}>
        
                        <table className='new-offense-form-table'>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="">Vehicle No</label>
                                    </td>
                                    <td>
                                        <input required type="text" name="" id="vehicle-no" className='towing-input form-control'/>
                                    </td>                            
                                </tr>
        
                                <tr>
                                    
                                    <td>
                                        <label htmlFor="">Place</label>
                                    </td>
                                    <td>
                                        <input required type="text" name="" id="place" className='towing-input form-control'/>
                                    </td>                            
                                </tr>

                                <tr>
                                    
                                    <td>
                                        <label htmlFor="">Offense</label>
                                    </td>
                                    <td>
                                        <TowingOffensesDropdown></TowingOffensesDropdown>
                                    </td>                            
                                </tr>

                                <tr>
                                    
                                    <td>
                                        <label htmlFor="">Station</label>
                                    </td>
                                    <td>
                                        <Stations></Stations>
                                    </td>                            
                                </tr>

                                {/* <tr>
                                    
                                    <td>
                                        <label htmlFor="">Offense</label>
                                    </td>
                                    <td>
                                        <OffenseDropdown />
                                        
                                    </td>                            
                                </tr> */}
                            </tbody>
                        </table>
                        <div className="submit submit-btn">
                            <input type="submit" value='Submit' className='btn btn-danger'/>  

                        </div>
                        
                    </form>
                </div>
            </div>
            
        );
    }
    
}

 
export default Towing;