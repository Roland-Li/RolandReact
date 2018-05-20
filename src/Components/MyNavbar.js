import React, { Component } from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'
import "./MyNavbar.css"

import animateScrollTo from 'animated-scroll-to';

export default class MyNavbar extends Component {

    iCri(){
        console.log(document.getElementById('sectionProjects'));
    }

    render() {
        return (
            <Navbar inverse collapseOnSelect className="MyNavbar">
                <Navbar.Header>
                    <Navbar.Brand className="MyNavbar-Brand">
                        <a href="#MyNavbar">
                        <div id="header-p1">Roland</div>
                        <div id="header-p2">Li</div>
                        <div id="header-p3">.xyz</div>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} onClick={()=>{animateScrollTo(document.getElementById('sectionProjects'))}}>
                            Projects
                        </NavItem>
                        <NavItem eventKey={2} onClick={()=>{animateScrollTo(document.getElementById('sectionResume'))}}>
                            Resume
                        </NavItem>
                        <NavItem eventKey={3} onClick={()=>{animateScrollTo(document.getElementById('sectionContact'))}}>
                            Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}