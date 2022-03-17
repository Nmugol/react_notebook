import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Nav} from "react-bootstrap";

const AddNote = () => {
    return ( 
        <div className="noteCard addNote">
            <div className="addNote--text">
                <Nav.Link as={Link} to="/new-note">New<br/><FontAwesomeIcon icon={faAdd}/><br/>note</Nav.Link> 
            </div>
        </div>
    );
}

export default AddNote;