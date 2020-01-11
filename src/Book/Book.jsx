import React, { Component } from 'react';
import './Book.css';

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
            frontWidth: 267,
        })



        if(this.props.firstTimeReading){
         // Usage!
      this.sleep(2000).then(() => {
        this.props.onBookClose()
        });
    }
    }

    sleep (time) {
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

        return (
           
                <div className="book">
                    <div onClick={this.closeBook} style={stylesBack} class="back"></div>
                    <div onClick={this.page5Click} style={stylesPage5} class="page5"><p className='text'>strona5</p></div>
                    <div onClick={this.page4Click} style={stylesPage4} class="page4">strona4</div>
                    <div onClick={this.page3Click} style={stylesPage3} class="page3"><p className='text'>strona3</p></div>
                    <div onClick={this.page2Click} style={stylesPage2} class="page2">strona2</div>
                    <div style={stylesPage1} class="page1"><p className='text'>strona1</p></div>
                    <div onClick={this.openBook} style={stylesFront} className="front" ><p style={{marginTop: '20px'}}>Co zrobić, <br /> kiedy do pokoju wlatują karteczki z chińskimi znakami.</p></div>
                </div>
            
        );
    }
}

export { Book };
