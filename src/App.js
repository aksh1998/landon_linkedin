import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import Main from './components/main/Main';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
