import React from 'react';
import logo from './pictures/knapweed1.png';
import search from './pictures/search.png';
export default function MyApp() {
  return (
    <>
      <Navigation />
      <div>
        <h1></h1>
      </div>
    </>
  );
}
function Navigation() {
  return (
    <nav class="wrapper">
      <div class="box box1 thin">
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
      <div class="box box2 fat">PORTAL SANTE</div>
      <div class="box box3">
        <img src={logo} height="181px" />
      </div>
      <div class="box box4 fat">
        TROUVER UN MEDECIN <img src={search} height="41px" />
      </div>
    </nav>
  );
}
