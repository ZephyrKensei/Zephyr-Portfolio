import React from 'react';
import './css/index.css';
import './css/App.css';
import data from "./data"
import Intro from './components/Intro';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';

export default function App(){
  const content = data.map(item => {
    return (
      <Work
        key={item.id}
        img={item.img}
        urlSrc={item.urlSrc}
      />
    )
  })
    return (
      <>
        <Header />
        <Intro />
        <Services />
        <About />
        <Work />
        {content}
        <Footer />
      </>
    )
}

