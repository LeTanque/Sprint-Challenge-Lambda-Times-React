import React from 'react';
// import PropTypes from "prop-types";


// Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
// if they match, the className should be: 'tab active-tab', if it is not it should just be 'tab'
const Tab = props => {
  
  // console.log(props);
  // console.log(props.tab);
      

  return (
    <div
      // Replace this dummy click handler function with your selectTabHandler function from props 
      // you'll need to pass the `tab` in as an argument to this handler.
      className={props.tab === props.selectedTab ? 'tab active-tab' : 'tab'  }
      // onClick={(props.selectedTabHandler) => { }}
      onClick={props.selectedTabHandler}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};



// // !!!!!!!!!!!!!!!!!!!!!!!!!!!! // //
// // PROP TYPES - and remember to do the answers.md
// PostContainer.propTypes = {
//   postData: PropTypes.arrayOf(
//       PropTypes.shape({
//           imageUrl: PropTypes.string.isRequired,
//           likes: PropTypes.number.isRequired,
//           thumbnailUrl: PropTypes.string.isRequired,
//           timestamp: PropTypes.string.isRequired,
//           username: PropTypes.string.isRequired,
//           comments: PropTypes.arrayOf(
//               PropTypes.shape({
//                   text: PropTypes.string.isRequired,
//                   username: PropTypes.string.isRequired
//               })
//           )
//       })
//   )
// }
export default Tab;
