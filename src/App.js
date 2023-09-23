// import logo from './logo.svg';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import About from './components/About';
import React, { useState } from 'react';


import './App.css';
let name ="React Developer";
let name1 ="<b>React Developer</b>";
function App() {

  const [mode,changeMode]=useState("light");

  const togglemode=()=>{
    if(mode==="dark"){
      changeMode("light");
      document.body.style.backgroundColor='rgb(176, 224, 230)';//rgb(4, 38, 69)
    }
    else{
      changeMode("dark");
      document.body.style.backgroundColor='grey';
    }
  }
  return (
    <>
    <Navbar title="Text-Utilities" mode={mode} togglemode={togglemode}/>
    <div className="container">
        <TestForm heading="Enter text to analyze" mode={mode} togglemode={togglemode}/>
    </div>
    {/* <About/> */}
    </>
    // <div className="blank">Nice</div>
  );
}

export default App;
