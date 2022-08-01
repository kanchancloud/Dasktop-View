import React from 'react';
import {Link} from "react-router-dom";
import "./HomeTaps.css";
import SearchBar from "./SearchBar";
import CardPage from "../Card/Card";

const HomeTap = () => {
    return (
        <div className="HomeTap_Wrap">
            <div className="HomeTap_Wrapper">
                <Link to="Home" className="Home">Home</Link>
                <Link to="Product" className="Products">Products and Services</Link>
                <a href="#Abouts" className="About">About</a>
            </div>
            <div>
                <SearchBar/>
            </div>
        </div>
    );
};

export default HomeTap;