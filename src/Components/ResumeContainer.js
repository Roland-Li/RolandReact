import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap'; 
import { Document, Page } from 'react-pdf';

export default function ResumeContainer(props) {

    //Need to set width based off containers
    var pageWidth = window.innerWidth;
    
    if (pageWidth >= 1200){
        pageWidth = 1170;
    }
    else if (pageWidth > 992){
        pageWidth = 970;
    }
    else if (pageWidth > 768){
        pageWidth = 750;
    }
    else{
        //Mobile
        pageWidth = pageWidth;
    }

    pageWidth = pageWidth - 30; //Padding from container
    
    return(
        <Grid>
            <Row className='resumeContainer'>
            <Col xs="12" className="importantTextArea">
                <h3>Looking to hire? Below is an embedded copy of my resume. Or, 
                    <a href={require("../Files/resume.pdf")} target="_blank"> you can view it with a pdf viewer. </a>
                </h3>
            </Col>
            <Col xs="12">
                <Document file={require("../Files/resume.pdf")}>
                    <Page pageNumber={1} width={pageWidth}/>
                </Document>
            </Col>
            <Col xs="12" className="importantTextArea">
                <h3>Good enough for safe keeping? 
                    <a href={require("../Files/resume.pdf")} download> Click here to download it. </a>
                </h3>
            </Col>
            </Row>
        </Grid>
    )
}