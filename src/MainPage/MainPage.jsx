import React, { Component } from 'react';
import { Book } from '../Book'
import './MainPage.css';
import logo from '../resources/karta.png';


import card1 from '../resources/1.png';
import card2 from '../resources/2.png';
import card3 from '../resources/3.png';
import card4 from '../resources/4.png';
import card5 from '../resources/5.png';
import card6 from '../resources/6.png';
import card7 from '../resources/7.png';
import card8 from '../resources/8.png';

import { Carousel, Row, Col, Container } from 'react-bootstrap';

class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showWelcome: true,
            showDescription: false,
            showButtons: false,
            showBookButton: true,
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
            sawDoorMessageFirstTime: false,
            sawBookFirstTime: false,

            redCardSelected: null,
            blackCardSelected: null,


            blackCardNumber: 1,
            redCardNumber: null,


            canClickRedCards: false,

            answerMessage: '',
            showAnswerButton: false,

            showSequenceMessage: false,
            showLastPart: false,



            newBlackCard: false,

            blackBig: <img className='card-big descritption' src={card1} alt="Logo" />

            

        };
        this.blackCardCursor = 'pointer'

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
        if (this.state.sawBookFirstTime) {
            this.setState({
                showDoorMessage: false,
                showRedCardsMessage: true,
            })
        } else {
            this.setState({
                showDoorMessage: false,
                showButtons: true,
                showDoorButton: false,
                sawDoorMessageFirstTime: true,
            })
        }
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
        if (this.state.sawDoorMessageFirstTime) {
            this.setState({
                firstTimeReading: false,
                showRedCardsMessage: true,
                showBook: false,
            })
        } else {
            this.setState({
                firstTimeReading: false,
                sawBookFirstTime: true,
                showBook: false,
                showButtons: true,
                showDoorButton: true,
                showBookButton: false,
            })
        }
    }

    handleFirstTimeBlackCardClick = () => {
        if (this.state.firstTimeBlackCardClick) {
            this.setState({
                showRedCards: true,
                showBlackCard: false,
                firstTimeBlackCardClick: false,
                showNavigation: true,
                blackCardSelected: <img onClick={this.handleBlackCardClick} className='card' src={card1} alt="card" />
            })
            this.blackCardCursor = 'auto'
        }
    }

    handleRedCardsMessageClick = () => {
        this.setState({
            showRedCardsMessage: false,
            showRedCards: true,

        })

        this.sleep(5000).then(() => {
            this.setState({
                showCardArrivalMessage: true,
                showRedCards: false,
                showBook: false,
                canClickRedCards: true,

            })
        });
    }


    handleRedCardClick2 = (id) => {
        if (this.state.canClickRedCards) {
            switch (id) {
                case 2:
                    this.setState({
                        redCardSelected: <img className='small-red' src={card2} alt="card" />,
                        redCardNumber: 2,
                        answerMessage: ''
                    })
                    break;
                case 4:
                    this.setState({
                        redCardSelected: <img className='small-red' src={card4} alt="card" />,
                        redCardNumber: 4,
                        answerMessage: ''
                    })
                    break;
                case 6:
                    this.setState({
                        redCardSelected: <img className='small-red' src={card6} alt="card" />,
                        redCardNumber: 6,
                        answerMessage: ''

                    })
                    break;
                case 8:
                    this.setState({
                        redCardSelected: <img className='small-red' src={card8} alt="card" />,
                        redCardNumber: 8,
                        answerMessage: ''

                    })
                    break;
                default:
                    this.setState({
                        redCardSelected: null,
                        redCardNumber: null,
                        answerMessage: ''
                    })
                    break;
            }
        }
    }


    handleBigBlackClick = () => {
        this.setState({
            newBlackCard: false,
            showRedCards: true,
        })
    }


    checkIfCorrect = () => {
        if (this.state.redCardNumber - 1 === this.state.blackCardNumber) {


            switch (this.state.blackCardNumber) {
                case 1:
                    this.setState({
                        redCardSelected: null,
                        blackCardSelected: <img onClick={this.handleBlackCardClick} className='card' src={card7} alt="card" />,
                        blackCardNumber: 7,
                        blackBig: <img onClick={this.handleBigBlackClick} className='card-big descritption' src={card7} alt="card" />,
                        answerMessage: '',
                        showDopasowanie: true,
                        showRedCards: false,
                        showBook: false,
                    })
                    break;
                case 3:
                    this.setState({
                        redCardSelected: null,
                        blackCardSelected: <img onClick={this.handleBlackCardClick} className='card' src={card5} alt="card" />,
                        blackCardNumber: 5,
                        answerMessage: '',
                        showDopasowanie: true,
                        showRedCards: false,
                        showBook: false,
                        blackBig: <img onClick={this.handleBigBlackClick} className='card-big descritption' src={card5} alt="card" />,
                    })
                    break;
                case 7:
                    this.setState({
                        redCardSelected: null,
                        blackCardSelected: <img onClick={this.handleBlackCardClick} className='card' src={card3} alt="card" />,
                        blackCardNumber: 3,
                        answerMessage: '',
                        showDopasowanie: true,
                        showRedCards: false,
                        showBook: false,
                        blackBig: <img onClick={this.handleBigBlackClick} className='card-big descritption' src={card3} alt="card" />,
                    })
                    break;

                case 5:
                    this.setState({
                        redCardSelected: null,
                        blackCardSelected: null,
                        answerMessage: 'Koniec!',
                        showNavigation: false,
                        showRedCards: false,
                        showBook: false,
                        showSequenceMessage: true,
                    })
                    break;

                default:

                    break;
            }

        } else {
            this.setState({
                redCardSelected: null,
                answerMessage: 'Niedoposowanie!'
            })
        }

    }


    handleSequenceMessageClick = () => {
        this.setState({
            showSequenceMessage: false,
            showLastPart: true
        })
    }

    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }


    handleDopsanowanieClick= () => {
        this.setState({
            newBlackCard: true,
            showDopasowanie: false,
        })
    }


    render() {
        return (
            <div style={{ width: '100%' }}>
                <div style={{ display: (this.state.showNavigation ? 'inline' : 'none') }} className='nav description'>

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
                    <div onClick={this.handleDescriptionClick} style={{ display: (this.state.showDescription ? 'inline' : 'none') }} className="descritption"><p className='descritption' style={{ padding: '30px' }}>Dookoła panuje ciemność i cisza. <br /> <br />We wszechogarniającej czerni jesteś w stanie dostec
    jedynie dwa zwracające uwagę elementy. <br />Po lewej stronie widzisz poświatę w kształcie
                                                                                                                                                                    prostokąta, prawdopodobnie drzwi,  natomiast z prawej nie wiedzieć czemu jesteś w stanie
dokładnie widzieć leżącą na podeście książkę o ciemniej okładce</p></div>
                    <div style={{ display: (this.state.showButtons ? 'inline' : 'none') }} className='button-row'>
                        <button style={{ marginRight: '20px' }} onClick={this.handleDoorClick} style={{ display: (this.state.showDoorButton ? 'inline' : 'none') }}  >PODEJDŹ DO DRZWI</button>
                        <button style={{ marginLeft: '20px' }} onClick={this.handleBookClick} style={{ display: (this.state.showBookButton ? 'inline' : 'none') }}>PRZYJRZYJ SIĘ KSIĄŻCE</button>
                    </div>
                    <div onClick={this.handleDoorMessageClick} className='door-message' style={{ display: (this.state.showDoorMessage ? 'inline' : 'none') }}>
                        <p className='door-message' style={{ padding: '30px' }}>Zbliżając się do poświaty upewniasz się o tym, że są to drzwi, jednak nie umożliwiają one
        wyjścia z pokoju choćby ze względu na brak klamki, a pod naporem ani nie drgną.</p>
                    </div>
                    <div style={{ display: (this.state.showBook ? 'inline' : 'none') }} class='book-container'> <Book firstTimeReading={this.state.firstTimeReading} onBookClose={this.bookReedFirstTime} /></div>
                </div>

                <div onClick={this.handleCardArrivalMessageClick} style={{ display: (this.state.showCardArrivalMessage ? 'inline' : 'none') }} className="descritption">
                    <p className='descritption' style={{ padding: '30px' }}>Spod drzwi wleciała do pokoju niewielka kartka. Podchodząc do niej bierzesz ją w dłoń.
                    Nie jest większa niż pół strony zeszytu. Na czarnym tle dostrzegasz biały znak </p>
                </div>

                <div className='descritption' onClick={this.handleFirstTimeBlackCardClick} style={{ display: (this.state.showBlackCard ? 'inline' : 'none'), cursor: this.blackCardCursor }}>
                    {this.state.blackBig}
                </div>

                <div onClick={this.handleRedCardsMessageClick} style={{ display: (this.state.showRedCardsMessage ? 'inline' : 'none') }} className="descritption">
                    <p className='descritption' style={{ padding: '30px' }}>Wracasz do podestu z księgą i kiedy jesteś już blisko niej, czujesz, że trącasz coś nogą. Jest
                    to małe, czarne pudełko.
                    Otwierając je dostrzegasz podobny znajdzie, plik kart, z tą różnicą, że one są w czerwonym
                kolorze.</p>
                </div>

                <div className='red-cards-container' style={{ display: (this.state.showRedCards ? 'block' : 'none') }}>
                    <Carousel interval={null} activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                        <Carousel.Item>
                            <div disabled={true} onClick={() => this.handleRedCardClick2(2)} className='red-card2'><img disabled={true} className='card-big description' src={card2} alt="card" /></div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div onClick={() => this.handleRedCardClick2(4)} className='red-card2'><img className='card-big description' src={card4} alt="card" /></div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div onClick={() => this.handleRedCardClick2(6)} className='red-card2'><img className='card-big description' src={card6} alt="card" /></div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div onClick={() => this.handleRedCardClick2(8)} className='red-card2'><img className='card-big description' src={card8} alt="card" /></div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div style={{ display: (this.state.showNavigation ? 'inline' : 'none') }} className='ans description'>
                    <Container>
                        <Col xs={12} hidden={this.state.redCardSelected === null}><button style={{padding: '10px', marginBottom: '10px'}} onClick={this.checkIfCorrect}>WSUŃ POD DRZWI</button></Col>
                        <Col xs={12}><h5>{this.state.answerMessage}</h5></Col>
                        <Row>
                            <div className='ans-element'>
                                <Col hidden={this.state.showDopasowanie || this.state.newBlackCard}>{this.state.blackCardSelected}</Col>
                            </div>
                            <div className='ans-element'>
                                <Col>{this.state.redCardSelected}</Col>
                            </div>
                        </Row>
                    </Container>
                </div>

                <div onClick={this.handleSequenceMessageClick} style={{ display: (this.state.showSequenceMessage ? 'inline' : 'none') }} className="descritption">
                    <p className='descritption' style={{ padding: '30px' }}>Sekwencja została ukończona. </p>
                </div>

                <div style={{ display: (this.state.showLastPart ? 'inline' : 'none') }} className="descritption">
                    <div className='descritption'>
                    <Row className='descritption'>
                     <img className='card' src={card2} alt="card" />
                    <img  style={{marginLeft: '5px'}} className='card' src={card1} alt="card" />
                    <img style={{marginLeft: '5px'}} className='card' src={card2} alt="card" />
                     <img style={{marginLeft: '5px'}} className='card' src={card3} alt="card" />
                     <img style={{marginLeft: '5px'}} className='card' src={card4} alt="card" />
                     <img style={{marginLeft: '5px'}} className='card' src={card5} alt="card" />
                     <img style={{marginLeft: '5px'}} className='card' src={card6} alt="card" />
                     <img style={{marginLeft: '5px'}} className='card' src={card7} alt="card" />
                     <img style={{marginLeft: '5px'}} className='card' src={card8} alt="card" />
                     </Row>
                    </div>
                    <p className='last' style={{paddingTop: '30px'}} >„Środek przekazu sam jest przekazem”</p>
                    <p className='last' >Marshal Mcluhan</p>
                </div>

                <div className='descritption' onClick={this.handleDopsanowanieClick} style={{ display: (this.state.showDopasowanie ? 'inline' : 'none') }}>
                    <p className='descritption' >Dopasowanie!</p>
                </div>

                <div className='descritption' onClick={this.handleBigBlackClick} style={{ display: (this.state.newBlackCard ? 'inline' : 'none') }}>
                    <p className='descritption' >W pokoju pojawiła się nowa karta</p>
                    
                </div>
                <div  onClick={this.handleBigBlackClick} style={{ display: (this.state.newBlackCard ? 'inline' : 'none') }}>
                {this.state.blackBig}
                </div>
            </div>
        );
    }
}

export { MainPage };
//<div onClick={this.handleBlackCardClick} className='nav-element'>
//<img className='card' src={logo} alt="Logo" />
//</div>

//<img onClick={this.handleBlackCardClick} className='card' src={card1} alt="card" />