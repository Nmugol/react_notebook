import './App.css';
import { useState } from 'react';

function App() {
  const [darcMode, setDarkMode] = useState(false);
  return (
    <div className={darcMode ? 'dark-mode': 'light-mode'}>
      <div className="container">
          <button onClick={() => {setDarkMode(!darcMode)}}>mode</button>
        
        </div>
      
    </div>
  );
}

export default App;
