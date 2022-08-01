import React from 'react';
import {Carousel, Card, Stack, Button} from "react-bootstrap";
import {reviews} from "./reviews"

const CardProduct = () => {
    return (
        <div>
            <div className="PharmaLinkWrap">
                <a href="#" className="PharmaLink">View all products by Chemzone Pharma</a>
            </div>
            <div className="bg-dark bg-opacity-25 container-fluid">
                <Carousel style={{height: 500}}>
                    {
                        reviews.map((e) => {
                            return (
                                <Carousel.Item style={{height: 500}}>
                                    <Stack
                                        direction="horizontal"
                                        className="h-100 justify-content-center align-items-center"
                                        gap={3}
                                    >
                                        <Card style={{width: "18rem"}}>
                                            <Card.Body>
                                                <Card.Img src={e.image}/>
                                                <Card.Title>{e.title}</Card.Title>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{width: "18rem"}}>
                                            <Card.Body>
                                                <Card.Img src={e.image}/>
                                                <Card.Title>{e.title}</Card.Title>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{width: "18rem"}}>
                                            <Card.Body>
                                                <Card.Img src={e.image}/>
                                                <Card.Title>{e.title}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Stack>
                                </Carousel.Item>
                            )
                        }
                    )}
                </Carousel>
            </div>
        </div>
    );
};

export default CardProduct;