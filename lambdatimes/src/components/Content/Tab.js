import React from 'react';
import PropTypes from "prop-types";


// Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
// if they match, the className should be: 'tab active-tab', if it is not it should just be 'tab'
const Tab = props => {
  console.log(props);
  return (
    <div
      // Replace this dummy click handler function with your selectTabHandler function from props 
      // you'll need to pass the `tab` in as an argument to this handler.
      className={props.tab === props.selectedTab ? 'tab active-tab' : 'tab'  }
      // onClick={props.selectedTabHandler}
      onClick={() => { 
        // console.log("you clicked");
        props.selectedTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};



// // !!!!!!!!!!!!!!!!!!!!!!!!!!!! // //
// // PROP TYPES - and remember to do the answers.md
Tab.propTypes = {
  postData: PropTypes.arrayOf(
    PropTypes.shape({
      selectedTabHandler: PropTypes.func.isRequired,
      selectedTab: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired
    })
  )
}
export default Tab;
