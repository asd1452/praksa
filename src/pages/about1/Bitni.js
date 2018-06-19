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

class Bitni extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/dokument`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div >
     <Container style={sty1}>
     <h3>Bitni događaji</h3>
    
     </Container>
     </div>
    )
  }
}

export default Bitni;




