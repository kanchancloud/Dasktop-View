import React from 'react';
import {Carousel} from 'react-bootstrap';
import "./Images.css"

const Iamges = () => {
    return (
        <div className='container' style={{marginTop:"2%"}}>
            <div className="row">
                <div className="col-12" >
                    <Carousel className="Carousel_Wrapper">
                        <Carousel.Item style={{display: "flex", height: "40%"}} interval={2000} >
                            <img
                                className="image_Wrapper d-flex"
                                src="assets/Lab.jpg"
                                alt="First slide"
                            />
                            <img
                                className="faviImg d-flex w-50%"
                                src="assets/cardImg.webp"
                                alt="Second slide"
                            />
                            <img
                                className="imgs d-flex"
                                src="assets/CarouselForImg.jpg"
                                alt="Second slide"
                            />
                            <img
                                className="CaroImg "
                                src="assets/CarouselImg.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Iamges;