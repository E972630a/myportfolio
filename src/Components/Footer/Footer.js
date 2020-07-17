import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="main-footer">
                    <p className="copyright">Esau Aguilar Osuna &copy; 2020 | All Rights Reserved</p>
                    <div class="socialMedia">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/esau-aguilar-osuna/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin-square fa-2x"></i></a></li>
                            <li><a href="https://github.com/E972630a" target="_blank" rel="noopener noreferrer"><i class="fa fa-github fa-2x"></i></a></li>
                        </ul>
                        <p className="last__update">* last updated 7/17/2020</p>
                    </div>
                    
                </footer>
            </div>
        )
    }
}

export default Footer;