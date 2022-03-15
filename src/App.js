import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import Menu from './Component/Navbar';
import About from "./Component/About";
import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const [darcMode, setDarkMode] = useState(false);
  return (
    <div className={(darcMode ? 'dark-mode' : 'light-mode') + ' background'}>

      <Menu theme={darcMode} />
      <div className="container">
        <div className="setTheme">
          <Button onClick={() => { setDarkMode(!darcMode) }} variant={darcMode ? "dark" : "light"} size='lg' >
            <FontAwesomeIcon icon={darcMode ? faSun : faMoon} />
          </Button>
        </div>
        <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home theme={darcMode} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
