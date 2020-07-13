import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="column">
                        <div className="events-card">
                            <img src="img/gatewayproject.png" alt="travel guide to Finland" style={{ width: 100 + '%' }} />
                            <h2><b>Gateway Project</b></h2>
                            <p>First project made in the time span of four weeks. Created entirely using HTML and CSS.</p>
                            <a href="https://gatewayprojectsemantic.netlify.app" target="_blank" rel="noopener noreferrer"><button className="events-card-button">View</button></a>
                            <a href="https://github.com/E972630a/Gateway-Project" target="_blank" rel="noopener noreferrer"><button className="events-card-button">Github</button></a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="events-card">
                            <img src="img/hotelea.png" alt="hotel website" style={{ width: 100 + '%' }} />
                            <h2><b>Hotel EA</b></h2>
                            <p></p>
                            <a href="https://hotelea.netlify.app/" target="_blank" rel="noopener noreferrer"><button className="events-card-button">View</button></a>
                            <a href="https://github.com/E972630a/Hotel-Esau-App" target="_blank" rel="noopener noreferrer"><button className="events-card-button">Github</button></a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="events-card">
                            <img src="img/githubcards.png" alt="github card locator" style={{ width: 100 + '%' }} />
                            <h2><b>Github Card Locator</b></h2>
                            <p></p>
                            <a href="https://react-githubcards.netlify.app" target="_blank" rel="noopener noreferrer"><button className="events-card-button">View</button></a>
                            <a href="https://github.com/E972630a/react-githubcards" target="_blank" rel="noopener noreferrer"><button className="events-card-button">Github</button></a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="events-card">
                            <img src="img/guessinggame.png" alt="speech recognition guessing game" style={{ width: 100 + '%' }} />
                            <h2><b>Guessing Game</b></h2>
                            <p></p>
                            <a href="https://eaguessinggame.netlify.app" target="_blank" rel="noopener noreferrer"><button className="events-card-button">View</button></a>
                            <a href="https://github.com/E972630a/Speech-Recognition-Guessing-Game" target="_blank" rel="noopener noreferrer"><button className="events-card-button">Github</button></a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="events-card">
                            <img src="img/animatednavbar.png" alt="animated navigation bar" style={{ width: 100 + '%' }} />
                            <h2><b>Animated Nav Bar</b></h2>
                            <p></p>
                            <a href="https://animationnavbar.netlify.app" target="_blank" rel="noopener noreferrer"><button className="events-card-button">View</button></a>
                            <a href="https://github.com/E972630a/Animated-Navigation-Bar" target="_blank" rel="noopener noreferrer"><button className="events-card-button">Github</button></a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="events-card">
                            <img src="img/tictactoe.png" alt="react tic tac toe using hooks" style={{ width: 100 + '%' }} />
                            <h2><b>Tic Tac Toe</b></h2>
                            <p></p>
                            <a href="https://eahooks-tictactoe.netlify.app" target="_blank" rel="noopener noreferrer"><button className="events-card-button">View</button></a>
                            <a href="https://github.com/E972630a/Hooks-TicTacToe" target="_blank" rel="noopener noreferrer"><button className="events-card-button">Github</button></a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="events-card">
                            <img src="img/todolist.png" alt="react to do list" style={{ width: 100 + '%' }} />
                            <h2><b>To Do List</b></h2>
                            <p></p>
                            <a href="https://todolistea.netlify.app" target="_blank" rel="noopener noreferrer"><button className="events-card-button">View</button></a>
                            <a href="https://github.com/E972630a/To-Do-List" target="_blank" rel="noopener noreferrer"><button className="events-card-button">Github</button></a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="events-card">
                            <img src="img/ecommerce.png" alt="weather app" style={{ width: 100 + '%' }} />
                            <h2><b>eCommerce Project</b></h2>
                            <p></p>
                            <a href="https://reactecommerceproject.netlify.app" target="_blank" rel="noopener noreferrer"><button className="events-card-button">View</button></a>
                            <a href="https://github.com/E972630a/react-ecommerce" target="_blank" rel="noopener noreferrer"><button className="events-card-button">Github</button></a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="events-card">
                            <img src="img/nonprofithackathon.png" alt="weather app" style={{ width: 100 + '%' }} />
                            <h2><b>Nonprofit Hackathon</b></h2>
                            <p></p>
                            <a href="https://r2h-hackathon1.netlify.app" target="_blank" rel="noopener noreferrer"><button className="events-card-button">View</button></a>
                            <a href="https://github.com/E972630a/R2H-Hackathon1" target="_blank" rel="noopener noreferrer"><button className="events-card-button">Github</button></a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="events-card">
                            <img src="img/techcrunchredesign.png" alt="weather app" style={{ width: 100 + '%' }} />
                            <h2><b>TechCrunch Redesign</b></h2>
                            <p></p>
                            <a href="https://techcrunch-redesign.netlify.app" target="_blank" rel="noopener noreferrer"><button className="events-card-button">View</button></a>
                            <a href="https://github.com/E972630a/techcrunch" target="_blank" rel="noopener noreferrer"><button className="events-card-button">Github</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;