import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact-section">
                <section id="contact-form" className="py-3">
                    <div className="container">
                        <h1 className="l-heading"><span className="text-primary">Contact</span> Me</h1>
                        <p className="l-p">Please fill out the form for any feedback</p>
                        <form action="mailto:esauaguilarosuna@gmail.com" method="post" enctype="text/plain">
                            <div className="form-group">
                                <label for="name">Full Name:</label>
                                <input type="text" name="name" id="name" />
                            </div>
                            <div className="form-group">
                                <label for="email">Email Address:</label>
                                <input type="text" name="email" id="email" />
                            </div>
                            <div className="form-group">
                                <label for="message">Message or Questions:</label>
                                <textarea name="message" id="message"></textarea>
                                <button type="submit" className="btn">Submit</button> <br />
                            </div>
                        </form>
                    </div>
                </section>

            </div>
        )
    }
}

export default Contact;