import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render () {
        return (
            <nav ClassName="navbar navbar-md">
                                               
                <Link className="navbar-brand" to="/">Krakn</Link>            
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Start">Start</Link>
                    </li>                    
                </ul>       
            
            </nav>
        );
    }
}

export default Navbar;
