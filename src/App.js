import { useState } from 'react';
import Menu from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  const [darcMode, setDarkMode] = useState(false);
  return (
    <div className={darcMode ? 'dark-mode' : 'light-mode'}>
      <Menu theme={darcMode} />
      <div className="container">
        <div className="setTheme">
          <Button onClick={() => { setDarkMode(!darcMode) }} variant={darcMode ? "dark" : "light"} size='lg' >
            <FontAwesomeIcon icon={darcMode ? faSun : faMoon} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
