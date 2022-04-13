import React from 'react';
import logo from './logo.svg';
<<<<<<< HEAD
import './App.css';
=======
import { Counter } from './features/counter/Counter';
import './App.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
>>>>>>> 649048c540a4940294add1fae608074924d6f86d

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
