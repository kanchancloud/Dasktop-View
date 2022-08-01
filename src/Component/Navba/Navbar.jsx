import Container from 'react-bootstrap/Container';
import {FaRegSquare} from "react-icons/fa";
import {FaUserCircle} from "react-icons/fa";
import "./Navbar.css";
import {Link} from "react-router-dom";
import MainPage from "../mainPage/MainPage";


const Navbar = () => {
    return (
        <div className="Container-fluid">
            <div className="Header_wrapper">
                <FaRegSquare className="Icon"/>
                <h4 className="Company_Name">Medical Darpan</h4>
                <div className="Manu_wrapper">
                    <Link to="Home" className="Manu">Home</Link>
                    <Link to="Product" className="Manu">Product</Link>
                    <Link to="Distributors" className="Manu">Distributors</Link>
                    <Link to="Manufacturers" className="Manu">Manufacturers</Link>
                    <a href="#Abouts" className="Manu">About us</a>
                    <Link to="Blog" className="Manu">Blog</Link>
                </div>
                <div className="auth_wrap">
                    <Link to="LoginPage" className="Login">Login</Link>
                    <Link to="#"><FaUserCircle className="Profile_Icon"/></Link>
                </div>
            </div>
            <div className="MainPageWraps">
                <MainPage/>
            </div>
        </div>
    );
};

export default Navbar;