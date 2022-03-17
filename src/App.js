import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import Menu from './Component/Navbar';
import About from "./Component/About";
import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom";
import Note from './Component/Note';

function App() {
  const [darcMode, setDarkMode] = useState(false);

  return (
    <div className={(darcMode ? 'dark-mode' : 'light-mode') + ' background'}>
      <style>{"body { background-color:" + (darcMode ? '#46526b' : '#cde8f0') + "; }"}</style>
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
            <Route path='/new-note' element={<Note></Note>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;