import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Jumbotron, Tabs } from 'react-bootstrap';
import { Router, Route, IndexRoute, hasHistory} from 'react-router';
import { BrowserRouter, NavLink, Link, Switch} from 'react-router-dom';
import { Tab, List, Label, Grid, Image, Icon, Popup, Card, Rating, Container, Button } from 'semantic-ui-react'
import axios from 'axios';

const sty1 = {
  marginTop: '0.25em',
  backgroundColor: 'white',
  border: '2px solid rgba(0, 98, 169, 1)',
  borderRadius: 15,
  padding: '1em 1em',
}

class Održavanje extends Component {
  state = {
    tekst: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/filler`)
      .then(res => {
        const podaci = res.data;
        this.setState({ tekst: podaci[2] });
      })
  }

  render() {
    return (
      <div> 
        <Container style={sty1}>
        <h2>{this.state.tekst.naslov} <Link to ='/portfolio' style={{ textDecoration: 'none', color: 'blue'}}>
      <Button class="ui right labeled icon button" style={{ textDecoration: 'none', color: 'rgba(0, 98, 169, 1)', marginLeft:'60em'}}>Nazad<i class="right arrow icon"></i></Button>
      </Link></h2>   
      <p>{this.state.tekst.sadrzaj}</p>   
        </Container>  
     </div>
    )
  }
}

export default Održavanje;