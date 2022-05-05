import React, { useEffect } from "react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import "../css/search.scss"
import { AiOutlineSearch } from "react-icons/ai"
import { IoChevronBackOutline } from "react-icons/io5"
import { navpages } from "./list"
import "../css/login.css"
export default function Searchbar(props) {
    useEffect(() => {
        props.setSearchField(props.columns[0].accessor)
    }, [props.pageContent]);
    const columns = props.columns;
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    // if(props.searchField !== columns[0].Header){
    //     props.setSearchField(columns[0].Header);
    // }
    function closeForm() {
        props.setForm(0);
    }
    function toggle() {
        setDropdownOpen(prevStatus => !prevStatus);
    }
    let button_list = columns.map((item, index) => {
        return <div key={index} onClick={() => { props.setSearchField(item.accessor) }}><DropdownItem>{item.Header}</DropdownItem></div>
    })
    let options = props.options === 2 ? (
    <>
    <button className="ed-buttons" onClick={()=>{props.setForm(1)}}>Add {navpages[props.pageContent - 1]}</button>
    <button className="ed-buttons" onClick={()=>{props.setForm(2)}}>Remove {navpages[props.pageContent - 1]}</button></>
    ) : props.options === 1 ? (<button className="ed-buttons" onClick={()=>{props.setForm(1)}}>Add {navpages[props.pageContent - 1]}</button>) : (<></>)
    return (

        <div className="searchadmin">
            <div className="wrap">
                {props.form !== 0 ? (<div onClick={closeForm} >
                    <IoChevronBackOutline style={{borderRadius:"5px",boxShadow:"5px", width:"20px", height:"100%",marginLeft:"5px", marginRight:"10px" }} />
                </div>) : null}
                <div className="search-selector">
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            {props.searchField}
                        </DropdownToggle>
                        <DropdownMenu>
                            {button_list}
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="search">
                    <input type="text" className="searchTerm" placeholder={`Search ${props.searchField}`} onChange={(event) => { props.setSearchText(event.target.value) }} />
                    <button type="submit" className="searchButton">
                        <AiOutlineSearch />
                    </button>
                    {options}

                </div>
            </div>
        </div>
    )
}