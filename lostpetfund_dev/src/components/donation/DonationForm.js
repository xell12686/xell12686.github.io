import React, {Component} from 'react';
import { LoadingAnimation } from '../LoadingAnimation';

import './DonationForm.scss';


export default class DonationForm extends Component {
    
    static defaultProps = {
        handleSendDonation: () => {},
        handleCancelDonation: () => {}
    }

    sendDonation = amount => {
        console.log('sending donation of ' + amount + '...');
        // this.props.handleSendDonation(amount);
    }
    
    handleChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          //NOTE: use bracket notation in accessing object (state) key from the variable 'name' to assigne value from variable 'value
          [name]: value
        });
      }

    state = {
        donationAmount: 0,
        donationLabel: '',
        loading: false,
        
    }

    render() {

        const { handleCancelDonation } = this.props;
        return (
            <div className="DonationForm">
                <input type="text"
                      name="donationAmount"
                      placeholder="Amount to Donate"
                      value={this.state.donationAmount}
                      onChange={this.handleChange}
                    />
                <input type="text"
                      name="donationLabel"
                      placeholder="Label Donation"
                      value={this.state.donationLabel}
                      onChange={this.handleChange}
                    />                    
                <button onClick={handleCancelDonation}>Cancel</button>
                <button onClick={() => this.sendDonation(10)} >Send</button>
                {this.state.loading && <LoadingAnimation message="Sending donation..."/>}
            </div>
        )
    }
}
