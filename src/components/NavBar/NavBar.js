import { Button, Container, Form, InputGroup, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavBar.module.css';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineFileText } from 'react-icons/ai';
import { useState } from 'react';
import PaymentInfo from '../PaymentInfo';

const NavBar = () => {
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  return (
    <>
      <Navbar expand="lg" className={`${styles.bgRed} ${styles.textWhite}`} data-bs-theme="dark" sticky='top' >
        <Container fluid>
          <Navbar.Toggle aria-controls="menubar" data-target="#menubar" />
          <Navbar.Brand href="/">PaySimply</Navbar.Brand>
          <button className="navbar-toggler" onClick={() => setShowPaymentInfo(!showPaymentInfo)}><AiOutlineFileText /></button>
          <Navbar.Collapse id="menubar" className='justify-content-end'>
            <Nav
              className="my-2 my-lg-0"
              navbarScroll
            >
              <Form className="d-flex align-items-end" data-bs-theme="light">
                <InputGroup>
                  <Form.Control
                    placeholder="Search for a bill..."
                    aria-label="Search for a bill"
                  />
                  <Button variant="light" id="button-addon2">
                    <BiSearch />
                  </Button>
                </InputGroup>
              </Form>
              <Nav.Link href="/">Payment Status</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/">Help</Nav.Link>
              <NavDropdown title="Language" className={`${styles.bgRed} ${styles.textWhite}`}>
                <NavDropdown.Item href="/">English</NavDropdown.Item>
                <NavDropdown.Item href="/">
                  Francais
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
      {
        showPaymentInfo ? (
          <PaymentInfo className="mt-4" />
        ) : (
          null
        )
      }
    </>
  );
}

export default NavBar;