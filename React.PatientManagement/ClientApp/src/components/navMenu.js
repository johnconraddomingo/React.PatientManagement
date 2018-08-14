import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
  
export class NavMenu extends Component {
    displayName = NavMenu.name
    render() {
        return (
            <Navbar inverse fixedTop fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand >
                        <Link to={'/'}>Branding</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav >
                        <LinkContainer to={'/'} exact>
                            <NavItem>Home</NavItem>
                        </LinkContainer>
                         <LinkContainer to={'/patients'}>
                            <NavItem>Patients</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}