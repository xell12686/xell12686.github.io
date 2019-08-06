import React, {Component} from 'react';

import Header from './Header';
import Body from './cards/Body';
import Footer from './Footer';

import '../styles/App.scss';

export default class App extends Component {
  
  state = {
    cards: [],
    user: '',
    userDonations: [],
  }
  
  updateUser = (username, donations) => {
    if (username) {
      this.setState({ 
        user: username, 
        userDonations: donations
      });
    } else {
      let cleanedCards = this.state.cards.map(item => {
        delete item.donatedStatus;
        return item;
      });
      this.setState({ 
        user: '',
        userDonations: [],
        cards: cleanedCards
      });
    }
  }
    
 
  updateDonations = (donations) => {
    let pets = this.state.cards;
    this.setState({ 
      userDonations: donations,
      cards: pets
    })
  }
  
  updateCards = (pets) => {
    this.setState({cards: pets});
  }



  render() {

    const { user, cards, userDonations } = this.state;

    return (
      <div className="App">
        <Header
          updatedUserDonations={userDonations}
          lostPets={cards}
          handleUpdateUser={this.updateUser}
        />
  
        <Body 
          user={user}
          userDonations={userDonations}
          handleUpdateCards={this.updateCards}
          handleUpdatePet={this.updatePet}
          handleUpdateDonations={this.updateDonations}
        />
        <Footer />
      </div>
    );
  }
}


