import React, { Component } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

//Has the elements for all things project-related, even the display
export default class Particle extends Component {
    state = {
        color: 'green'
    };
    handleClick = () => {
        this.setState({
            color: Konva.Util.getRandomColor()
        });
    };
    render() {
        return (
            <Rect
            x={20}
            y={20}
            width={50}
            height={50}
            fill={this.state.color}
            shadowBlur={5}
            onClick={this.handleClick}
            />
        );
    }
}