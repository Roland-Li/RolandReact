import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import ProjectDisplay from './ProjectDisplay';
import {Grid, Row, Col, Clearfix, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'; //Everything is going to want to use grids
import "./ProjectContainer.css";

//Wireframe 1: https://wireframe.cc/6Buzm0

//Has the elements for all things project-related, even the display
export default class ProjectsContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.onClickProject = this.onClickProject.bind(this);

        //this.updateSelectedProjects = this.updateSelectedProjects.bind(this);
    
        this.state = {
          searchText: '',
          showSearchWarning: 'False',
          projects: props.projects,
          selectedProjects: props.projects,
          displayProject: -1 //Reference project by ID instead of making a copy of the project object
        };
    } 

    getValidationState() {
        //Check whether or not there are valid projects fitting this,
        //and update the selected projects list accordingly
        const length = this.state.selectedProjects.length;

        if (length == 0){
            if (this.state.showSearchWarning != 'True') {
                this.setState({ showSearchWarning: 'True'});
            }
            return 'error'; 
        }
        else  {
            //Have to if check or else it'll recurse
            if (this.state.showSearchWarning != 'False') {
                this.setState({ showSearchWarning: 'False'});
            }
            return null;
        }
    }

    getUpdatedSelection(newSearchText){
        //Loop through the projects list and select the ones matching the searchText
        var newSelectedProjects = [];
        for (var i = 0, len = this.state.projects.length; i < len; i++) { 
            // console.log("checking " + this.state.projects[i].title); 
            //Check the title
            if (this.state.projects[i].title.toLowerCase().startsWith(newSearchText)){
                // console.log("Matching " + this.state.projects[i].title);
                newSelectedProjects.push(this.state.projects[i]);
                continue;
            }

            //Check tags
            for (var j = 0, len2 = this.state.projects[i].tags.length; j < len2; j++){

            }
        }

        //Update
        return newSelectedProjects;
    }

    handleSearchChange(e) {
        var newSearchText = e.target.value.toLowerCase();

        if (newSearchText.length > 0){
            //Pass it so it's faster than waiting for updated state value
            var newSelectedProjects = this.getUpdatedSelection(newSearchText);
            this.setState({selectedProjects: newSelectedProjects, searchText: newSearchText });
        }
        else {
            //Reset back to showing all
            this.setState({selectedProjects: this.state.projects, searchText: newSearchText });
        }
    }

    onClickProject(rowID){
        this.setState({displayProject: rowID});
    }

    onClickReturn(){
        this.setState({displayProject: -1});
    }

    onSubmitSearch(e){
        e.preventDefault();
    }
    
    render (){
        //Either display a selected project, or display the nav section to allow one to be chosen
        if (this.state.displayProject != '-1'){
            return(
                <ProjectDisplay project={this.state.selectedProjects[this.state.displayProject]} onClickProject={this.onClickProject}/>
            )
        }
        else {
            var count = -1;
            const projectObjects = this.state.selectedProjects.map( (proj) => {
                count = count + 1;
                return <ProjectItem project={proj} onClickProject={this.onClickProject} rowID={count}/>
            });

            return (
                <Grid>
                <Row>
                    <Col xs={12} md={12}>
                    <form onSubmit={this.onSubmitSearch}>
                    <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                        <FormControl
                            type="text"
                            value={this.state.searchText}
                            placeholder="Filter projects via title, tags, language, etc"
                            onChange={this.handleSearchChange}
                            onSubmit={(e) => {
                                /**
                                * Prevent submit from reloading the page
                                */
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>{ this.state.showSearchWarning == 'True' ? 'No projects match with your query.' : ''} </HelpBlock>
                    </FormGroup>
                    </form>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="projectWindow">
                        {projectObjects}
                    </Col>
                </Row>
                </Grid>
            )
        }
    }
}
