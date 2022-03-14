import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import logo from "./Img/Logo.png";

const Menu = props => {
	let darcMode = props.theme;

	return (
		<div>
			<Navbar bg={darcMode ? "dark" : "light"} variant={darcMode ? "dark" : "light"} expand={false}>
				<Container fluid >
					<Navbar.Brand href="#"><img src={logo} alt='Logo' className='d-inline-block' height={60} /></Navbar.Brand>
					<Navbar.Toggle aria-controls="offcanvasNavbar" />
					<Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" >
						<Offcanvas.Header closeButton className={darcMode ? 'dark-mode-bar' : 'light-mode-bar'} >
							<Offcanvas.Title id="offcanvasNavbarLabel"><img src={logo} alt='Logo' className='d-inline-block' height={54} /></Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body className={darcMode ? 'dark-mode' : 'light-mode'}>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<Nav.Link href="#action1">Home</Nav.Link>
								<Nav.Link href="#action2">Link</Nav.Link>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</div>
	);
};

export default Menu;
