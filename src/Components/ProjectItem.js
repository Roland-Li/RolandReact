import React, { Component } from 'react';
import {Grid,Row, Col, Clearfix, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'; //Everything is going to want to use grids


export default function ProjectItem(props) {
    function handleClick(e) { 
        props.onClickProject(props.project)
    }

    return(
        <Row className='itemBox' onClick={handleClick}> 
            <Col xs={3} md={3} className='itemThumbnail'>
                <img src={require("../Project_Images/" + props.project.images[0])}/>
                <div className="imageGradient"></div>
            </Col>
            <Col xs={9} md={9} className='itemInfo'>
                <Row className='itemTitle'><h3>{props.project.title}</h3> <p className='lightText topTags'>| {props.project.tags.sort().join(', ')}</p></Row>
                <Row><p className='itemDescription'>{props.project.project_description}</p></Row>
                <Row><p className='bottomTags lightText'>{props.project.languages_used.sort().join(', ')} | {props.project.tools_used.sort().join(', ')}</p></Row>
            </Col>
        </Row>
    )
}