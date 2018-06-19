import React, { Component } from 'react';
import image0 from './images/unis.png';
import image1 from './images/unis1.png';
import image2 from './images/unis2.png';
import bckgimage from './images/background.png';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.css';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Usluge from './pages/portfolio1/Usluge';
import Odrzavanje from './pages/portfolio1/Odrzavanje';
import Reference from './pages/portfolio1/Reference';
import Partneri from './pages/portfolio1/Partneri';
import Korisnici from './pages/portfolio1/Korisnici';
import Grandstream from './pages/portfolio1/Grandstream';
import About1 from './pages/about1/About1';
import Iso from './pages/about1/Iso';
import Financijsko from './pages/about1/Financijsko';
import Bitni from './pages/about1/Bitni';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Jumbotron, Tabs } from 'react-bootstrap';
import { Router, Route, IndexRoute, hasHistory} from 'react-router';
import { BrowserRouter, NavLink, Link, Switch} from 'react-router-dom';
import { Button, Icon, Label, Divider, Tab, Menu, Container, Grid, Header,Image ,List ,Responsive, Segment, Sidebar,Visibility, Flag } from 'semantic-ui-react';
import { StickyContainer, Sticky } from 'react-sticky';
import StickyBox from "react-sticky-box";
import _ from 'lodash';

const sty1 = {
  backgroundImage: `url(${bckgimage})`,
  backgroundSize: 'cover',
  minHeight: '100vh',
  maxHeight: '10000em',
  width: '220vh',
}


const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '0em',
  marginTop: '-3em',
  marginLeft: '74.4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease'
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  padding: '0em 0em 0em 0em',
}

const menuItem1 = {
  border: 'none',
  borderRadius: 0,
  marginLeft: '76em',
}

const menuItem2 = {
  border: 'none',
  borderRadius: 0,
  
}

const headerStyle = {
  backgroundColor: 'white',
  border: '2px solid rgba(0, 98, 169, 1)',
  borderRadius: 15,
  marginTop: '-1.5em',
  marginBottom: '0.25em',
  marginLeft: '4.5em',
  width: '100vh',
  padding: '0em 0em',
  height: 85

}

const footerStyle = {
  backgroundColor: 'white',
  border: '2px solid rgba(0, 98, 169, 1)',
  borderRadius: 15,
  marginTop: '1em',
  marginBottom: '-20em',
  marginLeft: '5em',
  width: '100vh',
  height: 85,
  bottom: 0,

}
const img1 = {
  marginTop: '-0.25em',
  marginLeft: '0.5em',
  height: '4.5em',
  width: '12.5em'
}

const img2 = {

  height: '3.8em',
  width: '3.8em',
  marginLeft: '2em'
}
const Header0 = () => (
  
  <Container>
  <Segment  vertical style={headerStyle}>
  <Grid columns={2} stackable>
  <Grid.Row>
  <Grid.Column>
  <Header as='h1' floated='left' size='normal'>
    <Image src={image0} style={img1}/>
  </Header>
  </Grid.Column>
  <Grid.Column>
  <Header as='h1' floated='right' size='small'style={{marginTop: '1em'}}>
    <Flag name='ba'/>
    <Flag name='gb'/>
  </Header>
  </Grid.Column>
  </Grid.Row>
  </Grid>
  </Segment>
  </Container>
)
const Footer0 = () => (
  <Container style={footerStyle} >
    <Grid columns={3}  stackable >
      <Grid.Row>
        <Grid.Column>
        <Header as='h1' floated='left' size='normal'>
            <Image src={image2} style={img2} />
        </Header>
        </Grid.Column>
        <Grid.Column style={{ textDecoration: 'none', color: 'rgba(0, 98, 169, 1)'}}>
          <Header  as='h4' content='Unis Telekom d.d. Dr. Ante Starčevića 50 88000 Mostar' color="b" />
          <p><b>E-mail:</b> unis@unistelekom.ba</p>
          <p><b>Telefon:</b> (036) 445-300 <b>Fax:</b> (036) 445-323</p>
        </Grid.Column>
        <Grid.Column>
        <Header as='h1' floated='right' size='huge'>
           <a href="https://www.facebook.com/pages/UNIS-Telekom-dd-Mostar/268657039871052"><Icon name='link facebook blue'/></a>
           <a href="https://www.linkedin.com/company/unis-telekom-d-d-mostar"><Icon name='link linkedin blue'/></a>
        </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

class Menu0 extends Component {
  state = {
    menuFixed: false,
    activeItem: 'Home'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed } = this.state
    const { activeItem } = this.state

    return (
      <div>
         <Header0/> 
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        > 
          
          <Menu
            borderless
            secondary
            size="massive"
            fixed={menuFixed && 'top'}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
        <Menu.Item style={menuFixed ? menuItem1 : menuItem2} name='Naslovnica' active={activeItem === 'Home'} onClick={this.handleItemClick} as={Link} to='/'/>
        <Menu.Item name='O nama' active={activeItem === 'About'} onClick={this.handleItemClick} as={Link} to='/about'/>
        <Menu.Item name='Novosti' active={activeItem === 'News'} onClick={this.handleItemClick} as={Link} to='/news'/>
        <Menu.Item name='Portfolio' active={activeItem === 'Portfolio'} onClick={this.handleItemClick} as={Link} to='/portfolio'/>
        <Menu.Item name='Kontakt' active={activeItem === 'Contact'} onClick={this.handleItemClick} as={Link} to='/contact'/>
      </Menu>
        </Visibility>       
      </div>
    )
  }
}

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/news' component={News}></Route>
    <Route exact path='/portfolio' component={Portfolio}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    <Route exact path='/about/more' component={About1}></Route>
    <Route exact path='/about/iso' component={Iso}></Route>
    <Route exact path='/about/financijsko' component={Financijsko}></Route>
    <Route exact path='/about/bitni' component={Bitni}></Route>
    <Route exact path='/portfolio/usluge' component={Usluge}></Route>
    <Route exact path='/portfolio/odrzavanje' component={Odrzavanje}></Route>
    <Route exact path='/portfolio/reference' component={Reference}></Route>
    <Route exact path='/portfolio/partneri' component={Partneri}></Route>
    <Route exact path='/portfolio/korisnici' component={Korisnici}></Route>
    <Route exact path='/portfolio/grandstream' component={Grandstream}></Route>
  </Switch>
);

const App = () => (
  <div className='app' style={sty1}>   
    <Menu0 />
    <Container style={{ minHeight: '78.5vh'}} ><Main  /></Container>
    <Footer0 />   
  </div>
);
    export default App;