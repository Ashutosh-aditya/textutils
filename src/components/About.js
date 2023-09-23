import React,{useState} from 'react';

export default function About() {
// let myStyle = {
//     color: 'white',
//     backgroundColor: 'black'
// };
const [myStyle,setMyStyle]=useState({
    color: 'white',
    backgroundColor: 'black'
});

const [btnText,setBtnText]=useState("Switch to Light Mode");

const toggleStyle=()=>{
    if(myStyle.color === 'white'){
        setMyStyle({
            color: 'black',
            backgroundColor: 'white'
        });
        setBtnText("Switch to Dark Mode")
    }
    else{
        setMyStyle({
            color: 'white',
            backgroundColor: 'black'
        });
        setBtnText("Switch to Light Mode")
    }
};

return (
    <div className='container' style={myStyle}>
    <h1>About Us</h1>
    <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" style={myStyle}>
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Accordion Item #1
            </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" style={myStyle}>
            <div className="accordion-body" style={myStyle}>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>
        <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" style={myStyle}>
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Accordion Item #2
            </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>
        <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" style={myStyle}>
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Accordion Item #3
            </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>
    </div>
    <button type="button" onClick={toggleStyle} className="btn btn-dark my-4" style={myStyle}>{btnText}</button>
    </div>
);
}
