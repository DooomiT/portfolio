import { Container, Nav, Navbar } from 'react-bootstrap'
import { Route, Link } from 'react-router-dom'
import { About } from '../pages/About'

export const navbar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#about">Portfolio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to ='/about'><About/></Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
