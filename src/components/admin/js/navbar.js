import gear from "../images/gear.png"
import "../css/navbar.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar(props) {
    return (
        <>
        <div className="navadmin">
        <nav className="navbar navbar-expand" role="navigation">
            <div className="home left-block-width nav-element nav-element-white menu admin-menu" onClick={props.menuClick}>
                    <div className="ico-menu center extra-center">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                <div className="center extra-center">Menu</div>
            </div>
            <div className="left-blocks left-block-width nav-element nav-element-white" onClick={props.homeClick}><div className="center extra-center">Home</div></div>
            <div className="navbar-brand mx-auto"><center><h2>Admin</h2></center></div>
            <div className="nav-element settings nav-element-white"><img className="settings-image" src={gear} alt="gear" /></div>
            <div className="logout nav-element nav-element-dark "><div className="center extra-center">Logout</div></div>

        </nav>
        </div>
        </>
    )
}
