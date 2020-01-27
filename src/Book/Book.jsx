import React, { Component } from 'react';
import './Book.css';

import card1 from '../resources/1.png';
import card2 from '../resources/2.png';
import card3 from '../resources/3.png';
import card4 from '../resources/4.png';
import card5 from '../resources/5.png';
import card6 from '../resources/6.png';
import card7 from '../resources/7.png';
import card8 from '../resources/8.png';

class Book extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currPage: 0,
            transformFront: false,
            transformBack: false,
            frontDge: 0,
            backDge: 0,
            page1Dge: 0,
            page2Dge: 0,
            page3Dge: 0,
            page4Dge: 0,
            page5Dge: 0,
            page6Dge: 0,
            page7Dge: 0,
            page8Dge: 0,
            frontWidth: 267,
        };
    }

    openBook = () => {
        this.setState({
            frontDge: -160,
            backDge: -15,
            page1Dge: -155,
            page2Dge: -25,
            page3Dge: -25,
            page4Dge: -20,
            page5Dge: -20,
            page6Dge: -20,
            page7Dge: -20,
            page8Dge: -20,
            frontWidth: 280,
        })
    }

    closeBook = () => {
        this.setState({
            frontDge: 0,
            backDge: 0,
            page1Dge: 0,
            page2Dge: 0,
            page3Dge: 0,
            page4Dge: 0,
            page5Dge: 0,
            page6Dge: 0,
            page7Dge: 0,
            page8Dge: 0,
            frontWidth: 267,
        })

        if (this.props.firstTimeReading) {
            this.sleep(2000).then(() => {
                this.props.onBookClose()
            });
        }
    }

    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    page2Click = () => {
        this.setState({
            page2Dge: -150,
            page3Dge: -149,
        })
    }

    page3Click = () => {
        this.setState({
            page1Dge: -155,
            page2Dge: -25,
            page3Dge: -25,
        })
    }

    page4Click = () => {
        this.setState({
            page4Dge: -145,
            page5Dge: -144,
        })
    }

    page5Click = () => {
        this.setState({
            page4Dge: -20,
            page5Dge: -20,
        })
    }

    page6Click = () => {
        this.setState({
            page6Dge: -142,
            page7Dge: -141,
        })
    }

    page7Click = () => {
        this.setState({
            page6Dge: -20,
            page7Dge: -20,
        })
    }

    render() {
        let stylesFront = null
        let stylesBack = null

        stylesFront = {
            transform: `rotateY(${this.state.frontDge}deg) scale(1.1)`,
            width: `${this.state.frontWidth}px`,
        };
        stylesBack = {
            transform: `rotateY(${this.state.backDge}deg) scale(1.1)`
        };
        let stylesPage1 = {
            transform: `rotateY(${this.state.page1Dge}deg) scale(1.1)`
        }
        let stylesPage2 = {
            transform: `rotateY(${this.state.page2Dge}deg) scale(1.1)`
        }
        let stylesPage3 = {
            transform: `rotateY(${this.state.page3Dge}deg) scale(1.1)`
        }

        let stylesPage4 = {
            transform: `rotateY(${this.state.page4Dge}deg) scale(1.1)`
        }

        let stylesPage5 = {
            transform: `rotateY(${this.state.page5Dge}deg) scale(1.1)`
        }

        let stylesPage6 = {
            transform: `rotateY(${this.state.page6Dge}deg) scale(1.1)`
        }

        let stylesPage7 = {
            transform: `rotateY(${this.state.page7Dge}deg) scale(1.1)`
        }

        return (

            <div className="book">
                <div onClick={this.closeBook} style={stylesBack} class="back"></div>
                <div onClick={this.page5Click} style={stylesPage7} class="page7"><p className='text'>4</p><img className='card-big ' src={card7} alt="card" /></div>
                <div onClick={this.page4Click} style={stylesPage6} class="page6"><p>3</p><img className='card-big ' src={card6} alt="card" /></div>
                <div onClick={this.page5Click} style={stylesPage5} class="page5"><p className='text'>3</p><img className='card-big ' src={card5} alt="card" /></div>
                <div onClick={this.page4Click} style={stylesPage4} class="page4"><p>2</p><img className='card-big ' src={card4} alt="card" /></div>
                <div onClick={this.page3Click} style={stylesPage3} class="page3"><p className='text'>2</p><img className='card-big ' src={card3} alt="card" /></div>
                <div onClick={this.page2Click} style={stylesPage2} class="page2"><p>1</p><img className='card-big ' src={card2} alt="card" /></div>
                <div style={stylesPage1} class="page1"><p className='text'>1</p><img className='card-big ' src={card1} alt="card" /></div>
                <div onClick={this.openBook} style={stylesFront} className="front" ><p style={{ marginTop: '20px', color: '#876f70' }}>Co zrobić, <br /> kiedy do pokoju wlatują karteczki z chińskimi znakami.</p></div>
            </div>

        );
    }
}

export { Book };