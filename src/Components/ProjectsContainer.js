import React, { Component } from 'react';
import ProjectItem from './ProjectItem'
import {Grid,Row, Col, Clearfix, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'; //Everything is going to want to use grids
import "./ProjectContainer.css"
//Wireframe 1: https://wireframe.cc/6Buzm0

export default class ProjectsContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.onClickProject = this.onClickProject.bind(this);
    
        this.state = {
          searchText: '',
          showSearchWarning: 'False',
          projects: props.projects,
          selectedProjects: props.projects
        };
    } 

    updateSelectedProjects(){

    }

    getValidationState() {
        //Check whether or not there are valid projects fitting this,
        //and update the selected projects list accordingly
        const length = this.state.searchText.length;
        if (length == 0){
            if (this.state.showSearchWarning != 'False') {
                this.setState({ showSearchWarning: 'False'});
            }
            return null;
        }
        else if (length > 10) {
            //Have to if check or else it'll recurse
            if (this.state.showSearchWarning != 'False') {
                this.setState({ showSearchWarning: 'False'});
            }
            return 'success';
        }
        else {
            if (this.state.showSearchWarning != 'True') {
                this.setState({ showSearchWarning: 'True'});
            }
            return 'error'; 
        }
    }

    handleSearchChange(e) {
        this.setState({ searchText: e.target.value });
        this.updateSelectedProjects();
    }

    onClickProject(proj){
        console.log(proj);
    }
    
    // id:1,
    // tags: [ "hackathon" , "social-good" , "website" , "team" ],
    // languages_used: [ "C#" ],
    // tools_used: [ "Unity", "IBM-Watson" ],
    // date: "20170100", //YYYYMMDD. Split and convert manually for display, store like this for easy sorting
    // title: 'bridgED',
    // project_description: 'Real-time image analysis and language translation, combined with AR, to allow labelling of objects around the user.',
    // work_description: '',
    // learn_description: '',
    // images: [ "test.png" , "test2.png" ],
    // link_git:"",
    // link_generic:"https://devpost.com/software/what-s-it"
    
    render (){
        const projectObjects = this.state.selectedProjects.map( (proj) => 
            <ProjectItem project={proj} onClickProject={this.onClickProject} />
        );

        return(
           <div>
            <Grid>
            <Row className="show-grid">
                <Col xs={12} md={12}>
                <form>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                    >
                    <FormControl
                        type="text"
                        value={this.state.searchText}
                        placeholder="Filter projects via title, tags, language, etc"
                        onChange={this.handleSearchChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>{ this.state.showSearchWarning == 'True' ? 'No projects match with your query.' : ''} </HelpBlock>
                    </FormGroup>
                </form>
                </Col>
                <Col xs={12} md={12}>
                    {projectObjects}
                </Col>
            </Row>
            </Grid>
           </div> 
        );
    }
}
