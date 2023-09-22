// import logo from './logo.svg';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import './App.css';
let name ="React Developer";
let name1 ="<b>React Developer</b>";
function App() {
  return (
    <>
    <Navbar title="Text-Utilities"/>
    <div className="container">
        <TestForm heading="Enter text to analyze"/>
    </div>
    </>
    // <div className="blank">Nice</div>
  );
}

export default App;
