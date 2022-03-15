import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Offcanvas, Nav, NavDropdown} from "react-bootstrap";
import logo from "./Img/Logo.png";

const Menu = props => {
	let darcMode = props.theme;

	return (
		<div>
			<Navbar bg={darcMode ? "dark" : "light"} variant={darcMode ? "dark" : "light"} expand="lg">
				<Container fluid>
					<Navbar.Brand href="#"><img src={logo} alt='Logo' className='d-inline-block' height={60} /></Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '400px' }}navbarScroll>
							<Nav.Link href="#action1">Home</Nav.Link>
							<Nav.Link href="#action2">Link</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Menu;
