import React, { Component } from "react";
import CartoonCard from "./components/CartoonCard";
import Col from "./components/Col";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from './cards.json';
// import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards: cards,
    score: 0,   
    clickedCards: [],
    warning: ""
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
      console.log();
      this.setState({score: 0, clickedCards: [], warning:"LOST" });
    }
    else {
      if (this.state.clickedCards.length === 12) {
        this.setState({warning:"WINNER", clickedCards: [], score: 0 });
      }
      else {
        console.log(this.state.clickedCards.length)
        
        this.setState({score: this.state.score + 1, warning: "" });
        this.state.clickedCards.push(id);
        this.reArrangeCards(this.state.cards);
      }
    }
   
  }

  // Map over this.state.friends and render a CartoonCard component for each Cartoon object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} warning={this.state.warning}>Cartoon Clicky Game</Title>
      <div className= "row" >  {this.state.cards.map(card => (<Col>
          <CartoonCard
          checkCard={this.checkCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          /></Col>
        ))} </div>
      </Wrapper>
    );
  }
}

export default App;
