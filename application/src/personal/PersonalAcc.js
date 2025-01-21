import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { goToTop } from 'react-scrollable-anchor';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import searchW from '../../pictures/searchW.png';

const PersonalAcc = () => {
  return (
    <main className="thin">
      <div className="boxInfo">
        <Info />
      </div>
      <div id="boxBooking" className="boxGeneral">
        <FillInformation />
      </div>
      <div id="boxHistory" className="boxGeneral">
        <FillInformation />
      </div>
      <div id="boxConsult" className="boxGeneral">
        <FillInformation />
      </div>
      <div id="boxPrescrip" className="boxGeneral">
        <FillInformation />
      </div>
      <div id="boxVaccin" className="boxGeneral">
        <FillInformation />
      </div>
      <div id="boxTests" className="boxGeneral">
        <FillInformation />
        {goToTop()}
      </div>
    </main>
  );
};

export default PersonalAcc;

const Info = () => {
  const [unit, setUnit] = React.useState('');

  var optionsUnit = [
    { id: 1, name: 'Réservations' },
    { id: 2, name: 'Antécédents médicaux' },
    { id: 3, name: 'Consultations' },
    { id: 4, name: 'Prescription' },
    { id: 5, name: 'Vaccinations' },
    { id: 6, name: 'Tests' },
  ];
  const handleChangeUnit = (event) => {
    setUnit(event.target.value);
  };

  return (
    <>
      <div id="headLineTop" className="lineStyle">
        <div className="titleStyle fat">Compte personnel</div>
        <div id="searchPanel">
          <div>
            {' '}
            <input
              type="date"
              name="date"
              value="2000-01-31"
              aria-required="true"
              className="choisePanel"
              required
            />
          </div>

          <Select
            labelId="select-label"
            className="fat choisePanel"
            value={unit}
            label="Section"
            onChange={handleChangeUnit}
          >
            {optionsUnit.map((item) => (
              <MenuItem value={item.id}>{item.name}</MenuItem>
            ))}
          </Select>
          <img src={searchW} height="41px" />
        </div>
      </div>

      <div id="linkNavig">
        <nav id="navigAncor" className="fat">
          <div className="ancorLink">Réservations</div>
          <div className="ancorLink">Antécédents médicaux</div>
          <div className="ancorLink">Consultations</div>
          <div className="ancorLink">Prescription</div>
          <div className="ancorLink">Vaccinations</div>
          <div className="ancorLink">Tests</div>
        </nav>
      </div>
    </>
  );
};

const FillInformation = () => {
  return <div>BoxINFO</div>;
};
