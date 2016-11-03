import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        const articleContent = document.getElementById('root').getAttribute('data-article-content');
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Argelpargel!</h2>
                </div>
                <p className="App-intro">
                    You've come to the right place to hang out with your friends,
                    chill and talk about Argel and Pargel. This is clearly a Good Thing<sup>TM</sup>
                </p>
                <p>
                    Here's what our customers have to say:
                </p>
                <quote>
                    {articleContent}
                </quote>
            </div>
        );
    }
}

export default App;
