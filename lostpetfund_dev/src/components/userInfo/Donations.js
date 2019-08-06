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
    const {petId, label, donatedAmount} = item;
    let petName;
    if (!item.petName) {
        petName = 'anonymous';
    } else {
        petName = item.petName;
    }
    let showlabel;
    switch (label) {
        case "petId": showlabel = petName; break;
        case "donatedAmount": showlabel = petName; break;
        case "petName": showlabel = petName; break;
        case null: showlabel = null; break;
        default: showlabel = label;
    }
    return (
        <div className="donation-item" key={petId}>
            <span className="donation-name">
                TO: { showlabel || petName }
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