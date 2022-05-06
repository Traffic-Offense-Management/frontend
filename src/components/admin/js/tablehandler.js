import React from "react"
import Searchbar from "./search"
import TableContainer from "./table.js"
import "../css/header.css"
import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { columns, options, navpages } from "./list"
import axios from "axios"
import AddForm from "./addform"
import RemForm from "./remform"
export default function TableManager(props) {
    const [data, setData] = React.useState([]);
    const [searchField, setSearchField] = React.useState();
    const [searchText, setSearchText] = React.useState("");
    const [form, setForm] = React.useState(0);
    const [load, setLoad] = React.useState(false);
    let s = React.useRef();
    s.current = searchText;
    let l = React.useRef();
    l.current = form;
    let f = React.useRef();
    f.current = searchField;
    React.useEffect(() => {
        setForm(0);
    }, [props.pageContent]);

    React.useEffect(() => {
        if (s.current === '') {
            axios.get(`http:${props.selfurl}:8080/admin/${navpages[props.pageContent - 1]}`, {
                headers: {
                    authorization: `${localStorage.getItem("token")}`
                }
            }).then(res => {
                if(res.data[0].date){
                    for(let i = 0; i<res.data.length; i++){
                        res.data[i].date = res.data[i].date.split("T")[0];
                    }
                }else if(res.data[0].dob){
                    for(let i = 0; i<res.data.length; i++){
                        res.data[i].dob = res.data[i].dob.split("T")[0];
                    }
                    
                }
                setData(res.data);
                console.log(JSON.stringify(data))
            }).catch(error => {
                console.log(JSON.stringify(error))
                setData([]);
            })
        } else {
            axios.post(`http:${props.selfurl}:8080/admin/${navpages[props.pageContent - 1]}/options`, {
                field: f.current,
                text: s.current
            }, {
                headers: {
                    authorization: `${localStorage.getItem("token")}`
                }
            }).then(res => {

                setData(res.data);
                console.log(JSON.stringify(data))
            }).catch(error => {
                console.log(JSON.stringify(error))
                setData([]);
            })

        }
    }, [props.pageContent, s.current, l.current])




    let pad = props.menuCollapsedStatus ? 100 : 250;
    let table = (

                <TableContainer columns={columns[props.pageContent - 1]} data={data} />
    )


    let add = (

                <AddForm pageContent={props.pageContent} setForm={setForm} selfurl={props.selfurl} setLoad= {setLoad}/>

    );
    let del = (
        
                <RemForm pageContent={props.pageContent} setForm={setForm} selfurl={props.selfurl} setLoad= {setLoad} />
            
    );
    if (props.pageContent === 0) {
        return (<div></div>)
    } else {
        return (            
            <div className="main-cont" style={{ paddingLeft: `${pad}px`, transition: "0.35s" }}>
            <Searchbar searchText={searchText} searchField={searchField} setSearchField={setSearchField} setSearchText={setSearchText} columns={columns[props.pageContent - 1]} pageContent={props.pageContent} options={options[props.pageContent - 1]} form = {form} setForm={setForm} />
            <Container className="table-cont">
                {form === 0 ? table : form === 1 ? add : del}
            </Container>
        </div>
        )
    }
}