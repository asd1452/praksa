import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Jumbotron, Tabs } from 'react-bootstrap';
import { Router, Route, IndexRoute, hasHistory} from 'react-router';
import { BrowserRouter, NavLink, Link, Switch} from 'react-router-dom';
import { Button, Icon, Label, Divider, Tab, Menu, Container, Grid, Header,Image ,List ,Responsive, Segment, Sidebar,Visibility, Flag } from 'semantic-ui-react';
import axios from 'axios';

const sty1 = {
  marginTop: '0.25em',
  border: '2px solid rgba(0, 98, 169, 1)',
  borderRadius: 15,
  padding: '0em 0em',
  width: '100vh',
  marginLeft:'3.25em'
}

class Partneri extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/partneri`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div >
        <Container><h3 style={{marginLeft: '2em'}}>Partneri <Link to ='/portfolio' style={{ textDecoration: 'none', color: 'blue'}}>
      <Button class="ui right labeled icon button" style={{ textDecoration: 'none', color: 'rgba(0, 98, 169, 1)', marginLeft:'60em'}}>Nazad<i class="right arrow icon"></i></Button>
      </Link></h3></Container>
      <table class="ui blue table" style={sty1}>
 <thead>
   <tr><th>Ime</th>
   <th>Opis</th>
   <th>Web</th>
   <th>Aktivnost</th>
 </tr></thead>
 <tbody>
   <tr>
     <td>{ this.state.persons.map(person => <p>{person.ime}</p>)}</td>
     <td>{ this.state.persons.map(person => <p>{person.opis}</p>)}</td>
     <td>{ this.state.persons.map(person => <p><a href={person.web}>{person.web}</a></p>)}</td>
     <td>{ this.state.persons.map(person => <p>{person.aktivnost}</p>)}</td>
   </tr>
 </tbody>
</table>
     </div>
    )
  }
}

export default Partneri;