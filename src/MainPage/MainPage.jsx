import React, { Component } from 'react';
import { Book } from '../Book'
import './MainPage.css';
import logo from '../resources/karta.png';
import { Carousel } from 'react-bootstrap';

class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showWelcome: true,
            showDescription: false,
            showButtons: false,
            showDoorButton: true,
            showDoorMessage: false,
            showBook: false,
            index: 0,
            direction: null,
            showBlackCard: false,
            showRedCards: false,
            showCardArrivalMessage: false,
            firstTimeReading: true,
            firstTimeBlackCardClick: true,
            showRedCardsMessage: false,
            showNavigation: false,
        };
        this.blackCardCursor ='pointer'
    }

    handleWelcomeClick = () => {
        this.setState({
            showWelcome: false,
            showDescription: true,
        })
    }

    handleDescriptionClick = () => {
        this.setState({
            showDescription: false,
            showButtons: true,
        })
    }


    handleDoorClick = () => {
        this.setState({
            showButtons: false,
            showDoorMessage: true,
        })
    }

    handleDoorMessageClick = () => {
        this.setState({
            showDoorMessage: false,
            showButtons: true,
            showDoorButton: false,
        })
    }

    handleBookClick = () => {
        this.setState({
            showButtons: false,
            showBook: true
        })
    }

    handleSelect = (selectedIndex, e) => {

        this.setState({
            index: selectedIndex,
            direction: e.direction
        })
    };

    handleBlackCardClick = () => {
        this.setState({
            showBlackCard: true,
            showRedCards: false,
            showBook: false
        })
    }

    handleRedCardClick = () => {
        this.setState({
            showBlackCard: false,
            showRedCards: true,
            showBook: false
        })
    }

    handleBookMenuClick = () => {
        this.setState({
            showBlackCard: false,
            showRedCards: false,
            showBook: true
        })
    }

    handleCardArrivalMessageClick = () => {
        this.setState({
            showCardArrivalMessage: false,
            showBlackCard: true,
        })  
    } 

    bookReedFirstTime = () => {
        this.setState({
            firstTimeReading: false,
            showCardArrivalMessage: true,
            showBook: false,
        })
    }

    handleFirstTimeBlackCardClick = () => {
        if(this.state.firstTimeBlackCardClick) {
            this.setState({
                showRedCardsMessage: true,
                showBlackCard: false,
                firstTimeBlackCardClick: false,
            })
             this.blackCardCursor = 'auto'
        }
    }
     
    handleRedCardsMessageClick = () => {
        this.setState({
            showRedCardsMessage: false,
            showRedCards: true,
            showNavigation: true,
        })
    }

    render() {
        return (
            <div style={{ width: '100%' }}>
                <div style={{ display: (this.state.showNavigation ? 'inline' : 'none') }} className='nav description'>
                    <div onClick={this.handleBlackCardClick} className='nav-element'>
                        <img className='card' src={logo} alt="Logo" />
                    </div>
                    <div onClick={this.handleBookMenuClick} style={{ marginLeft: '130px' }} className='nav-element'>
                        <div class="icon-book">
                            <div class="icon-back"></div>
                            <div class="icon-page6"></div>
                            <div class="icon-page5"></div>
                            <div class="icon-page4"></div>
                            <div class="icon-page3"></div>
                            <div class="icon-page2"></div>
                            <div class="icon-page1"></div>
                            <div class="icon-front"></div>
                        </div>
                    </div>
                    <div className='nav-element'><div onClick={this.handleRedCardClick} className='red-card '></div></div>
                </div>
                <div className=" content">
                    <div onClick={this.handleWelcomeClick} style={{ display: (this.state.showWelcome ? 'inline' : 'none') }} className="welcome">WITAJ W CHIŃSKIM POKOJU</div>
                    <div onClick={this.handleDescriptionClick} style={{ display: (this.state.showDescription ? 'inline' : 'none') }} className="descritption"><p className='descritption' style={{padding:'30px'}}>Dookoła panuje ciemność i cisza. <br /> <br />We wszechogarniającej czerni jesteś w stanie dostec
    jedynie dwa zwracające uwagę elementy. <br />Po lewej stronie widzisz poświatę w kształcie
    prostokąta, prawdopodobnie drzwi,  natomiast z prawej nie wiedzieć czemu jesteś w stanie
dokładnie widzieć leżącą na podeście książkę o ciemniej okładce</p></div>
                    <div style={{ display: (this.state.showButtons ? 'inline' : 'none') }} className='button-row'>
                        <button style={{marginRight: '20px'}} onClick={this.handleDoorClick} style={{ display: (this.state.showDoorButton ? 'inline' : 'none') }}  >PODEJDŹ DO DRZWI</button>
                        <button style={{marginLeft: '20px'}} onClick={this.handleBookClick}>PRZYJRZYJ SIĘ KSIĄŻCE</button>
                    </div>
                    <div onClick={this.handleDoorMessageClick} className='door-message' style={{ display: (this.state.showDoorMessage ? 'inline' : 'none') }}>
                    <p className='door-message' style={{padding:'30px'}}>Zbliżając się do poświaty upewniasz się o tym, że są to drzwi, jednak nie umożliwiają one
        wyjścia z pokoju choćby ze względu na brak klamki, a pod naporem ani nie drgną.</p>
                </div>
                    <div style={{ display: (this.state.showBook ? 'inline' : 'none') }} class='book-container'> <Book firstTimeReading={this.state.firstTimeReading} onBookClose={this.bookReedFirstTime}/></div>
                </div>

                <div onClick={this.handleCardArrivalMessageClick} style={{ display: (this.state.showCardArrivalMessage ? 'inline' : 'none') }} className="descritption">
                <p className='descritption' style={{padding:'30px'}}>Spod drzwi wleciała do pokoju niewielka kartka. Podchodząc do niej bierzesz ją w dłoń.
                    Nie jest większa niż pół strony zeszytu. Na czarnym tle dostrzegasz biały znak </p>
                </div>

                <div  className='descritption' onClick={this.handleFirstTimeBlackCardClick} style={{ display: (this.state.showBlackCard ? 'inline' : 'none') , cursor: this.blackCardCursor}}>

                    <img className='card-big description' src={logo} alt="Logo" />
                </div>

                <div onClick={this.handleRedCardsMessageClick} style={{ display: (this.state.showRedCardsMessage ? 'inline' : 'none') }} className="descritption">
                <p className='descritption' style={{padding:'30px'}}>Wracasz do podestu z księgą i kiedy jesteś już blisko niej, czujesz, że trącasz coś nogą. Jest
                to małe, czarne pudełko.
                Otwierając je dostrzegasz podobny znajdzie, plik kart, z tą różnicą, że one są w czerwonym
                kolorze.</p>
                </div>

                <div className='red-cards-container' style={{ display: (this.state.showRedCards ? 'block' : 'none') }}>
                    <Carousel interval={null} activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                        <Carousel.Item>
                            <div className='red-card2  '><h1>1</h1></div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='red-card2 '><h1>2</h1></div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='red-card2 '><h1>3</h1></div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export { MainPage };
