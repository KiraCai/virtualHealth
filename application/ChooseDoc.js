import React from 'react';
import CalendarDoc from './CalendarDoc';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useForm, useController } from 'react-hook-form';

const ChooseDoc = () => {
  const [hour, setHour] = React.useState('');
  const [minute, setMinute] = React.useState('');
  return (
    <main className="thin">
      <div className="titleStyle lineStyle fat">
        Sélectionnez la date d'enregistrement
      </div>
      <div className="searchForm">
        <div className="infoBloc">
          <div id="leftBloc">
            <div id="upBloc">
              <div id="upleftBloc">
                <div className="foto"></div>{' '}
                <div className="infoPers">
                  <p>
                    Rlkjhgaslllajk
                    <br></br>
                    Tafdkjjhdf
                    <br></br>
                    Opkmjlkhsf jdsghg
                    <br></br>
                    Wejjhdf
                    <br></br>
                    Dsfdkjjhdf
                    <br></br>
                    Ssfmkjhg dkjjhdf
                  </p>
                </div>
              </div>
              <div className="upRightBloc">
                <div className="namePers fat">Philippus Aureolus Theoph</div>
                <div className="longBloc thin">
                  <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Nullam
                    imperdiet integer fermentum tincidunt amet augue. Massa
                    curae elementum vehicula; vel taciti lacinia feugiat urna.
                    Justo tempus consectetur feugiat vivamus pellentesque
                    phasellus imperdiet. Sit tristique blandit erat maximus
                    praesent volutpat accumsan
                  </p>
                </div>
              </div>
            </div>
            <div id="bottomBloc">
              <div id="mapFoto"></div>
              <div className="thin">
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Nullam
                  imperdiet integer fermentum tincidunt amet augue. Massa curae
                  elementum vehicula; vel taciti lacinia feugiat urna. ipsum
                  odor amet, consectetuer adipiscing elit. Nullam imperdiet
                  integer fermentum tincidunt amet augue. Massa curae elementum
                  vehicula; vel taciti lacinia feugiat urna
                </p>
              </div>
            </div>
          </div>
          <div id="rightBloc" className="thin">
            <form className="searchForm" method="post">
              <div className="choiceBox">
                <CalendarDoc />
              </div>
              <div className="choiceBox">
                <InputLabel id="select-helper-label">
                  choisir une heure
                </InputLabel>
                <Select
                  labelId="select-label"
                  className="simple-select"
                  value={hour}
                  label="Heure"
                  //onChange={handleChangeAge}
                ></Select>
              </div>
              <div className="choiceBox">
                <InputLabel id="select-helper-label">
                  choisir les minutes
                </InputLabel>
                <Select
                  labelId="select-label"
                  className="simple-select"
                  value={minute}
                  label="Minutes"
                  //onChange={handleChangeAge}
                ></Select>
              </div>

              <div className="choiceBox">
                <label>ajouter un fichier</label>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg"
                />
              </div>
              <div className="choiceBox">
                <label>ajouter un commentaire</label>
                <textarea
                  id="textComment"
                  name="textComment"
                  rows="5"
                  cols="33"
                  autocapitalize
                  autocorrect="on"
                  maxlength="300"
                >
                  Écrivez votre note pour le médecin...
                </textarea>
              </div>
            </form>
          </div>
        </div>
        <div className="buttonStyleDark fat">RESERVER</div>
        <div className="titleRetour fat">retour au choix d'un médecin</div>
      </div>
    </main>
  );
};

export default ChooseDoc;
