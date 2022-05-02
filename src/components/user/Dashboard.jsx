import React, {Component} from 'react';


class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <ul>
                <li>
                    <a href="">User</a>
                </li>
                <li>
                    <a href="">Police</a>
                </li>
                <li>
                    <a href="">Administrator</a>
                </li>
            </ul>
         );
    }
}
 
export default Dashboard;