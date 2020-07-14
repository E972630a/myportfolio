import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav id="navbar">
                    <h1 className="app-title"><a href="/">Esau Aguilar Osuna</a></h1>
                    <ul>
                        <li><a href="/">About Me</a></li>
                        <li><a href="/resume">Resume</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar;