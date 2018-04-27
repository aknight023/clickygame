import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from './cards.json';
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards: cards,
    score: 0,   
    clickedCards: [],
    footerText: ""
  }

  reArrangeCards = (array) => {
    let currentIndex = array.length;

    while (0 !== currentIndex) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }    
  }

  checkCard = (id) => {
    
    if(this.state.clickedCards.includes(id)) {
      console.log("LOST");
      this.setState({score: 0});
    }
    else {
      this.setState({score: this.state.score + 1});
      this.state.clickedCards.push(id);
      this.reArrangeCards(this.state.cards);

    }
   
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score}>Clicky Game</Title>
        {this.state.cards.map(card => (
          <FriendCard
          checkCard={this.checkCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
