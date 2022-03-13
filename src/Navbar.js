import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, NavLink } from 'react-bootstrap';
import logo from './Img/Logo.png'

const Menu = (props) => {

    let darcMode=props.theme;

    return ( 
    <div>
        <Navbar bg={darcMode ? "dark": "light"} variant={darcMode ? "dark": "light"}>
            <Navbar.Brand href="#home"><img src={logo} alt="" height={50} className="d-inline-block"/></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>
    </div>
    );
}

export default Menu;