import React ,{useState} from 'react'
import { useEffect } from 'react';

export default function TestForm(props) {
    const [text,setText]=useState("Enter text here");
    const [emaillist,setEmail]=useState([]);
    useEffect(() => {
        setText("Enter text here..."); // This will update the text after the initial render
    }, []);
    
    const handleOnChange=(event)=>{
        console.log("handleOnChange Function Triggred");
        setText(event.target.value);
    };

    const handleUpClick=()=>{
        // console.log("Up-Case fn triggred");
        // console.log({text}.text);
        let newText=text.toUpperCase();
        setText(newText);
        //console.log("Up-Case fn ended");
    };

    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    };

    const handleEmailClick=()=>{
    const emailRegex = /[\w\d.]+@[\w\d.]+\.\w+/g;
    const emaillist = text.match(emailRegex) || [];
    setEmail(emaillist);
    };

return (
<>
    <div className='container'>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
            <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleEmailClick}>Filter Emails</button>
        </div>
    </div>
    <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>Your text contains<br/>
            {text.length}-Characters<br/>
            {text.split(" ").length}-Words<br/>
            {text.split(" ").length * 0.008}-Minutes Required to read<br/>
        </p>
        <h2>Preview<br/></h2>
        <p className='container'>
        {text}
        </p>
        <h2>Emails Extracted<br/></h2>
        <p className='container'>
        <ul>
        {emaillist.map((email, index) => (
            <li key={index}>{email}</li>
        ))}
        </ul>
        </p>
    </div>
</>
)
}

