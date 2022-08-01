import React from 'react';
import {FaMapMarkerAlt} from "react-icons/fa";
import {BsCheckCircleFill} from "react-icons/bs";
import {BsHandThumbsUpFill} from "react-icons/bs";
import {BsStarFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import "./MainPage.css"
import HomeTap from "../HomeTaps/HomeTap";
import CardPage from "../Card/Card";
import About from "../Menu/about/About";

const MainPage = () => {
    return (
        <>
            <div style={{
                backgroundImage: `url(assets/backGroundImg.jpg)`,
                backgroundRepeat: "No-repeat",
                backgroundSize: " 100vw 100%"
            }}
                 className="Breadcrumbs_wrap">
                <p className="Title_wrap">Chemzone Pharma
                    <span>
                    (Manufacturer)
                </span>
                </p>
                <div className="mapWrap">
                    <Link to="#" className="mapAddWrapper">
                        <FaMapMarkerAlt className="MapIcon" style={{color:"white"}}/>
                        <p>Panchkula haryana </p>
                    </Link>
                    <Link to="#" className="GstWrap">
                        <BsCheckCircleFill className="successIcon"/>
                        <p> GST- 24AADCD8575D1ZO</p>
                    </Link>
                    <Link to="#" className="ratingWrapper">
                        <BsHandThumbsUpFill className="rating_Icon"/>
                        <p>4.8/5</p>
                        <BsStarFill className="star_Icon"/>
                        <BsStarFill className="star_Icon"/>
                        <BsStarFill className="star_Icon"/>
                        <BsStarFill className="star_Icon"/>
                        <BsStarFill className="star_Icon"/>
                    </Link>
                </div>
                <Link to="#" className="logo_wrap">
                    <img src="assets/Logo.png" alt="img" className="Logo"/>
                </Link>
            </div>
            <div className="HomeTaps_Wrapper">
                <HomeTap/>
            </div>
            <div className="CardsWrapper">
                <CardPage/>
            </div>
            <div>
                <About/>
            </div>
        </>
    )
        ;
};

export default MainPage;