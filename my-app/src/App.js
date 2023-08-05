import React from 'react';
import Header from './Header';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Carousel from './Carousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
