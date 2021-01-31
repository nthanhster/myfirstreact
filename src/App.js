import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//import Button from './components/Button';
import TomatoButton from './components/TomatoButton';



function App() {
  const [visible, setVisible]= useState(true)


  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TomatoButton 
            onClick={() => setVisible(!visible)} 
          >  
          Hide input box!

          </TomatoButton>
          {visible === true ?   
          <input placeholder = "Your input"></input>
          : null}
        </header>
      </div>
    </>
  );
}

export default App;
