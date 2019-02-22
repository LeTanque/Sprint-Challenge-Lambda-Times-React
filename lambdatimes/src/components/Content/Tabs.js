import React from 'react';
import Tab from './Tab';
import PropTypes from "prop-types";


const Tabs = props => {
  // console.log(props);
  // console.log(props.selectedTab);
  // map over the tabs provided on your props, create a new Tab component for each one.
  // give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        
        
    
        {props.tabs.map(tabComp => (
          <React.Fragment key={`${tabComp}#${parseInt((Math.random()*10000),0)}`} >


            <Tab selectedTabHandler={props.selectedTabHandler} selectedTab={props.selectedTab} tab={tabComp} />            


          </React.Fragment>
        ))};



      </div>
    </div>
  );
};




// // !!!!!!!!!!!!!!!!!!!!!!!!!!!! // //
// // PROP TYPES - and remember to do the answers.md
Tabs.propTypes = {
  postData: PropTypes.arrayOf(
    PropTypes.shape({
      tabs: PropTypes.array.isRequired,
      selectedTab: PropTypes.string.isRequired,
      selectedTabHandler: PropTypes.func.isRequired
    })
  )
}
export default Tabs;
