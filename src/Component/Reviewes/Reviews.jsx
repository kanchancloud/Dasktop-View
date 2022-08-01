import React from 'react';
import "./Review.css";
import {BsStarFill} from "react-icons/bs";
import ButtonWrap from "./ButtonWrap";

const Reviews = () => {
    return (
        <div className="FUllReview">
            <span className="heading">Review</span>
            <span className="Number_Review">4.0</span>
            <div className="ButtonWrap">
                <ButtonWrap/>
            </div>
            <div className="StarWrap">
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill style={{color: "LightGray"}}/>
                <span>25 Reviews</span>
                <span>23 people found this company genuine</span>
            </div>
            <div className="ReviewWrap">
                <div className="row">
                    <div style={{display: "flex",gap:"20px"}}>
                        <div className="side">
                            <div>5</div>
                        </div>
                        <div className="middle">
                            <div className="bar-container">
                                <div className="bar-5"></div>
                            </div>
                        </div>
                        <div className="side right">
                            <div>75%  18</div>
                        </div>
                    </div>
                    <div style={{display: "flex",gap:"20px"}}>
                        <div className="side">
                            <div>4</div>
                        </div>
                        <div className="middle">
                            <div className="bar-container">
                                <div className="bar-4"></div>
                            </div>
                        </div>
                        <div className="side right">
                            <div>35% 12</div>
                        </div>
                    </div>
                    <div style={{display: "flex",gap:"20px"}}>
                        <div className="side">
                            <div>3</div>
                        </div>
                        <div className="middle">
                            <div className="bar-container">
                                <div className="bar-3"></div>
                            </div>
                        </div>
                        <div className="side right">
                            <div>15% 3</div>
                        </div>
                    </div>
                    <div style={{display: "flex",gap:"20px"}}>
                        <div className="side">
                            <div>2</div>
                        </div>
                        <div className="middle">
                            <div className="bar-container">
                                <div className="bar-2"></div>
                            </div>
                        </div>
                        <div className="side right">
                            <div>5% 1</div>
                        </div>
                    </div>
                    <div style={{display: "flex",gap:"20px"}}>
                        <div className="side">
                            <div>1</div>
                        </div>
                        <div className="middle">
                            <div className="bar-container">
                                <div className="bar-1"></div>
                            </div>
                        </div>
                        <div className="side right">
                            <div>3% 2</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reviews;