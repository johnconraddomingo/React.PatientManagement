import React, { Component } from 'react';
import { Toolbar } from './toolbar';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export class Home extends Component {
  displayName = Home.name

  render() {
    return (
        <div>
            <Toolbar 
                buttons = {[
                        {'className' : 'patient', 'text' : 'Patients', 'link' : '/patients'}
                        , {'className' : 'dataSources', 'text' : 'Datasources', 'link' : '/datasources'} 
                    ]}
                text="Virtual Screens" />
            <Col sm={9}>  
                <h3>Home</h3>
                <p>Welcome to the Patient Management System<br />
                    Put your description here. Here's a quick link to the <Link to="/patients">Patients Portal</Link>. 
                </p>            
            </Col>
      </div>
    );
  }
} 