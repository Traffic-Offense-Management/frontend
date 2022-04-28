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
                        <Link to='/police/profile' className={'link ' + (this.props.selected == 'profile' ? 'selected' : " ")}><i class="bi bi-person"></i>Profile</Link>
                    </div>
                    <div className={'menu-option ' + (this.props.selected == 'history' ? 'selected' : " ")}>
                        <Link to='/police/offenses/history' className={'link ' + (this.props.selected == 'history' ? 'selected' : " ")}><i class="bi bi-card-list"></i>Offense History</Link>
                    </div>
                    <div className={'menu-option ' + (this.props.selected == 'new-offense' ? 'selected' : " ")}>
                        <Link to='/police/offenses/new' className={'link ' + (this.props.selected == 'new-offense' ? 'selected' : " ")}><i class="bi bi-plus-lg"></i>New Offense</Link>
                    </div>
                    <div className={'menu-option ' + (this.props.selected == 'new-towing' ? 'selected' : " ")}>
                        <Link to='/police/towing/new' className={'link ' + (this.props.selected == 'new-towing' ? 'selected' : " ")}><i class="bi bi-card-list"></i>Towing</Link>
                    </div>
                    <div className={'menu-option ' + (this.props.selected == 'offense-list' ? 'selected' : " ")}>
                        <Link to='/police/offenses/list' className={'link ' + (this.props.selected == 'offense-list' ? 'selected' : " ")}><i class="bi bi-list"></i>List of Offenses</Link>
                    </div>
                    
                </div>
            </div>
        )
    }
    
}
 
export default Menu;