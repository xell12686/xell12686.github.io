import React, {Component} from 'react';

import DonationForm from './DonationForm';

import './Modal.scss';

export default class Modal extends Component {
  static defaultProps = {
    user: '',
    petId: '',
    handleReceiveDonation: (amount, label) => {},
    handleAnimateCard: () => {}
  }

  state = {
    animate: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: true });
    }, 0);
  }

  closeModal = (donated) => {
    this.setState({ animate: false });
    donated && this.props.handleAnimateCard();
    setTimeout(() => {
      this.props.handleClose();
    }, 250);
  }

  render() {
    
    const animationClass = this.state.animate ? 'in' : 'outx';

    return (
      <div className="Modal" >
        <section className={'modal-main ' + animationClass}>
          {this.props.user ?
            <DonationForm 
              handleSendDonation={this.props.handleReceiveDonation}
              handleCancelDonation={this.closeModal}  
              handleCloseModal={this.closeModal}  
              handleShakeCard={this.props.handleAnimateCard}
            /> :
            <div className="note">
              <h3>Please sign in to make donation...</h3>
              <button onClick={this.closeModal}>Close</button>              
            </div>
          }

        </section>
      </div>
    );    
  }
}