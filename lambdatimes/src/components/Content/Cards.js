import React from 'react';
// import React, { Component } from 'react';
import Card from './Card';


// Card keys are authors name + random generated number
const Cards = props => {
  // console.log(props); // Tab selection changes card array.
  
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop */}
      {props.cards.map(card => (
        <Card key={`${card.author}#${parseInt((Math.random()*10000),0)}`} card={card} />
        
      ))}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;