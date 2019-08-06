import React, {Component} from 'react';
import { LoadingAnimation } from '../LoadingAnimation';

import './DonationForm.scss';


export default class DonationForm extends Component {
    
    static defaultProps = {
        handleSendDonation: (amount, label) => {},
        handleCloseModal: () => {},
        handleShakeCard: () => {}
    }

    handleLabel = e => {
        e.target.value === 'other' ?
            this.setState({customLabel: true, label: ''}) :
            this.setState({label: e.target.value, customLabel: false});
    }

    handleCustomLabel = e => {
        const label = e.target.value;
        this.setState({label: label});
    }

    handleAmount = e => {
        this.setState({amount: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        const { amount, label } = this.state;
        this.props.handleSendDonation(amount, label);
        this.setState({
            amount: '',
            label: '',
            customLabel: false
        });
        this.setState({ loading:true });
        setTimeout(() => {
            this.setState({ loading:false });
            this.props.handleCloseModal();
            this.props.handleShakeCard();
        }, 1000);        
    }

    state = {
        amount: '',
        label: 'petName',
        customLabel: false,
        loading: false
    }

    render() {

        const { handleCloseModal } = this.props;
        const { loading, customLabel, label, amount } = this.state;

        return (
            <div className="DonationForm">
                {loading ? 
                    <LoadingAnimation message="Sending donation..."/>
                    :
                    <form onSubmit={this.handleSubmit}>
                        <label className="amount">
                            Amount (max: $10)
                            <input
                                type="number"
                                value={amount}
                                onChange={this.handleAmount}
                                step=".1"
                                min=".5"
                                max="10"
                                required={true}
                            />
                        </label>
                        <label>
                            Associate this donation with:
                            <select value={label} onChange={this.handleLabel}>
                                <option value="petId">Pet ID</option>
                                <option value="petName">Pet Name</option>
                                <option value="donatedAmount">Donated Amount</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                        {customLabel &&
                            <label>
                                Custom Label:
                                <input type="text" placeholder="Custom label..." onChange={this.handleCustomLabel}/>
                            </label>
                        }
                        <button type="submit" onClick={this.sendDonation} >Send</button>
                    </form>
                }
                <button onClick={handleCloseModal}>Cancel</button>
                
            </div>
        )
    }
}
