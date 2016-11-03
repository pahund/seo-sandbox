import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const delay = {
    choMessage: 10,
    faq1: 100,
    faq2: 1000,
    faq3: 10000
};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            choMessage: null,
            faq1: null,
            faq2: null,
            faq3: null
        };
        window.setTimeout(() => this.setState(Object.assign(this.state, {
            choMessage: 'Trees cover up a multitude of sins. All kinds of happy little splashes. And just raise cain. When things happen - enjoy them. They\'re little gifts. It\'s important to me that you\'re happy. Let\'s put some happy little bushes on the other side now. We\'ll paint one happy little tree right here. In life you need colors. Automatically, all of these beautiful, beautiful things will happen. This present moment is perfect simply due to the fact you\'re experiencing it. Isn\'t that fantastic? You can just push a little tree out of your brush like that. Just let go - and fall like a little waterfall. We want to use a lot pressure while using no pressure at all. This is your world, whatever makes you happy you can put in it. Go crazy. Let that brush dance around there and play. Pretend you\'re water. Just floating without any effort. Having a good day. We don\'t have to be concerned about it. We just have to let it fall where it will. I like to beat the brush. Maybe there\'s a little something happening right here. See there, told you that would be easy. Let\'s put some happy little clouds in our world. There is no right or wrong - as long as it makes you happy and doesn\'t hurt anyone. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. You don\'t want to kill all your dark areas they are very important. That is when you can experience true joy, when you have no fear. You can get away with a lot. Only eight colors that you need. We\'ll have a super time. Work that paint. All you have to do is let your imagination go wild.'
        })), delay.choMessage);
        window.setTimeout(() => this.setState(Object.assign(this.state, {
            faq1: 'Negotium sufficere posse recensentur in NASDAQ vadit ventre sursum. Perit! Non est amplius extra me existant. Non, manifeste tu scis nesciunt qui loquebantur, sic fiat mihi fila vobis ego sum nolite ingredi in periculo Skyler. Sum in periculo! Ut sagittis metus aperit ostium, et arbitraris me et habet? Non ego sum ille qui pulsat!'
        })), delay.faq1);
        window.setTimeout(() => this.setState(Object.assign(this.state, {
            faq2: 'Locutus est tibi? Respondeo dicendum esset iustus? Quæ? Quem populum? Mensis abhinc Gus occidere vellet uterque. Et nunc, utatur LAB et trahit vos de ... quae ... a socio gunman? A lenta guy? Numquid aliquo tibi Et dicit quod videt te. Qualis est is lascivio venatus. Putat quod surdus es? Non potest vere putes quod oblito ... nedum Gale, nedum Victoris ... quod pertinet ad omne nefas et qui.'
        })), delay.faq2);
        window.setTimeout(() => this.setState(Object.assign(this.state, {
            faq3: 'Suus satis. Quod etiam optime. Vos ite post eum, fistulae, nunquam vivum exire ab ea. Sed cum hoc ... excidit tibi in cibo aut in potu, aut: olefac Elegantioris non sit ... triginta sex horae post ... Poof. Vir aetatis operantes, dura sicut facit ... nemo mirabatur. Mike suspectas habere possunt, sed quod omnes illi eris. Obsecro, unum homicidam maniaco tempore.'
        })), delay.faq3);
    }
    render() {
        const customerQuote = document.getElementById('root').getAttribute('data-customer-quote');
        const { choMessage, faq1, faq2, faq3 } = this.state;
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>Welcome to Argelpargel!</h1>
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
                <h2>
                    A personal message from our CHO (Chief Happiness Officer):
                </h2>
                <blockquote>
                    {choMessage}
                </blockquote>
                <p className="App-technical-note">
                    (text set {delay.choMessage} ms after component was initially rendered via component.setState)
                </p>
                <h2>Frequently Asked Questions</h2>
                <h3>Why is Argelpargel such a beautiful, gratifying experience?</h3>
                {this.renderDelayed(faq1)}
                <p className="App-technical-note">
                    (text set {delay.faq1} ms after component was initially rendered via component.setState)
                </p>
                <h3>Where do you get all those incredible Argels and Pargels?</h3>
                {this.renderDelayed(faq2)}
                <p className="App-technical-note">
                    (text set {delay.faq2} ms after component was initially rendered via component.setState)
                </p>
                <h3>My Argel is broken – can you fix it?</h3>
                {this.renderDelayed(faq3)}
                <p className="App-technical-note">
                    (text set {delay.faq3} ms after component was initially rendered via component.setState)
                </p>
            </div>
        );
    }
    renderDelayed(delayedText) {
        return delayedText ? <p>{delayedText}</p> : <p className="App-please-wait">(please wait…)</p>
    }
}

export default App;
