import React from 'react'
import PropTypes from 'prop-types'

export default function navbar(obj) {
    const ColorRed=()=>{
        //obj.togglemode(str);
        document.body.style.backgroundColor='rgb(176, 224, 230)';
    }
return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${obj.mode} bg-${obj.mode}`}>

<div className="container-fluid">
    <a className="navbar-brand" href="#">{obj.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">About</a>
        </li>

    </ul>
    
    {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form> */}

{/* <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
    <ul className="navbar-nav">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Color
        </a>
        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li className="dropdown-item" onClick={ColorControl("red")}>Red</li>
            <li><a className="dropdown-item" >Green</a></li>
            <li><a className="dropdown-item" >Blue</a></li>
        </ul>
        </li>
    </ul>
    </div> 
    document.body.style.backgroundColor='rgb(176, 224, 230)';
    */}
    {/* <button className="btn btn-primary my-2 mx-2" onClick={ColorRed}>Red</button> */}
    
    <div className="form-check form-switch my-0">
    <input className={`form-check-input mx-2 my-1 ${obj.mode==='light'?'dark':'light'} `} onClick={obj.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    <label className={`form-check-label text-${obj.mode==='light'?'dark':'light'}`}  htmlFor="flexSwitchCheckDefault">{obj.mode} mode</label>
    </div>
    </div>
    </div>
    {/* <div className="dropdown mx-4">
    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Colored Background
    </button>
    <ul className="dropdown-menu">
        <li><a className="dropdown-item" onClick={obj.changegreen} href="#">Green</a></li>
        <li><a className="dropdown-item" onClick={obj.changered} href="#">Red</a></li>
        <li><a className="dropdown-item" onClick={obj.changeyellow} href="#">Yellow</a></li>
        <li><a className="dropdown-item" onClick={obj.changedefault} href="#">default</a></li>
    </ul>
</div> */}
</nav>
    </div>
)
}

navbar.propTypes={title:PropTypes.string}
navbar.defaultProps={title:'Title here'}