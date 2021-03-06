import React, { Component } from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap'; //Everything is going to want to use grids


export default function ProjectDisplay(props) {
    function handleClick(e) { 
        //Exit this view
        props.onClickProject(-1);
    }

    // Example of data:
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

    var awardSection = null;
    if (props.project.awards != undefined && props.project.awards.length != 0){
        
        const awardObjects = props.project.awards.map( (award) => {
            return <h3 className='highlight'><i className="material-icons">star</i>{award}</h3>
        });

        awardSection = (
            <Row className='awardSection'>
                <Col xs={12} md={2}>
                    <h3 className='header'>What I Won</h3>
                </Col>
                <Col xs={12} md={10}>
                    {awardObjects}
                </Col>      
            </Row>
        );
    }

    var gitLink = null;
    if (props.project.link_git != ""){
        gitLink= ( 
            <a href={props.project.link_git} target="_blank">
                <h4>Repository</h4>
                <i className="material-icons">link</i>
            </a>
        );
    }

    var genLink = null;
    if (props.project.link_generic != ""){
        genLink= ( 
            <a href={props.project.link_generic} target="_blank">
                <h4>More Info</h4>
                <i className="material-icons">link</i>
            </a>
        );
    }

    return(
        <Grid className='displayBox'> 
            <Row>
                <Col xs={12}>
                  <h2>{props.project.title}</h2>
                  <Button className='exitButton' onClick={handleClick} bsStyle='primary'><span>X</span></Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                   <img src={require("../Project_Images/" + props.project.images[0])}/>
                </Col>
            </Row>
            {awardSection}
            <Row className='listSection'>
                <Col xs={12} md={2}>
                    <h3>What I Used</h3>
                </Col>
                <Col xs={12} md={10}>
                    <h3 className='highlight'><i className="material-icons">code</i>{props.project.languages_used.join(", ")}</h3>
                    <h3 className='highlight'><i className="material-icons">build</i>{props.project.tools_used.join(", ")}</h3>
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
            <Row>
            <Col xs={12} className="linkSection">
                {gitLink}
                {genLink}
            </Col>
            <Col xs={12}>
                <p className='tags lightText'>Search tags: {props.project.tags.join(", ")}</p>
            </Col>
            </Row>
        </Grid>
    )
}