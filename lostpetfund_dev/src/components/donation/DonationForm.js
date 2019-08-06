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
            this.setState({showCustomlabel: true, label: 'other'}) :
            this.setState({label: e.target.value, customLabel: '', showCustomlabel:false});
    }

    handleCustomLabel = e => {
        this.setState({customLabel: e.target.value});
    }

    handleAmount = e => {
        this.setState({amount: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        const { amount, label, customLabel } = this.state;
        const finalLabel = customLabel || label;
        this.props.handleSendDonation(amount, finalLabel);
        this.setState({
            amount: '',
            label: '',
            showCustomlabel: false
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
        customLabel: '',
        showCustomlabel: false,
        loading: false
    }

    render() {

        const { handleCloseModal } = this.props;
        const { loading, customLabel, showCustomlabel, label, amount } = this.state;

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
                        {showCustomlabel &&
                            <label>
                                Custom Label:
                                <input type="text" value={customLabel} placeholder="Custom label..." onChange={this.handleCustomLabel}/>
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
