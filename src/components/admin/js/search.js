import React from "react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import "../css/search.scss"
import { AiOutlineSearch } from "react-icons/ai"
import { navpages} from "./list"
export default function Searchbar(props) {
    const columns = props.columns;
    const [searchText, setSearchText] = React.useState(columns[0].Header);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    if(searchText !== columns[0].Header){
        setSearchText(columns[0].Header);
    }
    function toggle() {
        setDropdownOpen(prevStatus => !prevStatus);
    }
    let button_list = columns.map((item, index)=>{
        return <div key = {index} onClick={()=>{setSearchText(item.Header);}}><DropdownItem>{item.Header}</DropdownItem></div>
    })
    let options = props.options===2 ? (<><button className="ed-buttons">Add {navpages[props.pageContent -1]}</button><button className="ed-buttons">Remove {navpages[props.pageContent -1]}</button></>) : props.options ===1 ? (<button className="ed-buttons">Add {navpages[props.pageContent -1]}</button>) : (<></>)
    return (

        <div className="searchadmin">
        <div className="wrap">
            <div className="search-selector">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        {searchText}
                    </DropdownToggle>
                    <DropdownMenu>
                        {button_list}
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div className="search">
                <input type="text" className="searchTerm" placeholder={`Search ${searchText}`} />
                <button type="submit" className="searchButton">
                    <AiOutlineSearch />
                </button>
                {options}
                
            </div>
        </div>
        </div>
    )
}