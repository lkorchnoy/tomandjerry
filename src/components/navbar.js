import React from 'react'


import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Container } from 'react-bootstrap';
import Tom from './Tom';
import Jerry from './Jerry';


const Navbar = () => {
    return (
        <Router>
          <Switch>
        
  <Navbar expand="lg" variant="light" bg="light"> 
    <Container> 
    
    <Navbar.Brand href="/tom">Tom</Navbar.Brand>
    <Navbar.Brand href="/jerry">Jerry</Navbar.Brand>
    
    
    
     </Container>  
</Navbar>
        </Switch>
        </Router>
    )
}

export default Navbar;