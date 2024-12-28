import React, { useState, useLayoutEffect } from 'react';

import man from './pictures/man.jpg';
import forest from './pictures/forest.jpg';
import red from './pictures/red.jpg';
import left from './pictures/leftarrow.png';
import right from './pictures/rightarrow.png';

export default function MainApp() {
  return <MainContent />;
}

/*function clickMe() {
  alert(selectedValue);
  alert('You clicked me!');
}*/
function MainContent() {
  /*hook original state*/
  const [selectedValue, setSelectedValue] = useState('man1');

  const handleChange = (value) => {
    setSelectedValue(value);
  };
  var resultPict;
  var iteration = 0;
  if (selectedValue === 'man1') {
    resultPict = man;
  } else if (selectedValue === 'work1') {
    resultPict = red;
  } else {
    resultPict = forest;
  }
  var arrayFoto = ['man1', 'work1', 'nature1'];
  if (arrayFoto.includes(selectedValue)) {
    iteration = arrayFoto.indexOf(selectedValue);
  }
  //function for click
  var clickMeL = () => {
    if (iteration === 0) {
      iteration = arrayFoto.length;
    }
    iteration -= 1;
    var newValue = arrayFoto[iteration];
    setSelectedValue(newValue);
  };
  var clickMeR = () => {
    iteration += 1;
    if (iteration === arrayFoto.length) {
      iteration = 0;
    }
    var newValue = arrayFoto[iteration];
    setSelectedValue(newValue);
  };

  return (
    <main class="thin">
      <div class="slides">
        <img src={resultPict} />
      </div>
      <div class="buttonLR">
        <button id="left" type="button" onClick={clickMeL}>
          <img src={left} />
        </button>
        <button id="right" type="button" onClick={clickMeR}>
          {' '}
          <img src={right} />
        </button>
      </div>

      <div class="wrapperSlide">
        <input
          type="radio"
          id="slide1"
          name="bar"
          value="man1" /*не показывается пользователю, чтобы точно определить какая кнопка была выбрана*/
          onChange={() => handleChange('man1')}
          checked={selectedValue === 'man1'}
        />
        <label for="slide1"></label>
        <input
          type="radio"
          id="slide2"
          name="bar"
          value="work1"
          onChange={() => handleChange('work1')}
          checked={selectedValue === 'work1'}
        />
        <label for="slide2"></label>
        <input
          type="radio"
          id="slide3"
          name="bar"
          value="nature1"
          onChange={() => handleChange('nature1')}
          checked={selectedValue === 'nature1'}
        />
        <label for="slide3"></label>
      </div>
      <div>
        <article class="articleHome fat">
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Fames cras
            fusce duis inceptos faucibus amet nulla. Taciti aenean nam feugiat;
            eros convallis metus. Parturient hac imperdiet taciti praesent dis
            eu dictum euismod vitae. Duis taciti elementum sodales eleifend
            tellus urna. Sem ultricies at a orci lacus. Consequat aliquet mauris
            nostra eget facilisis maximus. Ornare quis ante duis laoreet morbi
            potenti. Senectus sollicitudin nec cras enim erat nisi velit litora.
          </p>
          <p>
            Pharetra nostra bibendum ante at tellus. Lobortis condimentum augue
            metus purus nisi ligula. Euismod mollis ac in blandit dolor risus
            commodo cubilia. Convallis dictum ullamcorper bibendum tempor
            dapibus tellus consequat imperdiet. Lobortis pretium sed natoque
            magnis leo sapien posuere vitae. Volutpat ridiculus hendrerit augue
            magnis placerat volutpat. Atincidunt ultrices leo malesuada eleifend
            ad. Et dictum libero fermentum maecenas faucibus quam magnis risus.
          </p>
        </article>
      </div>
      <div id="news" class="thin">
        <h2 class="nameNews fat">Actualités</h2>
        <div id="newsLine">
          <div id="pic1">
            <a href="" title="There is no link yet!">
              Gfdfghjklj
            </a>
          </div>
          <div id="pic2">
            <a href="" title="There is no link yet!">
              Gfdfghjklj
            </a>
          </div>
          <div id="pic3">
            <a href="" title="There is no link yet!">
              Gfdfghjklj
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
