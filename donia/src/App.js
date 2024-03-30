import './App.css';
import {Container ,Nav,Navbar, NavDropdown }from 'react-bootstrap';
function App() {


  return ( 
<>
<div className="App">

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Shop NOW </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">NEW In </Nav.Link>
            <Nav.Link href="#link">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bags</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Shoes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dresses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Jewerly & Accessories
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
</>
  );

}

export default App;

