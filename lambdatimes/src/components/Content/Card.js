import React from 'react';
// import { cardData } from '../../data';
import PropTypes from "prop-types";

const Card = props => {
  // console.log(props);
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt={props.card.headline} />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};


// // !!!!!!!!!!!!!!!!!!!!!!!!!!!! // //
// // PROP TYPES - and remember to do the answers.md
Card.propTypes = {
  postData: PropTypes.arrayOf(
    PropTypes.shape({
        cards: PropTypes.string.isRequired
    })
  )
}

export default Card;
