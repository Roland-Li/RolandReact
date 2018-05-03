import React, { Component } from 'react';
import {Grid,Row, Col, Clearfix} from 'react-bootstrap'; //Everything is going to want to use grids
export default class ProjectsContainer extends Component {
    render (){
        return(
           <div>
            <Grid>
            <Row className="show-grid">
                <Col xs={12} md={8}>
                <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
                </Col>
                <Col xs={6} md={4}>
                <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
                </Col>
            </Row>
            </Grid>
           </div> 
        );
    }
}
