import React, {Component} from 'react';

import './Donations.scss';

const Welcome = ({user, donations}) => {
    let message;
    if (donations.length) {
        message = <span className="Welcome">Hi <strong>{user}</strong>, here are your donations so far:</span>;
    } else {
        message = <span className="Welcome">Hi <strong>{user}</strong>, you don't have donations yet.</span>;
    }
    return message; 
}

const ListDonations = ({donations}) => donations.map(item => {
    let {petId, petName, label, donatedAmount} = item;
    petName = petName || 'an anynomous Pet';
    return (
        <div className="donation-item" key={petId}>
            <span className="donation-name">
                TO: { label || petName } 
            </span>
            <span className="donation-amount"> ${donatedAmount}</span>
        </div>
    );
});

export default class Donations extends Component {
    static defaultProps = {
        user: null,
        detailedDonations: []
    }

    render() {
        
        const { user, detailedDonations } = this.props;

        return (
            <div className="Donations">
                <div className="wrapper">
                    <div className="row">
                        <div className="col donations-list text-center">
                            <Welcome user={user} donations={detailedDonations} />
                            {detailedDonations.length
                                ? <ListDonations donations={detailedDonations} /> 
                                : ''
                            }
                        </div>
                    </div>                    
                </div>
            </div>
        );            
    }
}