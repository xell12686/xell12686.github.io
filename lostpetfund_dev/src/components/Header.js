import React, {Component} from 'react';
import UserInfo from './userInfo/UserInfo';
import { LoadingAnimation } from './LoadingAnimation';

import '../styles/Header.scss';
import logoIcon from '../images/logo.svg';
import userIcon from '../images/user.svg';

const getDonatedPetData = (petId, amount, label, lostPets) => {
    const tempObj = lostPets.find(obj => obj.petId === petId);
    if (tempObj) {
        return { ...tempObj, donatedAmount: amount, label: label };
    } else {
        return { petId: petId, donatedAmount: amount, label: label };
    }
}

const DisplayUserName = ({user, onSignOut}) => (
    <div className="col user-info">
        <button onClick={onSignOut}>Sign out</button>
        <img src={userIcon} className="user-icon" alt="logo" />
        <span className="user-name">{user}</span>
    </div>
);

export default class Header extends Component {
    static defaultProps = {
        lostPets: [],
        handleUpdateUser: () => {}
    }

    state = {
        user: '',
        userDonations: [],
        loading: false
    }

    signIn = (username, password) => {
        fetch('./data-users.json')
            .then(response => response.json())
            .then(result => {
                this.setState({ loading:true });
                const userData = result.find(item => {
                    return username.toLowerCase() === item.userName
                });
                (userData && userData.donations) && 
                    this.setState({ userDonations: userData.donations });
                setTimeout(() => {
                    this.setState({
                        user: username,
                        loading:false
                    });
                    this.props.handleUpdateUser(username, this.state.userDonations);
                }, 1000);
            });
        }

    signOut = () => {
        this.setState({ user: '', userDonations: [] });
        this.props.handleUpdateUser('', []);
        console.log('user signed out');
    }

    getDonationDetails = () => this.state.userDonations.map(item => {
        let { petId, donatedAmount, label } = item;
        return getDonatedPetData( petId, donatedAmount, label, this.props.lostPets );
    })

    shouldComponentUpdate(nextProps, nextState) {
        const { lostPets } = this.props;
        const { user, loading } = this.state;
        if (lostPets !== nextProps.lostPets || 
            user !== nextState.user ||
            loading !== nextState.loading )
        return true; 
        return false;
    }

    componentDidMount() {

    }
    


    render() {
        console.log('RENDER: Header');
        const { user, loading } = this.state;
        const detailedDonations = this.getDonationDetails();

        return (
            <header className="Header" >
                <div className="top-bar">
                    <div className="wrapper">
                        <div className="row">
                            <div className="col branding">
                                <a href="/">
                                    <img src={logoIcon} className="app-logo" alt="logo" />
                                    <h2 className="app-title">LostPetFund</h2>
                                </a>
                            </div>
                            {user && <DisplayUserName user={user} onSignOut={this.signOut} />}
                            
                        </div>
                    </div>
                </div>
                {loading ? 
                    <LoadingAnimation message="Loading Donations" /> :
                    <UserInfo
                        onSignIn={this.signIn}
                        user={user}
                        detailedDonations={detailedDonations}
                        />
                }
            </header>
          
        );            
    }
}