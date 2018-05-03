import React, { Component } from 'react';
import {Grid,Row, Col, Clearfix, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'; //Everything is going to want to use grids

//Wireframe 1: https://wireframe.cc/6Buzm0

export default class ProjectsContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
          searchText: '',
          showSearchWarning: 'False',
          projects: [],
          selectedProjects: []
        };
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

    handleChange(e) {
        this.setState({ searchText: e.target.value });
    }
    
    
    render (){
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
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>{ this.state.showSearchWarning == 'True' ? 'No projects match with your query.' : ''} </HelpBlock>
                    </FormGroup>
                </form>
                </Col>
                <Col xs={6} md={4}>
               
                </Col>
            </Row>
            </Grid>
           </div> 
        );
    }
}
