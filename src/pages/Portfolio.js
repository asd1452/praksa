import React, { Component } from 'react';
import Usluge from './portfolio1/Usluge';
import Odrzavanje from './portfolio1/Odrzavanje';
import Reference from './portfolio1/Reference';
import Partneri from './portfolio1/Partneri';
import Korisnici from './portfolio1/Korisnici';
import Grandstream from './portfolio1/Grandstream';
import image5 from '../images/unis5.png';
import image6 from '../images/unis6.png';
import image7 from '../images/unis7.png';
import image8 from '../images/unis8.png';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Jumbotron, Tabs } from 'react-bootstrap';
import { Router, Route, IndexRoute, hasHistory} from 'react-router';
import { BrowserRouter, NavLink, Link, Switch} from 'react-router-dom';
import { Tab, List, Label, Grid, Image, Container, Button } from 'semantic-ui-react';


const gridStyle = {
  marginTop: '0em',
}

const sty1 = {
  backgroundColor: 'rgba(0, 98, 169, 1)',
  color: 'white',
  border: '2px solid rgba(225, 225, 225, 1)',
  borderRadius: 15,
  padding: '1em 1em',
  textAlign: 'center',
  fontSize: '18px',
}

const sty2 = {
  backgroundColor: 'rgba(225, 225, 225, 1)',
  color: 'rgba(0, 98, 169, 1)',
  border: '2px solid rgba(0, 98, 169, 1)',
  borderRadius: 15,
  padding: '1em 1em',
  marginBottom: '1em',
  textAlign: 'center',
}

const sty3 = {
  backgroundColor: 'white',
  color: 'rgba(0, 98, 169, 1)',
  border: '2px solid rgba(0, 98, 169, 1)',
  borderRadius: 15,
  padding: '1em 1em',
}

const sty4 = {
  backgroundColor: 'rgba(0, 98, 169, 1)',
  color: 'white',
  border: '2px solid rgba(225, 225, 225, 1)',
  borderRadius: 15,
  padding: '1em 1em'
}

const img5 = {
  height: '18em',
  width: '27em',
  border: '2px solid rgba(0, 98, 169, 1)',
  borderRadius: 15,
  padding: '0em 0em'
}

const img8 = {
  height: '16em',
  width: '27em',
  border: '2px solid rgba(0, 98, 169, 1)',
  borderRadius: 15,
  padding: '0em 0em',
  marginTop: '-5.5em',
  marginBottom: '0.5em'
}

const Portfolio = () => (
  <Grid style={gridStyle}>
    <Grid.Row>
      <Grid.Column width={6}>
      <Image src={image5} style={img5}/>
      </Grid.Column>
      <Grid.Column fluid width={4}>
      <Container style={sty1}>
      <h3>Usluge</h3>
      <p>Consulting<br/>
      Upravljanje projektima<br/>
      Prodaja<br/>
      Instalacija<br/>
      Održavanje<br/>
      Obuka</p>
      <Link to ='/portfolio/usluge' style={{ textDecoration: 'none'}}>
      <Button class="ui right labeled icon button" style={{ textDecoration: 'none', color: 'rgba(0, 98, 169, 1)'}}>Više<i class="right arrow icon"></i></Button>
      </Link>
      </Container>
      </Grid.Column>
      <Grid.Column width={6}>
      <Image src={image6} style={img5}/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={10}>
      <Container style={sty3}> <h3>Održavanje</h3>
        <p>UNIS Telekom za svu opremu koju je isporučio nudi , u Bosni i Hercegovini jedinstven , ugovor o održavanju. 
          Potpisivanjem ovog ugovora, Unis Telekom će za vaše poduzeće vršiti potrebno održavanje, servisiranje, periodični pregled i sve ostale potrebne aktivnosti za funkcionalan rad vaših telekomunikacijskih sustava</p>
          <Link to ='/portfolio/odrzavanje' style={{ textDecoration: 'none', color: 'blue'}}>
          <Button class="ui right labeled icon button" style={{ textDecoration: 'none', color: 'rgba(0, 98, 169, 1)', marginLeft:'5em'}}>Više<i class="right arrow icon"></i></Button>
          </Link></Container>
      </Grid.Column>
      <Grid.Column width={6}>
      <Image src={image7} style={img5}/>
      </Grid.Column>
    </Grid.Row>
      <Grid.Row>
      <Grid.Column width={8}>
      <Image src={image8} style={img8}/>
      <Container style={sty3}><h3>Reference</h3>
      <p>Referentni poslovi UNIS Telekom-a su ogromna lepeza znanja, komunikacije, kvalitete i profesionalizma.</p>
      <Link to ='/portfolio/reference' style={{ textDecoration: 'none', color: 'blue'}}>
      <Button class="ui right labeled icon button" style={{ textDecoration: 'none', color: 'rgba(0, 98, 169, 1)', marginLeft:'5em'}}>Više<i class="right arrow icon"></i></Button>
      </Link></Container>
      </Grid.Column>
      <Grid.Column width={8}>
      <Container style={sty2}><h3>Tehnička opremljenost: </h3>
      <p>Laboratorija za ispitivanje i asembliranje opreme</p>
      <p>Mjerni instrumenti</p>
      <p>Sala za obuku</p>
      <p>7 terenskih vozila</p>
      <p>1 teretno vozilo</p>
      <p> 6 malih interventnih vozila</p>
      <p>Agregati, alati, dizalice, viličari,...</p>
      <p>Magacinski prostor ukupne površine cca. 2000m/2</p></Container>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={5}>
      <Container style={sty4}>
      <h2>Partneri</h2>
      <Link to ='/portfolio/partneri' style={{ textDecoration: 'none', color: 'blue'}}>
      <Button class="ui right labeled icon button" style={{ textDecoration: 'none', color: 'rgba(0, 98, 169, 1)', marginLeft:'5em'}}>Više<i class="right arrow icon"></i></Button>
      </Link></Container>
      </Grid.Column>
      <Grid.Column width={5}>
      <Container style={sty4}>
        <h2>Korisnici usluga</h2>
        <Link to ='/portfolio/korisnici' style={{ textDecoration: 'none', color: 'blue'}}>
        <Button class="ui right labeled icon button" style={{ textDecoration: 'none', color: 'rgba(0, 98, 169, 1)', marginLeft:'5em'}}>Više<i class="right arrow icon"></i></Button>
        </Link></Container>
      </Grid.Column>
      <Grid.Column width={5}>
      <Container style={sty4}>
      <h2>Grandstream</h2>
      <Link to ='/portfolio/grandstream' style={{ textDecoration: 'none', color: 'blue'}}>
      <Button class="ui right labeled icon button" style={{ textDecoration: 'none', color: 'rgba(0, 98, 169, 1)', marginLeft:'5em'}}>Više<i class="right arrow icon"></i></Button>
      </Link></Container>
      </Grid.Column>
    </Grid.Row>
      </Grid>
)

	 export default Portfolio;