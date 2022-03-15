import { Navbar, Container, Offcanvas, Nav, NavDropdown } from "react-bootstrap";
import logo from "../Img/Logo.png";
import { Link } from "react-router-dom";


const Menu = props => {
	let darcMode = props.theme;

	return (
		<div className="topbar">
			<Navbar bg={darcMode ? "dark" : "light"} variant={darcMode ? "dark" : "light"} expand="lg">
				<Container fluid>
					<Navbar.Brand as={Link} to="/"><img src={logo} alt='Logo' className='d-inline-block' height={60} /></Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '400px' }} navbarScroll>
							<Nav.Link as={Link} to="/">Home</Nav.Link>
							<Nav.Link as={Link} to="/about">About</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Menu;
