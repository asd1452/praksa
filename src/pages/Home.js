import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Jumbotron, Button, Tab, Tabs } from 'react-bootstrap';
import { Router, Route, IndexRoute, hasHistory} from 'react-router';
import { BrowserRouter, NavLink, Link, Switch} from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import { Zoom } from 'react-slideshow-image'

const img3 = {
  marginTop: '2em',
  height: '67.2vh',
  width: '100vh',
  border: '2px solid rgba(0, 98, 169, 1)',
  padding: '0em 0em'
}

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6
];

const Slideshow = () => {
  return (
      <Container style={img3}>
      <Zoom
        images={images}
        duration={4000}
        transitionDuration={1000}
      /></Container>
  )
}

	const Home = () => (
  <div className='home'>
    <Slideshow/>
  </div>
);
	  
	 export default Home;