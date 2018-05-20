import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap'; 


export default function ResumeContainer(props) {

    return(
        <Grid>
            <Row className='resumeContainer'> 
                <embed src={require("../Files/resume.pdf")} type="application/pdf" width="100%" height="600px" />
            </Row>
        </Grid>
    )
}