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
                        <a href="#brand">
                        <div id="header-p1"> Roland</div><div id="header-p2">Li.xyz</div>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Link
                </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
                </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Link Right
                </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link Right
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