import React from 'react';
import { HiBriefcase } from "react-icons/hi";
import { BiSortAlt2 } from "react-icons/bi";
import { IoTrendingUpOutline } from "react-icons/io5";
import { FaHospital } from "react-icons/fa";
import "./MainIcon.css"

const MainIcon = () => {
    return (
        <div className="Icon_Wrapper">
            <div className="Manufacturer">
                <HiBriefcase className="BagIcon"/>
                <p>Nanture of Business
                    Manufacturer</p>
            </div>
            <div className="Manufacturer">
                <BiSortAlt2  className="BagIcon"/>
                <p>Import/export code
                    ADBN1*********</p>
            </div>
            <div className="Manufacturer">
                <IoTrendingUpOutline  className="BagIcon"/>
                <p>Annual Turnover
                    Rs. 100 300 Crore</p>
            </div>
            <div className="Manufacturer">
                <FaHospital  className="BagIcon"/>
                <p>Year of Establishment
                    2003</p>
            </div>
        </div>
    );
};

export default MainIcon;