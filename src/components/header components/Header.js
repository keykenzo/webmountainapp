import React, { Component } from 'react';
import { Navbar, Nav, FormControl } from 'react-bootstrap';


const textStyle=
{
    fontSize:'200%',
    fontweight:'bolder'
};
class Header extends Component {

  render(){
    return(
        <header>
            <Navbar bg="" expand="" className="d-flex justify-content-center">
            <Navbar.Brand href="#home" style={textStyle}> <img src={('https://i.imgur.com/FnfavoK.png')}/> Mountain Cliff</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#gallery">Gallery</Nav.Link>
                    <Nav.Link href="#discover">Discover</Nav.Link>
                    
                <FormControl type="text" placeholder="Search" />
                </Nav>
                
            </Navbar.Collapse>
            </Navbar>
        </header>
    );
  }
}
export default Header;


/*home
features
discorver https://i.imgur.com/FnfavoK.png */