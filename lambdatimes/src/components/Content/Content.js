import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
import { tabData, cardData } from '../../data'; // Importing our tab and card data. No need to change anything here.


export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }
  
  // Once the component has mounted, get the data and reflect that data on the state.
  componentDidMount() {
    this.setState({ 
      tabs: tabData,  // Set tabs to tabData
      cards: cardData // Set cards to cardData
    })
  }

  // this function should take in the tab and update the state with the new tab.
  changeSelected = tab => {
    this.setState({ [tab.target.name]: tab.target.value });
  };

  /*
    Right now this function only returns the cards on state.
    We're going to make this function more dynamic
    by using it to filter out our cards for when a tab is selcted
      
    Notice that we're passing this function to our <Cards /> component below.
    This function returns an array of cards, so we can just pass it down as such.

    Your algorithim for the logic here is as follows: 
    - if the selected tab is 'all' it should return all 
      of the items from cardData. 
    - else, it should only return those cards whose 'tab' matched this.state.selected.
  */
  filterCards = (tabSelected) => { // This isn't pretty, but matches the logic
    if (tabSelected === 'all') {
      return this.state.cards;
    } else {
      const selectedCardArray = this.state.cards.filter(card => card.tab.includes(tabSelected))
      return selectedCardArray;
    }
  };

  render() {
    // console.log(this.state.cards);
    // console.log(this.state.tabs);
    // console.log(this.state.selected);
    // console.log(this.filterCards(this.state.selected));
    // Add 2 props to the Tabs component, `selectedTab` that includes the currently selected tab
    // and `selectTabHandler` that includes the function to change the selected tab
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectedTabHandler={this.changeSelected} />
        <Cards cards={this.filterCards(this.state.selected)} />
      </div>
    );
  }
}
