// import logo from './logo.svg';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
  }//b0e0e6
  const changedefault = ()=>{
    document.body.style.backgroundColor = '#b0e0e6'
  }
  const changegreen = ()=>{
    document.body.style.backgroundColor = '#35C649'
  }
  const changeyellow = ()=>{
    document.body.style.backgroundColor = '#CAB911'
  }
  const changered = ()=>{
    document.body.style.backgroundColor = '#C15031'
  }
  
  return (
    <>
    <Router>
    <Navbar title="Text-Utilities" mode={mode} togglemode={togglemode} showAlert={showAlert} changegreen={changegreen} changered={changered} changeyellow={changeyellow} changedefault={changedefault}/>
    <Alert alert={alert} />
    <div className="container">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TestForm heading="Enter text to analyze" showAlert={showAlert} mode={mode} togglemode={togglemode}/>
          </Route>
        </Switch>  
    </div>
    </Router>
    </>
    // <div className="blank">Nice</div>
  );
}

export default App;
