import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const delay = {
    choMessage: 10
};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            choMessage: null
        };
        window.setTimeout(() => this.setState({
            choMessage: "Trees cover up a multitude of sins. All kinds of happy little splashes. And just raise cain. When things happen - enjoy them. They're little gifts. It's important to me that you're happy. Let's put some happy little bushes on the other side now. We'll paint one happy little tree right here. In life you need colors. Automatically, all of these beautiful, beautiful things will happen. This present moment is perfect simply due to the fact you're experiencing it. Isn't that fantastic? You can just push a little tree out of your brush like that. Just let go - and fall like a little waterfall. We want to use a lot pressure while using no pressure at all. This is your world, whatever makes you happy you can put in it. Go crazy. Let that brush dance around there and play. Pretend you're water. Just floating without any effort. Having a good day. We don't have to be concerned about it. We just have to let it fall where it will. I like to beat the brush. Maybe there's a little something happening right here. See there, told you that would be easy. Let's put some happy little clouds in our world. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. You don't want to kill all your dark areas they are very important. That is when you can experience true joy, when you have no fear. You can get away with a lot. Only eight colors that you need. We'll have a super time. Work that paint. All you have to do is let your imagination go wild."
        }), delay.choMessage);

    }
    render() {
        const customerQuote = document.getElementById('root').getAttribute('data-customer-quote');
        const { choMessage } = this.state;
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
                <blockquote>
                    {customerQuote}
                </blockquote>
                <p className="App-technical-note">
                    (text comes from a data attribute in the static HTML page's DOM)
                </p>
                <p>
                    A personal message from our CHO (Chief Happiness Officer):
                </p>
                <blockquote>
                    {choMessage}
                </blockquote>
                <p className="App-technical-note">
                    (text set {delay.choMessage} ms after component was initially rendered via component.setState)
                </p>
            </div>
        );
    }
}

export default App;
