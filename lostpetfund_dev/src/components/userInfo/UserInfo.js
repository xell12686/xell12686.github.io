import React, { Component } from 'react';
import Donations from './Donations';

import '../../styles/Header.scss';




class LoginForm extends Component {
    
    static defaultProps = {
        onSignIn: () => {}
    }

    handleSignIn = (e) => {
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        this.props.onSignIn(username, password);
    }

    render() {
        return (
            <form onSubmit={this.handleSignIn}>
                <h3>Sign in</h3>
                <input type="text" ref="username" placeholder="enter you username" defaultValue="tony_stark" required/>
                <input type="password" ref="password" placeholder="enter password" disabled/>
                <input type="submit" value="Go!" />
            </form>
        )
    }

}


export default class UserInfo extends Component {
    
    static defaultProps = {
        user: '',
        detailedDonations: [],
        onSignIn: () => {},
        onSignOut: () => {}
    }

    render() {

        const { user, onSignOut, detailedDonations, onSignIn } = this.props;
        return (
            <div className="UserInfo">
                <div className="wrapper">
                    <div className="row">
                        <div className="col box">
                            {
                                (user) ?
                                    <Donations
                                        user={user}
                                        onSignOut={onSignOut}
                                        detailedDonations={detailedDonations}
                                    />
                                    :
                                    <LoginForm
                                        onSignIn={onSignIn}
                                    />
                            }
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

