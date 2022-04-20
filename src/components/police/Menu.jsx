import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../../css/police/menu.css';


class Menu extends Component{
    
    constructor(props){
        super(props);
        console.log(props.selected);
    }
    
    render(){
        return (
            <div>
                <div className="menu">
                    <div className={'menu-option ' + (this.props.selected == 'profile' ? 'selected' : " ")}>
                        <Link to='/police/profile/10004' className={'link ' + (this.props.selected == 'profile' ? 'selected' : " ")}>Profile</Link>
                    </div>
                    <div className={'menu-option ' + (this.props.selected == 'history' ? 'selected' : " ")}>
                        <Link to='/police/offenses/history' className={'link ' + (this.props.selected == 'history' ? 'selected' : " ")}>Offense History</Link>
                    </div>
                    <div className={'menu-option ' + (this.props.selected == 'new-offense' ? 'selected' : " ")}>
                        <Link to='/police/offenses/new' className={'link ' + (this.props.selected == 'new-offense' ? 'selected' : " ")}>New Offense</Link>
                    </div>
                    <div className={'menu-option ' + (this.props.selected == 'new-towing' ? 'selected' : " ")}>
                        <Link to='/police/towing/new' className={'link ' + (this.props.selected == 'new-towing' ? 'selected' : " ")}>Towing</Link>
                    </div>
                    <div className={'menu-option ' + (this.props.selected == 'offense-list' ? 'selected' : " ")}>
                        <Link to='/police/offenses/list' className={'link ' + (this.props.selected == 'offense-list' ? 'selected' : " ")}>List of Offenses</Link>
                    </div>
                    
                </div>
            </div>
        )
    }
    
}
 
export default Menu;