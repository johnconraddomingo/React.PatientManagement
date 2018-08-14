import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { NavMenu } from './navMenu';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <Grid fluid>
        <Row> 
            <NavMenu />
            {this.props.children} 
        </Row>
      </Grid>
    );
  }
}
