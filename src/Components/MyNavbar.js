import React, { Component } from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'
import "./MyNavbar.css"

export default class MyNavbar extends Component {
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
                        <NavItem eventKey={1} href="#sectionProjects">
                            Projects
                        </NavItem>
                        <NavItem eventKey={2} href="#sectionResume">
                            Resume
                        </NavItem>
                        <NavItem eventKey={3} href="#sectionContact">
                            Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}