import React, {Component} from 'react';
import { LoadingAnimation } from '../LoadingAnimation';

import './DonationForm.scss';


export default class DonationForm extends Component {
    
    static defaultProps = {
        handleSendDonation: (amount, label) => {},
        handleCancelDonation: () => {}
    }

    sendDonation = () => {
        console.log('sending donation of ' + this.state.donationAmoun + '...');
        this.props.handleSendDonation(this.state.donationAmount, this.state.donationLabel);
        this.setState({ loading:true });
        setTimeout(() => {
            this.setState({ loading:false });
            this.props.handleCancelDonation();
        }, 1000);

    }

    setLabel = e => {
        if (e.target.value === 'other') {
            this.setState({customLabel: true});
        }
        this.setState({donationLabel: e.target.value});
    }

    
    setCustomLabel = e => {
        this.setState({donationLabel: e.target.value});
    }

    setAmount = e => {
        this.setState({donationAmount: e.target.value});
    }

    state = {
        donationAmount: 10,
        donationLabel: 'a deserving pet',
        loading: false,
        customLabel: false
    }



    render() {

        const { handleCancelDonation } = this.props;
        const { loading, customLabel, donationAmount, donationLabel } = this.state;

        const FormFields = () => {
            return (
                <div>
                    <label>
                        Amount (max: $10:)
                        <input
                            type="number"
                            value={donationAmount}
                            onChange={this.setAmount}
                            required={true}
                        />
                    </label>
                    <label>
                        Associate this donation with:
                        <select value={donationLabel} onChange={this.setLabel}>
                            <option value="petId">Pet ID</option>
                            <option value="petName">Pet Name</option>
                            <option value="amount">Amount</option>
                            <option value="other">Others</option>
                        </select>
                    </label>
                    {customLabel &&
                        <label>
                            Custom Label:
                            <input type="text" value={customLabel} onChange={this.setCustomLabel}/>
                        </label>
                    }                
                </div>
            )
        }

        return (
            <div className="DonationForm">
                {loading ? 
                    <LoadingAnimation message="Sending donation..."/>
                    :
                    <FormFields />
                }
                <button onClick={this.sendDonation} >Send</button>
                <button onClick={handleCancelDonation}>Cancel</button>
            </div>
        )
    }
}
