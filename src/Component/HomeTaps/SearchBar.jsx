import React from 'react';
import {FaHospital, FaSearch} from "react-icons/fa";
import "./SearchBar.css"
import { FaPhoneVolume } from "react-icons/fa";

const SearchBar = () => {
    return (
        <div className="search-container">
            <form>
                <button type="submit"><FaSearch/></button>
                <input type="text" placeholder="Enter product/Service" name="search"/>
            </form>
            <div className="Contact">
                {/*<FaPhoneVolume className="Contact_Icon"/>*/}
                <FaPhoneVolume className="Contact_Icon"/>
                <p className="Contact_Number"> Call 9999999999</p>
            </div>
        </div>
    );
};

export default SearchBar;