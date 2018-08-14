import React, { Component } from 'react';
import { Toolbar } from './toolbar';
import { Col, Table, Modal, Button } from 'react-bootstrap';
import Link from '../../node_modules/react-router-dom/Link';
import '../styles/tables.css';

export class Patients extends Component {

    constructor(props) {

        super(props);
        this.state = { patients: [], loading: true, showEdit: true };
           
        fetch('api/Patients/Patients')
            .then(response => response.json())
            .then(data => {
                this.setState({ patients: data, loading: false });
            })
            .catch(function (error) {
                console.log('Fetch Exception: ', error);
            });;

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() { this.setState({ showEdit: false }); }
    handleShow() { this.setState({ showEdit: true }); }


    renderPatientsTable(patients) {
        return (
            <Table striped condensed hover>
                <thead>
                    <tr>
                        <th>Surname</th>
                        <th>First Name</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(p =>
                        <tr key={p.id}>
                            <td>{p.surname}</td>
                            <td>{p.firstName}</td>
                            <td>
                                <Link to={'/patients/edit/' + p.id} onClick={this.handleShow} > 
                                    <button className="actionLink edit">
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        );
    }
    
    editModal(patientId) {
        return (
            <div>
                <Modal  show={this.state.showEdit} onHide={this.handleClose}  >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Edit this Patient: ID {patientId}
                        </p>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            );
    }

    render() {
         

        const action = this.props.match.params.action;
        const actionId = this.props.match.params.actionId;

        const contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderPatientsTable(this.state.patients);
        const edit = action === "edit" ? this.editModal(actionId) : "";

        return (
            <div>
                <Toolbar
                    buttons={[
                        { 'className': 'create', 'text': 'Create', 'link': '/patients/create' },
                        { 'className': 'devices', 'text': 'Devices', 'link': '/devices' }
                    ]}
                    text="Patients Listing" />
                <Col sm={9}>
                    <h3>Patients Listing</h3>
                    Patients List. Click on the pencil icon below to edit that line
                        <div className="body-padding">
                        {contents}
                        {edit}
                    </div>
                </Col>
            </div>
        );
    }
}
