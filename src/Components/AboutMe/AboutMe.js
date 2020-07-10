import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        return (
            <div className="aboutme-section">
                <div className="hero-image" />
                <div className="hero-text">
                    <h1>Hi, I'm Esau Aguilar Osuna.</h1>
                    <h2>I'm a full-stack web developer.</h2>
                    <a href="/portfolio"><button>View My Work</button></a>
                </div>
                <div>
                    <h1 className="aboutme">About Me</h1>
                    <img className="profile-image" src="img/slack_img.png" alt="profile of Esau Aguilar Osuna" />
                    <h3 className="aboutme-paragraph">I am soon to be a graduate at Road to Hire Coding Fellowship. Road to Hire is a six month training program that strives to help people find a job in the technology field. I am fortunate and proud to be allowed to participate in this program. During these six months, I have learned and practiced the new technical and professional development skills we were taught. With the new skills, I have equipped with the help of Road to Hire, I feel confident I will succeed. I am eager to learn and continue to grow.</h3>
                </div>
                <div className="skills-section">
                    <h1 className='skills'>Skills</h1>
                </div>
            </div>
        )
    }
}

export default AboutMe;