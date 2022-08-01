import React from 'react';
import {Link} from "react-router-dom";
// import Card from 'react-bootstrap/Card';
import "./Card.css";
import {Carousel, Card, Stack, Button} from "react-bootstrap";
import {CardData} from "./CardArray";

const CardPage = () => {
    return (
        <div>
            <div className="bg-light bg-opacity-25 container-fluid">
                <Carousel>
                    {
                        CardData.map((e) => {
                            return (
                                <Carousel.Item style={{height: 400, gap: "20px"}}>
                                    <Stack
                                        direction="horizontal"
                                        className="h-100 justify-content-center align-items-center"
                                        gap={3}
                                    >
                                        <Card className="CardWrap" style={{width: "20%"}}>
                                            <div className="CardWrapper" style={{display: "flex",}}>
                                                <Card.Img variant="top" src={e.image} className="CardIMg"
                                                          style={{width: "45%", height: "50%"}}/>
                                                <Link to="#" className="Title"
                                                      style={{paddingTop: "26px", fontSize: "20px"}}>{e.Title}</Link>
                                            </div>
                                            <p style={{
                                                marginLeft: "42%", fontWeight: "500", paddingBottom: "10px",
                                                color: "darkred", fontSize: "25px"
                                            }}>{e.price}
                                                <span style={{
                                                    fontSize: "14px",
                                                    color: "gray"
                                                }}>/stripe</span></p>
                                            <div className="Contact_supplier">
                                                <Link to="#" className="">Contact supplies</Link>
                                            </div>
                                        </Card>

                                        <Card className="CardWrap" style={{width: "20%"}}>
                                            <div className="CardWrapper" style={{display: "flex",}}>
                                                <Card.Img variant="top" src={e.image} className="CardIMg"
                                                          style={{width: "45%", height: "50%"}}/>
                                                <Link to="#" className="Title"
                                                      style={{paddingTop: "26px", fontSize: "20px"}}>{e.Title}</Link>
                                            </div>
                                            <p style={{
                                                marginLeft: "42%",
                                                fontWeight: "500",
                                                paddingBottom: "10px",
                                                color: "darkred",
                                                fontSize: "25px"
                                            }}>{e.price}
                                                <span style={{
                                                    fontSize: "14px",
                                                    color: "gray"
                                                }}>/stripe</span></p>
                                            <div className="Contact_supplier">
                                                <Link to="#" className="">Contact supplies</Link>
                                            </div>
                                        </Card>

                                        <Card className="CardWrap" style={{width: "20%"}}>
                                            <div className="CardWrapper" style={{display: "flex",}}>
                                                <Card.Img variant="top" src={e.image} className="CardIMg"
                                                          style={{width: "45%", height: "50%"}}/>
                                                <Link to="#" className="Title"
                                                      style={{paddingTop: "26px", fontSize: "20px"}}>{e.Title}</Link>
                                            </div>
                                            <p style={{
                                                marginLeft: "42%",
                                                fontWeight: "500",
                                                paddingBottom: "10px",
                                                color: "darkred",
                                                fontSize: "25px"
                                            }}>{e.price}
                                                <span style={{
                                                    fontSize: "14px",
                                                    color: "gray"
                                                }}>/stripe</span></p>
                                            <div className="Contact_supplier">
                                                <Link to="#" className="">Contact supplies</Link>
                                            </div>
                                        </Card>
                                        <Card className="CardWrap" style={{width: "20%"}}>
                                            <div className="CardWrapper" style={{display: "flex",}}>
                                                <Card.Img variant="top" src={e.image} className="CardIMg"
                                                          style={{width: "45%", height: "50%"}}/>
                                                <Link to="#" className="Title"
                                                      style={{paddingTop: "26px", fontSize: "20px"}}>{e.Title}</Link>
                                            </div>
                                            <p style={{
                                                marginLeft: "42%",
                                                fontWeight: "500",
                                                paddingBottom: "10px",
                                                color: "darkred",
                                                fontSize: "25px"
                                            }}>{e.price}
                                                <span style={{
                                                    fontSize: "14px",
                                                    color: "gray"
                                                }}>/stripe</span></p>
                                            <div className="Contact_supplier">
                                                <Link to="#" className="">Contact supplies</Link>
                                            </div>
                                        </Card>

                                    </Stack>
                                </Carousel.Item>
                                //     }
                                // }
                            )
                        })}
                </Carousel>
            </div>
        </div>
    );
};

export default CardPage;