import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import {Nav, NavBar, Container, NavDropdown} from 'react-bootstrap';

export default function NavBar () {
    
    return (
        // <nav className="navbar navbar-expand-lg bg-dark">
        //     <div className="container-fluid">
        //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //         <ul className="navbar-nav">
        //             <li className="nav-item">
        //                 <Link className='nav-link' to="/">Home</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className='nav-link' to="/meals">Meals</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className='nav-link' to='/search'>Search</Link>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as = {Link} to="/">Food-Mapper</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as ={Link} to="/">Home</Nav.Link>
                    {/* <Nav.Link as ={Link} to = "/meals">Meals</Nav.Link> */}
                    <NavDropdown title="Meals" id="basic-nav-dropdown">
                    <NavDropdown.Item as = {Link} to = "meals/Snacks">Snacks</NavDropdown.Item>
                    <NavDropdown.Item as = {Link} to = "meals/Whole Meals">
                        Whole Meals
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                    {/* <NavDropdown.Divider /> */}
                    {/* <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item> */}
                    </NavDropdown>
                    <NavDropdown title="Drinks" id="basic-navbar-nav-dropdown">
                        <NavDropdown.Item href="alcoholic">Alcoholic</NavDropdown.Item>
                        <NavDropdown.Item href="non-alcoholic">Non-alcoholic</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}
