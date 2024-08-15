import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ContentSection />
      <Footer />
    </div>
  );
}

export default App;
