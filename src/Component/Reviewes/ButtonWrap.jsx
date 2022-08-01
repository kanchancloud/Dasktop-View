import React from 'react';
import {Button} from "react-bootstrap";

const ButtonWrap = () => {
    return (
        <div style={{display:"flex",gap:"25px"}}>
            <div>
                <Button style={{backgroundColor:"darkred",borderRadius:"5px", border:"1px solid black",padding:"7px 20px"}}>Write review</Button>
            </div>
            <div>
                <Button style={{borderRadius:"5px", backgroundColor:"white",color:"black", border:"1px solid black",padding:"7px 15px"}}>view all review</Button>
            </div>
        </div>
    );
};

export default ButtonWrap;