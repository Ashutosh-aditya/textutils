// import logo from './logo.svg';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
//import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import './App.css';
// let name ="React Developer";
// let name1 ="<b>React Developer</b>";
function App() {

  const [mode,changeMode]=useState("light");
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
              msg:message,
              type:type
            });
            setTimeout(()=>{
              setAlert(null);
            },1500)
  }

  const togglemode=(colorObj)=>{
    if(mode==="dark"){
      changeMode("light");
      showAlert("Light Mode has been enabled","success");
      document.body.style.backgroundColor='rgb(176, 224, 230)';//rgb(4, 38, 69)
    }
    else{
      changeMode("dark");
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode has been enabled","success");
    }
  }
  
  return (
    <>
    <Navbar title="Text-Utilities" mode={mode} togglemode={togglemode} showAlert={showAlert} />
    <Alert alert={alert} />
    <div className="container">
        <TestForm heading="Enter text to analyze" showAlert={showAlert} mode={mode} togglemode={togglemode}/>
    </div>
    {/* <About/> */}
    </>
    // <div className="blank">Nice</div>
  );
}

export default App;
