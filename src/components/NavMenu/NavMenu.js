import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import "./NavMenu.css"

const NavMenu = () => {
    return (
        <Navbar className="navbar" expand="md">
            <Container>
                <Navbar.Brand to="/home">
                    <img src="./logo.png" alt="" width="200px" height="80px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                        <Stack direction="horizontal" gap={3}>
                            <NavLink className="link" to="/home" style={{textDecoration: "none",color: "white",padding: "5px 10px"}} activeStyle={{color: "black",fontWeight: "bold",background: "white",borderRadius:"20px"}}>
                                HOME
                            </NavLink>

                            <NavLink to="/courses" style={{textDecoration: "none",color: "white",padding: "5px 10px"}} activeStyle={{color: "black",fontWeight: "bold",background: "white",borderRadius:"20px"}}>
                                COURSES
                            </NavLink>

                            <NavLink to="/instructors" style={{textDecoration: "none",color: "white",padding: "5px 10px"}} activeStyle={{color: "black",fontWeight: "bold",background: "white",borderRadius:"20px"}}>
                                INSTRUCTORS
                            </NavLink>

                            <NavLink to="/aboutus" style={{textDecoration: "none",color: "white",padding: "5px 10px"}} activeStyle={{color: "black",fontWeight: "bold",background: "white",borderRadius:"20px"}}>
                                ABOUT US
                            </NavLink>
                        </Stack>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    );
};

export default NavMenu;