import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap'; 

export default function ContactContainer(props) {

    return(
        <Grid>
            <Row className='contactContainer'>
                <Col xs="12" md="6">
                <div className="linkBox">
                    <a href="https://www.linkedin.com/in/roland-li/" target="_blank">
                        <img className="linkIcon" src={require("../Misc_Images/linkedin.png")}/>
                        <h3>Start a Conversiation</h3>
                    </a>
                </div>
                </Col>
                <Col xs="12" md="6">
                <div className="linkBox">
                    <a href="mailto:roland_li@hotmail.ca" target="_blank">
                        <img className="linkIcon" src={require("../Misc_Images/email.png")}/>
                        <h3>Shoot an Email</h3>
                    </a>
                </div>
                </Col>
                <Col xs="12" md="6">
                <div className="linkBox">
                    <a href="https://github.com/Roland-Li" target="_blank">
                        <img className="linkIcon" src={require("../Misc_Images/github.png")}/>
                        <h3>Browse my Repos</h3>
                    </a>
                </div>
                </Col>
                <Col xs="12" md="6">
                <div className="linkBox">
                    <a href="https://devpost.com/RolandHacks" target="_blank">
                        <img className="linkIcon" src={require("../Misc_Images/devpost.png")}/>
                        <h3>Browse my Hackathons</h3>
                    </a>
                </div>
                </Col> 
            </Row>
        </Grid>
    )
}