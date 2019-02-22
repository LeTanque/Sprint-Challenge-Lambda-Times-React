import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';

// const App = () => {
class App extends Component {


  render() {
    
    return (
      <div className="App">
        <TopBar />
        <Header />
        <Content />
      </div>
    );
  }
}
  


export default App;
