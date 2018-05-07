import React, { Component } from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap'; //Everything is going to want to use grids


export default function ProjectDisplay(props) {
    function handleClick(e) { 
        //Exit this view
        props.onClickProject(-1);
    }

    // id:1,
    // tags: [ "hackathon" , "social-good" , "website" , "team" ],
    // languages_used: [ "C#" ],
    // tools_used: [ "Unity", "IBM-Watson" ],
    // date: "20170100", //YYYYMMDD. Split and convert manually for display, store like this for easy sorting
    // title: 'bridgED',
    // project_description: 'Real-time image analysis and language translation, combined with AR, to allow labelling of objects around the user.',
    // work_description: '',
    // learn_description: '',
    // images: [ "test.png" , "test2.png" ],
    // link_git:"",
    // link_generic:"https://devpost.com/software/what-s-it"
    
    console.log(props);

    return(
        <Grid className='displayBox'> 
            <Row>
                <Col xs={12}>
                  <h2>{props.project.title}</h2>
                  <Button className='exitButton' onClick={handleClick} bsStyle='primary'>X</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                   <img src={require("../Project_Images/" + props.project.images[0])}/>
                </Col>
            </Row>
            <Row className='listSection'>
                <Col xs={12} md={2}>
                    <h3>What I Used</h3>
                </Col>
                <Col xs={12} md={10}>
                    <i class="material-icons">code</i>
                    <h3 className='highlight'>{props.project.languages_used.join(", ")}</h3>
                    <i class="material-icons">build</i>
                    <h3 className='highlight'>{props.project.tools_used.join(", ")}</h3>
                </Col>   
            </Row>
            <Row>
                <Col xs={12} md={2}>
                    <h3>What It Was</h3>
                </Col>
                <Col xs={12} md={10}>
                    <p>{props.project.project_description}</p>
                </Col>            
            </Row>
            <Row>
                <Col xs={12} md={2}>
                     <h3>What I Did</h3>
                </Col>
                <Col xs={12} md={10}>
                    <p>{props.project.work_description}</p>
                </Col>   
            </Row>
            <Row>
                <Col xs={12} md={2}>
                    <h3>What I Learned</h3>
                </Col>
                <Col xs={12} md={10}>
                    <p>{props.project.learn_description}</p>
                </Col> 
                <Col xs={12}>


                </Col>
            </Row>
        </Grid>
    )
}