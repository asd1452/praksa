import React, { Component } from 'react';
import About1 from './about1/About1';
import Iso from './about1/Iso';
import Financijsko from './about1/Financijsko';
import Bitni from './about1/Bitni';
import image3 from '../images/unis3.png';
import image4 from '../images/unis4.png';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Jumbotron, Tabs } from 'react-bootstrap';
import { Router, Route, IndexRoute, hasHistory} from 'react-router';
import { BrowserRouter, NavLink, Link, Switch} from 'react-router-dom';
import { Tab, List, Label, Grid, Image, Icon, Popup, Card, Rating, Container, Button } from 'semantic-ui-react'
import StickyBox from "react-sticky-box";

const gridStyle = {
  marginTop: '0em',
}

const img3 = {
  marginTop: '0em',
  marginBottom: '-0.8em',
  marginLeft: '4.8em',
  height: '17.5em',
  width: '26.25em',
  border: '2px solid rgba(0, 98, 169, 1)',
  borderRadius: 15,
  padding: '0em 0em'
}

const img4 = {
  marginBottom: '-10.8em',
  marginLeft: '-0em',
  marginRight: '-10em',
  height:'18em',
  width: '30em',
  border: '2px solid rgba(0, 98, 169, 1)',
  borderRadius: 15,
  padding: '0em 0em'
}

const sty1 = {
  backgroundColor: 'rgba(0, 98, 169, 1)',
  color: 'white',
  border: '2px solid rgba(225, 225, 225, 1)',
  borderRadius: 15,
  padding: '1em 1em'
}

const sty2 = {
  backgroundColor: 'rgba(225, 225, 225, 1)',
  color: 'rgba(0, 98, 169, 1)',
  border: '2px solid rgba(0, 98, 169, 1)',
  borderRadius: 15,
  padding: '1em 1em',
  marginBottom: '1em'
}

const sty3 = {
  backgroundColor: 'white',
  color: 'rgba(0, 98, 169, 1)',
  border: '2px solid rgba(0, 98, 169, 1)',
  borderRadius: 15,
  padding: '1em 1em',
  marginTop: '-1.5em'
}

const About = () => (

  <Grid style={gridStyle} >
    <Grid.Row >
      <Grid.Column width={8}>
      <Container style={sty1}><h3>O nama</h3>
        <p>Poduzeće UNIS Telekom d.d. je osnovano 1977. godine na temeljima „Dogovora o dugoročnoj proizvodno-tehničkoj suradnji“ sa švedskom tvrtkom ERICSSON za program telekomunikacijske opreme.</p>
        <p>Godine 1987. je zaključen ugovor sa norveškom tvrtkom NERA AB za program radio odašiljačke opreme srednjeg i velikog kapaciteta.</p>
        <p>Svi postignuti ugovori su i danas na snazi.</p>
        <p>UNIS Telekom je organiziran kao dioničko društvo.<t/>
        <Link to ='/about/more'>
        <Button class="ui right labeled icon button" style={{ textDecoration: 'none', color: 'rgba(0, 98, 169, 1)', marginLeft:'2em'}}>Više<i class="right arrow icon"></i></Button>
        </Link></p></Container>
      </Grid.Column>
      <Grid.Column width={8} >
      <Image src={image3} style={img3}/>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row >  
      <Grid.Column width={6}>
      <Container style={sty2}><h3>Vizija</h3>
        <p>Biti vodeće poduzeće na tržištu koje znanjem, odnosom prema kupcu i 
          prihodima među poduzećima u Bosni i Hercegovini i šire u jugoistočnoj Europi, te prepoznatljivim partnerskim pristupom, ostvaruje više.</p></Container>
      <Container style={sty2}><h3>Misija</h3>
      <p>Pružanje visokokvalitetne komunikacijske usluge na terenu koja osvaja povjerenje svojih kupaca i partnera.</p></Container>
      </Grid.Column>
      <Grid.Column width={4}>
      <Image src={image4} style={img4}/>
      </Grid.Column>
      <Grid.Column width={6}>
      <Container style={sty2}><h3>Vrijednosti</h3>
        <p>Kvaliteta</p>
        <p>Poželjno radno mjesto</p>
        <p>Moderna organizacija</p>
        <p>Otvorena komunikacija</p>
        <p>Kreativnost</p>
        <p>Kao imperativ stvaramo poželjno radno mjesto u modernoj organizaciji s otvorenom komunikacijom koja potiče kreativnost u svemu što radimo.</p> </Container>
      </Grid.Column>
    </Grid.Row>
      <Grid.Row >
      <Grid.Column width={8}>
      <Container style={sty3}>
      <h3>Ljudski Potencijali</h3>
      <p>Snaga UNIS Telekom-a su njegovi zaposlenici. Zahvaljujući njihovom entuzijazmu, želji za dokazivanjem, predanosti poslu, lojalnosti kući te ravnoteži iskustva i mladosti, UNIS Telekom raste sve ove godine.<br/>
        S UNIS Telekom-om živi i radi 50 zaposlenika.<br/>
        UNIS Telekom bez struke, znanja i sposobnosti svojih najobrazovanijih kadrova ne može zamisliti svoju budućnost. Kontinuirana razmjena iskustva
         i stjecanje novih znanja UNIS Telekom-ovih zaposlenika na poslijediplomskim studijima, seminarima, kongresima i simpozijima širom Bosne i Hercegovine 
         i Europe pretpostavka je UNIS Telekom-ovih novih uspjeha.</p></Container>
      </Grid.Column>
      <Grid.Column width={8}>
      <Container style={sty3}>
      <h3>UNIS Telekom trenutno upošljava:</h3>
      <p>10 inžinjera</p>
      <p>15 instalatera</p>
      <p>15 uredskih djelatnika</p>
      <p>5 pomoćnih radnika</p>
      <p>20 stručnjaka koji se angažiraju po potrebi i ovisnosti o projektu</p></Container>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row style={{marginTop:'-0.5em'}}>
      <Grid.Column width={5} style={{marginLeft:'2em'}}>
      <Container style={sty1}>
      <h2>ISO 9001:2000</h2>
      <Link to ='/about/iso' style={{ textDecoration: 'none', color: 'blue'}}>
      <Button class="ui right labeled icon button" style={{ textDecoration: 'none', color: 'rgba(0, 98, 169, 1)', marginLeft:'5em'}}>Više<i class="right arrow icon"></i></Button>
      </Link></Container>
      </Grid.Column>
      <Grid.Column width={5}>
      <Container style={sty1}>
        <h2>Financijsko izvješće</h2>
        <Link to ='/about/financijsko' style={{ textDecoration: 'none'}}>
        <Button class="ui right labeled icon button" style={{ textDecoration: 'none', color: 'rgba(0, 98, 169, 1)', marginLeft:'5em'}}>Više<i class="right arrow icon"></i></Button>
        </Link></Container>
      </Grid.Column>
      <Grid.Column width={5}>
      <Container style={sty1}>
      <h2>Bitni događaji</h2>
      <Link to ='/about/bitni' >
      <Button class="ui right labeled icon button" style={{ textDecoration: 'none', color: 'rgba(0, 98, 169, 1)', marginLeft:'5em'}}>Više<i class="right arrow icon"></i></Button>
      </Link></Container>
      </Grid.Column>
    </Grid.Row>
      </Grid>
)

export default About;