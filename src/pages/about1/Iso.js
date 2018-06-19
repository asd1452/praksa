        import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Jumbotron, Tabs } from 'react-bootstrap';
import { Router, Route, IndexRoute, hasHistory} from 'react-router';
import { BrowserRouter, NavLink, Link, Switch} from 'react-router-dom';
import { Button, Icon, Label, Divider, Tab, Menu, Container, Grid, Header,Image ,List ,Responsive, Segment, Sidebar,Visibility, Flag } from 'semantic-ui-react';
import axios from 'axios';
import certifikat from '../../images/certifikat_hr.jpg';

const sty1 = {
  marginTop: '0.25em',
  backgroundColor: 'white',
  border: '2px solid rgba(0, 98, 169, 1)',
  borderRadius: 15,
  padding: '1em 1em',
  width: '100vh'
}

const sty2 = {
  marginTop: '0.25em',
  border: '2px solid rgba(0, 98, 169, 1)',
  borderRadius: 15,
  padding: '0em 0em',
  marginLeft:'17.25em',
}

class Iso extends Component {
  state = {
    tekst: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/filler`)
      .then(res => {
        const podaci = res.data;
        this.setState({ tekst: podaci[4] });
      })
  }

  render() {
    return (
      <div> 
      <Container style={sty1}>
      <h2>{this.state.tekst.naslov} <Link to ='/about' style={{ textDecoration: 'none', color: 'blue'}}>
      <Button class="ui right labeled icon button" style={{ textDecoration: 'none', color: 'rgba(0, 98, 169, 1)', marginLeft:'60em'}}>Nazad<i class="right arrow icon"></i></Button>
      </Link></h2>  
      <p>{this.state.tekst.sadrzaj}</p>
      </Container>
      <Image src={'http://localhost:8000/api/media/slike/certifikat_hr.jpg'} style={sty2}/>
      
     </div>
    )
  }
}

export default Iso;