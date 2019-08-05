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
    this.setState({ 
      user: username, 
      userDonations: donations
    });
    if(username === '') {
      const cleanedCards = this.state.cards.map(item => {
        delete item.donatedStatus;
        return item;
      });
      this.setState({ 
        cards: cleanedCards
      });
    }
  }
    
  //move updatePetDonationStatus() here instead;
  
  updateDonations = (donations) => {
    let pets = this.state.cards;
    console.log('updateDonations() ran from App');
    // create fx here to add new donated:true object in filtered pet/card to match
    // to match id from new donations
    this.setState({ 
      userDonations: donations,
      cards: pets
    })
  }
  
  updateCards = (pets) => {
    // assuming that this will run too if userDonations state is updated
    // update cards state by
        // - add donated=true to for pet ids with
        // donations from userDonations state.
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


