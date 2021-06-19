import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <img src='logo512.png' className='App-mog-logo' alt='logo'/>
        <blockquote className='App-mog-mission'>
         <q>
           To shape the future of humanity through the distribution of equal, easily accessible and factual education.
           Ensuring knowledge and education is a birth right for every human being.
         </q>
        </blockquote>
      </header>
    </div>
  );
}

export default App;
