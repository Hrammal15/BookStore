import React from 'react';
import {Navbar, Button} from 'react-bootstrap';
import banner from '../../pictures/banner.png'; 
import 'bootstrap/dist/css/bootstrap.min.css';


export const NavigationPreLogin: React.FunctionComponent<any> = (props) => {

  return(
<div style={{width:"100%", position:"fixed",top:"0"}}>
<Navbar style={{ height:"2.2em"}} collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Super Duper Awesome Books</Navbar.Brand>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
  <Navbar.Collapse id="responsive-navbar-nav">

    <div style={{position:"absolute" , right:"0",}}> 
    <Button variant="outline-secondary" size="lg">
      Sign in
    </Button>{' '}
    <Button href="/register"  variant="outline-secondary" size="lg">
      Register
    </Button>
    </div>

  </Navbar.Collapse>
  
</Navbar>
<img style={{width:"100%"}}  src={banner} alt="Logo" />

</div>


  )
}