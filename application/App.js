import React from 'react';
import logo from './pictures/knapweed1.png';
export default function MyApp() {
  return (
    <>
      <Navigation />
      <div>
        <h1>Welcome to my app</h1>
      </div>
    </>
  );
}
function Navigation() {
  return (
    <nav class="wrapper">
      <div>1</div>
      <div>2</div>
      <div class="box box1 thin">Patient</div>
      <div class="box box2 fat">PORTAL SANTE</div>
      <div class="box box3">
        <img src={logo} width="100px" />
      </div>
      <div class="box box4 fat">TROUVER UN MEDECIN</div>
    </nav>
  );
}
