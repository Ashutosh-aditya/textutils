import React ,{useState} from 'react'
import { useEffect } from 'react';

export default function TestForm(props) {
    const [text,setText]=useState("Enter text here");
    const [emaillist,setEmail]=useState([]);
    useEffect(() => {
        setText(""); // This will update the text after the initial render
    }, []);
    
    const handleOnChange=(event)=>{
        console.log("handleOnChange Function Triggred");
        setText(event.target.value);
    };

    const handleUpClick=()=>{
        // console.log("Up-Case fn triggred");
        // console.log({text}.text);
        if(text.length<1)
            props.showAlert("Text is empty","warning");
        else{
            let newText=text.toUpperCase();
            setText(newText);
            //console.log("Up-Case fn ended");
            props.showAlert("Text Converted to uppercase","success");
        }
    };

    const handleLowClick=()=>{
        if(text.length<1)
            props.showAlert("Text is empty","warning");
        else {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to lowercase","success");
        }
    };

    const handleCopyClick=()=>{
        if(text.length<1)
            props.showAlert("Text is empty","warning");
        else {
            navigator.clipboard.writeText(text);
            props.showAlert("Text Copied to clipboard","success");
        }
    };

    const handleClearClick=()=>{
        if(text.length<1)
            props.showAlert("Text is already empty","warning");
        else {
            setText("");
            props.showAlert("Text Cleared","success");
        }
    };

    const handleEmailClick=()=>{
        if(text.length<1)
            props.showAlert("Text is empty","warning");
        else{
            const emailRegex = /[\w\d.]+@[\w\d.]+\.\w+/g;
            const emaillist = text.match(emailRegex) || [];
            setEmail(emaillist);
            if(emaillist.length<1)
                props.showAlert("No E-mails are found","warning");
            else
                props.showAlert("Emails are extracted from the Text","success");
        }

    };

return (
<>
    <div className='container' style={{backgroundColor:props.mode==='dark'?'grey':'rgb(176, 224, 230)',color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3" style={{backgroundColor:props.mode==='dark'?'grey':'rgb(176, 224, 230)'}}>
            <h1>{props.heading}</h1>
            {/* <h2>{props.mode}</h2> */}
            <textarea className="form-control" placeholder='Enter Text Here' id="mybox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
            <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleEmailClick}>Filter Emails</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleCopyClick}>Copy to Clipboard</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear</button>
        </div>
    </div>
    <div className="container my-2" style={{backgroundColor:props.mode==='dark'?'grey':'rgb(176, 224, 230)',color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>Your text contains<br/>
            {text.length}-Characters<br/>
            {text.length===0?'0':text.split(" ").length}-Words<br/>
            {text.split(" ").length * 0.008}-Minutes Required to read<br/>
        </p>
        <h2>Preview<br/></h2>
        <p className='container'>
        {text.length>0?text:"Enter the text above to preview it"}
        </p>
        <h2>Emails Extracted<br/></h2>
        <p className='container'>
        <ol>
        {emaillist.map((email, index) => (
            <li key={index}>{email}</li>
        ))}
        </ol>
        </p>
    </div>
</>
)
}

