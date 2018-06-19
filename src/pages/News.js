import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Jumbotron, Tabs } from 'react-bootstrap';
import { Router, Route, IndexRoute, hasHistory} from 'react-router';
import { BrowserRouter, NavLink, Link, Switch} from 'react-router-dom';
import { Button, Icon, Label, Divider, Tab, Menu, Container, Grid, Header,Image ,List ,Responsive, Segment, Sidebar,Visibility, Flag } from 'semantic-ui-react';
import axios from 'axios';

const sty1 = {
  marginTop: '0.25em',
  backgroundColor: 'white',
  border: '2px solid rgba(0, 98, 169, 1)',
  borderRadius: 15,
  padding: '1em 1em',
}

class News extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/clanak`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div >
     <Container style={sty1}>
     <h3>Novosti<Link to ='/portfolio' style={{ textDecoration: 'none', color: 'blue'}}>
      <Button class="ui right labeled icon button" style={{ textDecoration: 'none', color: 'rgba(0, 98, 169, 1)', marginLeft:'60em'}}>Nazad<i class="right arrow icon"></i></Button>
      </Link></h3>
     </Container>
     { this.state.persons.map(person => <Container style={sty1}><h3>{person.naslov}</h3><p>{person.vrijeme_objave}</p><p>{person.kratki_opis}</p><p> {person.sadrzaj}</p></Container>)}
     
     </div>
    )
  }
}

export default News;



//{ this.state.persons.map(person => <p><a href={person.naslov}>{person.naslov}</a></p>)}
