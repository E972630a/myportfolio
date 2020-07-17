import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
            <div>
                <img className="resume" src="img/resume.png" alt="resume of Esau Aguilar"></img>
                <a className href="img/resume.png" download>
                    <button class="resume__button"><i class="fa fa-download"></i> Download</button>
                </a>
            </div>
        )
    }
}

export default Resume;