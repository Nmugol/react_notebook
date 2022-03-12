import './App.css';
import Logo from './Img/Logo.png';
import { useState } from 'react';

function App() {
  const [darcMode, setDarkMode] = useState(false);
  return (
    <div className={darcMode ? 'dark-mode': 'light-mode'}>
      <div className="container">
          <button onClick={() => {setDarkMode(!darcMode)}}>mode</button>
        </div>

        <img src={Logo} alt="Logo"/>
    </div>
  );
}

export default App;
