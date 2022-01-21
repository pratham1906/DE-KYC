import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar' 
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Link className="navbar-brand" to="/Organization" style={{color:'white'}}>KYC Blockchain</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/Organization/add" style={{color:'white'}}>Add KYC</Link>
                        <Link className="nav-link" to="/Organization/update" style={{color:'white'}}>Update KYC</Link>
                        <Link className="nav-link" to="/Organization/request" style={{color:'white'}}>Request KYC</Link>
                        <Link className="nav-link" to="/Organization/list" style={{color:'white'}}>List Request</Link>
                        <Link className="nav-link" to="/Organization/view" style={{color:'white'}}>View KYC</Link>
                        <Link className="nav-link" to="/Organization/delete" style={{color:'white'}}>Delete Request</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link style={{color:'white'}}>{this.props.account}</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
