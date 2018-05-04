import React, { Component } from 'react';
import {Grid,Row, Col, Clearfix, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'; //Everything is going to want to use grids


export default class ProjectItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
          project: props.project,
          onClickProject: props.onClickProject
        };
    } 

    handleClick(e){
        //Call the "call-back" function passed to it
        this.state.onClickProject(this.state.project);
    }

    render(){
        return(
            <Row className='itemBox' onClick={this.handleClick} > 
                <Col xs={3} md={3} className='itemThumbnail'>
                    <img src={require("../Project_Images/" + this.state.project.images[0])}/>
                    <div className="imageGradient"></div>
                </Col>
                <Col xs={9} md={9} className='itemInfo'>
                    <Row><h3>{this.state.project.title}</h3> <p className='lightText topTags'>| {this.state.project.tags.sort().join(', ')}</p></Row>
                    <Row><p className='fadeOut'>{this.state.project.project_description}</p></Row>
                    <Row><p className='bottomTags lightText'>{this.state.project.languages_used.sort().join(', ')} | {this.state.project.tools_used.sort().join(', ')}</p></Row>
                </Col>
            </Row>
        );
    }
}