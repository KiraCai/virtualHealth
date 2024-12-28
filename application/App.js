import React from 'react';
import MainApp from './HomePage';

import logo from './pictures/knapweed1.png';
import search from './pictures/search.png';

import ind from './pictures/linkedin.png';
import inst from './pictures/inst.png';
import fac from './pictures/facebook.png';
import twi from './pictures/twit.png';
import mail from './pictures/mail.png';
import tel from './pictures/tel.png';

export default function MyApp() {
  return (
    <>
      <Navigation />
      <MainApp />
      <Basement />
    </>
  );
}
function Navigation() {
  return (
    <header>
      <nav class="wrapper">
        <div class="box1 thin">
          <a href="" title="There is no link yet!">
            Patients
          </a>{' '}
          | <a href="">Médecins</a> | <a href="">FAO</a> |
          <a class="buttonStyleDark" href="">
            INSCRIPTION
          </a>{' '}
          |{' '}
          <a class="buttonStyleDark" href="">
            CONNECTION
          </a>
        </div>
        <div class="box2 fat">PORTAL SANTE</div>
        <div class="box3">
          <img src={logo} height="181px" />
        </div>
        <div class="box4 fat">
          TROUVER UN MEDECIN <img src={search} height="41px" />
        </div>
      </nav>
    </header>
  );
}
function Basement() {
  return (
    <footer>
      <div class="footwrap">
        <div class="fbox1">
          <div id="logofoot">
            <a href="" title="There is no link yet!">
              {' '}
              <img src={ind} />
            </a>
            <a href="" title="There is no link yet!">
              <img src={inst} />
            </a>
            <a href="" title="There is no link yet!">
              <img src={fac} />
            </a>
            <a href="" title="There is no link yet!">
              <img src={twi} />
            </a>
            <a href="" title="There is no link yet!">
              <img src={mail} />
            </a>
            <a href="" title="There is no link yet!">
              <img src={tel} />
            </a>
          </div>
        </div>
        <div class="fbox2">
          <div class="textfoot thin">
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquet
              volutpat ligula urna placerat finibus fermentum. Ipsum vivamus
              fermentum himenaeos sapien leo sem. Blandit curae facilisi
              maecenas luctus ex. Ornare interdum facilisi ridiculus a magnis
              semper. Eros dui adipiscing condimentum viverra auctor habitasse
              tempor aliquet egestas. Integer lectus laoreet aliquet, aliquet
              sociosqu fermentum. Purus posuere a aenean massa sed sollicitudin
              turpis. Elit curae libero dignissim magnis eleifend.
            </p>
          </div>
          <div class="boxli thin">
            <a href="" title="There is no link yet!">
              Psfgfents
            </a>
            <a href="">Mésgfsns</a>
            <a href="">Maefwars</a>
          </div>
        </div>
        <div class="fbox3">
          <div class="textfoot thin">
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquet
              volutpat ligula urna placerat finibus fermentum. Ipsum vivamus
              fermentum himenaeos sapien leo sem. Blandit curae facilisi
              maecenas luctus ex. Ornare interdum facilisi ridiculus a magnis
              semper. Eros dui adipiscing condimentum viverra auctor habitasse
              tempor aliquet egestas. Integer lectus laoreet aliquet, aliquet
              sociosqu fermentum. Purus posuere a aenean massa sed sollicitudin
              turpis. Elit curae libero dignissim magnis eleifend.
            </p>
          </div>
          <div class="boxli thin">
            <a href="" title="There is no link yet!">
              Psfgfents
            </a>
            <a href="">Mésgfsns</a>
            <a href="">Maefwars</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
