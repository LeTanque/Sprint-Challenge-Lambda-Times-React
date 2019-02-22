import React from 'react';
// import React, { Component } from 'react';
import Card from './Card';
import PropTypes from "prop-types";



// Using the cards prop, map over the list creating a 
// new Card component for each passing the card as the only prop
// Card keys are authors name + random generated number
const Cards = props => {
  // console.log(props); // Tab selection changes card array.
  return (
    <div className="cards-container">
      
      {props.cards.map(card => (
        <Card key={`${card.author}#${parseInt((Math.random()*10000),0)}`} card={card} />
        
      ))}
    </div>
  )
}


// // !!!!!!!!!!!!!!!!!!!!!!!!!!!! // //
// // PROP TYPES - and remember to do the answers.md
Cards.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      cards: PropTypes.string.isRequired,
    })
  )
}

export default Cards;