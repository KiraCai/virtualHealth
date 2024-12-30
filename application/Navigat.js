import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from './pictures/knapweed1.png';
import search from './pictures/search.png';

const Navigat = () => {
  return (
    <>
      <header>
        <nav className="wrapper">
          <div className="box1 thin">
            <Link to="/">Patients</Link>|<Link to="/blogs">Médecins</Link>|
            <Link to="/blogs">FAO</Link>|
            <Link className="buttonStyleDark" to="/signup">
              INSCRIPTION
            </Link>
            |
            <Link className="buttonStyleDark" to="/home">
              CONNECTION
            </Link>
          </div>
          <div className="box2 fat">PORTAL SANTE</div>
          <div className="box3">
            <img src={logo} height="181px" />
          </div>
          <div className="box4 fat">
            TROUVER UN MEDECIN <img src={search} height="41px" />
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigat;
