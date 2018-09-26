import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap'; 
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import Particle from './Particle.js'

export default class ParticleContainer extends Component{

    // constructor(props, context) {
    //     super(props, context);

    //     //Default (no read in; use this)
    //     this.state = {
            
    //     };
    // } 

    // componentDidMount(){

    // }

    render(){
        return(
            <Stage width={window.innerWidth} height={window.innerHeight}>
                {/* <Layer>
                    <Text text="Try click on rect" />
                    <Particle />
                </Layer> */}
            </Stage>
        )
    }
}