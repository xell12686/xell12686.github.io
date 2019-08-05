import React, {Component} from 'react';

import DonationForm from './DonationForm';

import './Modal.scss';

export default class Modal extends Component {
  static defaultProps = {
    content: '',
    petId: '',
    handleReceiveDonation: () => {}
  }

  state = {
    animate: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ animate: true });
    }, 0);
  }

  closeModal = () => {
    this.setState({ animate: false });
    setTimeout(() => {
      this.props.handleClose();
    }, 250);
  }

  render() {
    
    const animationClass = this.state.animate ? 'in' : 'outx';

    return (
      <div className="Modal" >
        <section className={'modal-main ' + animationClass}>
          Form to donate to pet #: {this.props.petId}
          <DonationForm 
            handleSendDonation={this.props.handleReceiveDonation}
            handleCancelDonation={this.closeModal}  
          />
        </section>
      </div>
    );    
  }
}