import React, { Component } from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'
import "./MyNavbar.css"

import animateScrollTo from 'animated-scroll-to';

export default class MyNavbar extends Component {
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(event) {
        var nav1 = document.getElementById('nav1')
        var nav2 = document.getElementById('nav2')
        var nav3 = document.getElementById('nav3')

        // Set to default coloring
        nav1.setAttribute("style","color:#cdcdcd")
        nav2.setAttribute("style","color:#cdcdcd")
        nav3.setAttribute("style","color:#cdcdcd")
        
        var offset = window.screen.height - window.screen.height/3 
        
        // console.log(offset + " " + document.getElementById('sectionResume').getBoundingClientRect().top + " " + document.getElementById('sectionContact').getBoundingClientRect().top)

        // Highlight based on position
        if (document.getElementById('sectionContact').getBoundingClientRect().top < offset){
            nav3.setAttribute("style","color:#fff")
        }
        else if (document.getElementById('sectionResume').getBoundingClientRect().top < offset){
            nav2.setAttribute("style","color:#fff")
        } 
        else {
            nav1.setAttribute("style","color:#fff")
        }
    }
    
    render() {
        return (
            <Navbar inverse fixedTop="true" collapseOnSelect className="MyNavbar">
                <Navbar.Header>
                    <Navbar.Brand className="MyNavbar-Brand">
                        <a onClick={()=>{animateScrollTo(0)}}>
                        <div id="header-p1">Roland</div>
                        <div id="header-p2">Li</div>
                        <div id="header-p3">.xyz</div>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem id="nav1" eventKey={1} onClick={()=>{animateScrollTo(document.getElementById('sectionProjects'))}}>
                            Projects
                        </NavItem>
                        <NavItem id="nav2" eventKey={2} onClick={()=>{animateScrollTo(document.getElementById('sectionResume'))}}>
                            Resume
                        </NavItem>
                        <NavItem id="nav3" eventKey={3} onClick={()=>{animateScrollTo(document.getElementById('sectionContact'))}}>
                            Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}