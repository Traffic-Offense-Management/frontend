import React from "react"
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarContent,
} from "react-pro-sidebar";
import "../css/sidebar.css";
import "react-pro-sidebar/dist/css/styles.css";
import { GrUserPolice } from "react-icons/gr";
import { MdLocalPolice } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaTrafficLight } from "react-icons/fa";
import { BiBuilding, BiTrafficCone } from "react-icons/bi";
import { AiOutlineCamera } from "react-icons/ai";
import {navpages} from "./list";
export default function sidebar(props) {
    let iconlist = [<MdLocalPolice />, <GrUserPolice />, <BiBuilding />, <FiUsers />, <FaTrafficLight />, <BiTrafficCone/>,<AiOutlineCamera />];
    let items = navpages.map((item, index) => <div key = {index} onClick={() => props.setContent(index+1)}><MenuItem active={props.pageContent === index+1} icon={iconlist[index]}>{item}</MenuItem></div>);
    return (
        <>
            <div id="header">
                <ProSidebar collapsed={props.menuCollapsedStatus}>
                    <SidebarContent>
                        <Menu iconShape="square">
                            
                            {items}

                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </div>
        </>

    );
}