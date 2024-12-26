import React from 'react';
import logo from './pictures/knapweed1.png';
import search from './pictures/search.png';
import fooflogo from './pictures/knapweed2.png';
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
      <div>
        <h1></h1>
      </div>
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
      <div id="image-section" class="footwrap">
        <div class="fbox1">
          <div id="logofoot">
            <img src={ind} height="63px" />
            <img src={inst} height="63px" />
            <img src={fac} height="63px" />
            <img src={twi} height="63px" />
            <img src={mail} height="63px" />
            <img src={tel} height="63px" />
          </div>
        </div>
        <div class="fbox2">
          <div class="textfoot thin create-line-left">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquet
            volutpat ligula urna placerat finibus fermentum. Ipsum vivamus
            fermentum himenaeos sapien leo sem. Blandit curae facilisi maecenas
            luctus ex. Ornare interdum facilisi ridiculus a magnis semper. Eros
            dui adipiscing condimentum viverra auctor habitasse tempor aliquet
            egestas. Integer lectus laoreet aliquet, aliquet sociosqu fermentum.
            Purus posuere a aenean massa sed sollicitudin turpis. Elit curae
            libero dignissim magnis eleifend.
          </div>
          <div class="boxli">
            <a href="" title="There is no link yet!">
              Rkjuhkl
            </a>{' '}
            | <a href="">Ylkjjghjkjhgf</a> | <a href="">Plfjajdsfhfsd</a>
          </div>
        </div>
        <div class="fbox3">block2</div>
      </div>
    </footer>
  );
}
