import React, { Component } from 'react';

//includes
import './Assets/css/style.css'

// components
import Header from './components/header components/Header';
import Footer from './components/footer components/Footer';
import JumbotronPage from './components/pages/JumbotronPage';
import ContainerBar from './components/pages/Containerbar';
import CarouselPage from './components/pages/Carousel';

class App extends Component {
  render(){
    return <div >
      <Header/>
      <JumbotronPage/>
      <ContainerBar/>
      <CarouselPage/>
      <Footer/>  
    </div>;
  }
}
export default App;