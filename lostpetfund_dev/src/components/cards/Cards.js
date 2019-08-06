import React, {Component} from 'react';

import Modal from '../donation/Modal';

import './Cards.scss';

//import placeholder images
import img200 from '../../images/200.jpg';
import img225 from '../../images/225.jpg';
import img230 from '../../images/230.jpg';
import img300 from '../../images/300.jpg';
import img350 from '../../images/350.jpg';
import img400 from '../../images/400.jpg';
import img500 from '../../images/500.jpg';
import img600 from '../../images/600.jpg';
import img630 from '../../images/630.jpg';
import img700 from '../../images/700.jpg';

export default class Cards extends Component {
    static defaultProps = {
        user: '',
        lostPets: [],
        handleMakeDonation: (petId, amount, label) => {}
    };

    state = {
        showModal: false,
        animateCard: '',
        petToDonate: ''
    }

    showDonationModal = (petId) => {
        this.setState({ 
            showModal: true,
            petToDonate: petId 
        });
    }

    closeModal = () => this.setState({ showModal: false });
      
    receiveDonation = (amount, label) => {
        this.props.handleMakeDonation(this.state.petToDonate, amount, label);
    }

    animateCard = () => {
        this.setState({ animateCard: this.state.petToDonate });
    }


    shouldComponentUpdate(nextProps, nextState) {
        const { showModal, petToDonate } = this.state;
        const { lostPets } = this.props;
        if ( showModal !== nextState.showModal ||
            petToDonate !== nextState.petToDonate ||
            lostPets !== nextProps.lostPets
        )
        return true; 
        return false;
    }


    render() {
        
        const {showModal, petToDonate, animateCard } = this.state;
        const { lostPets, user } = this.props;
        const listCards = lostPets.map(item => {
            const { formattedDateLost, ownerName, ownerPhone, petId, petName, photo, region, type, donatedStatus } = item;
            const tel = ownerPhone.replace(/[^\d]/g,'');
            const date = formattedDateLost.toLocaleDateString();
            let className;
            if (animateCard === petId) {
                className = 'card-item animate';
            } else {
                className = 'card-item';
            }
            return (
                <div className={className} key={petId}>
                    <div className="wrap">
                        <header>
                            <h2 className="title">
                                <span className="pet-name">{petName}</span> -- <span className="pet-id">#{item.petId}</span>
                            </h2>
                            <button className="btn small share">Share</button>
                        </header>
                        <section className="content">
                            <div className="photo">
                                <img 
                                    src = {(() => {
                                        switch (photo) {
                                            case "200.jpg":   return img200;
                                            case "225.jpg":   return img225;
                                            case "230.jpg":   return img230;
                                            case "300.jpg":   return img300;
                                            case "350.jpg":   return img350;
                                            case "400.jpg":   return img400;
                                            case "500.jpg":   return img500;
                                            case "600.jpg":   return img600;
                                            case "630.jpg":   return img630;
                                            default: return img700;
                                        }
                                    })()}                            
        
                                    alt="kitten" 
                                />
                            </div>
                            <div className="data">
                                <ul>
                                    <li className="date-lost"><b>Date Lost:</b><span>{date}</span></li>
                                    <li className="pet-type"><b>Type:</b><span>{type}</span></li>
                                    <li className="owner-name"><b>Owner:</b><span>{ownerName ||  'Anonymous'}</span></li>
                                    <li className="locality"><b>Region:</b><span>{region}</span></li>
                                </ul>
                            </div>
                            <div className="donate">
                                    <button
                                        className="btn donate-button"
                                        onClick={() => this.showDonationModal(petId)}
                                        disabled={donatedStatus ? true : false}
                                    >
                                    Doar
                                    </button>
                            </div>
                        </section>
                        <footer>
                            <a href={'tel:' + tel} className="call-now">(Phone) Ligar</a>
                        </footer>
                    </div>
                </div>
            )
        });
    
        return (
            <div className="Cards">
                {showModal && 
                    <Modal 
                        user={user}
                        showModal={showModal} 
                        petId={petToDonate}
                        handleClose={this.closeModal}
                        handleReceiveDonation={this.receiveDonation}
                        handleAnimateCard={this.animateCard}
                    />
                }
                <div className="wrapper">
                    <div className="cards-list">
                        {listCards}
                    </div>
                </div>
            </div>
        );            
    }
}