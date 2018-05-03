import React, { Component } from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'
import "./MyNavbar.css"

class MyNavbar extends Component {
    // deleteProject(id){
    //     this.props.onDelete(id);
    // }
    
    render() {
        // let projectItems;
        // if(this.props.projects){
        //     projectItems = this.props.projects.map(project => {
        //         //console.log(project);
        //         return (
        //             <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        //         );
        //     });
        // }
        
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
                        <NavItem eventKey={1} href="#">
                            Projects
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Resume
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                            Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

// Navbar.propTypes = {
//     projects: React.PropTypes.array,
//     onDelete: React.PropTypes.func
// }

export default MyNavbar;