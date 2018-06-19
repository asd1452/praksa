import bckgimage from '../images/background.png';
import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Jumbotron, Tab, Tabs } from 'react-bootstrap';
import { Router, Route, IndexRoute, hasHistory} from 'react-router';
import { BrowserRouter, NavLink, Link, Switch} from 'react-router-dom';
import { Form, Input, TextArea, Button, Container } from 'semantic-ui-react';
import axios from 'axios';

const sty1 = {
  marginTop: '0.25em',
  border: '2px solid rgba(0, 98, 169, 1)',
  borderRadius: 15,
  padding: '0em 0em',
  width: '100vh',
  marginLeft:'3.25em'
}

const sty2 = {
  marginTop: '0.5em',
  width: '100vh',
  marginLeft: '-3.25em',
  marginBottom: '1em'
}

class Kontakt extends Component {
  state = {
    persons: [],
    naslov:'',
    email_adresa:'',
    sadrzaj:''
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/zaposlenik`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  handleChange = event => {
    this.setState({ naslov: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      naslov: this.state.naslov,
      email_adresa: this.state.email_adresa,
      sadrzaj: this.state.sadrzaj
    };

    axios.post(`http://localhost:8000/api/kontakt`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
      <Container style={sty2}>
      <h2 >Kontakt</h2>
    <Form onSubmit={this.handleSubmit}>
    <Form.Group widths='equal'>
      <Form.Field  control={Input} label='Naslov' placeholder='Naslov' name="naslov" onChange={this.handleChange}/>
      <Form.Field  control={Input} label='Email' placeholder='Email' name="email_adresa" onChange={this.handleChange}/>
    </Form.Group>
    <Form.Field  control={TextArea} label='Poruka' placeholder='' name="sadrzaj" onChange={this.handleChange}/>
    <Form.Field  control={Button} content='Pošalji' />
  </Form>   
  </Container>

 <table class="ui blue table" style={sty1}>
 <thead>
   <tr><th>Kategorija</th>
   <th>Uloga</th>
   <th>Ime i prezime</th>
   <th>Email</th>
 </tr></thead>
 <tbody>
   <tr>
     <td>{ this.state.persons.map(person => <p>{person.kategorija}</p>)}</td>
     <td>{ this.state.persons.map(person => <p>{person.uloga}</p>)}</td>
     <td>{ this.state.persons.map(person => <p>{person.ime_prezime}</p>)}</td>
     <td>{ this.state.persons.map(person => <p>{person.email}</p>)}</td>
   </tr>
 </tbody>
</table>
     </div>
    )
  }
}

export default Kontakt;