import React, { useState } from 'react';

const SignUp = () => {
  console.log('SignUp component rendered');
  return (
    <main className="mainSign thin">
      <div className="signPage fat">
        <h1>Inscription</h1>
        <div>
          <form id="signForm">
            <div class="input-box">
              <label>
                Nom
                <input type="text" name="name" />
              </label>
            </div>
            <div class="input-box">
              <label>
                Prénom
                <input type="text" name="surname" />
              </label>
            </div>
            <div class="input-box">
              <label>
                e-mail
                <input type="text" name="mail" />
              </label>
            </div>
            <div class="input-box">
              <label>
                Téléphone
                <input type="text" name="tel" />
              </label>
            </div>
            <div class="input-box">
              <label>
                Mot de passe
                <input type="text" name="password" />
              </label>
            </div>
            <div class="input-box">
              <label>
                Répéter le mot de passe
                <input type="text" name="repeatPassword" />
              </label>
            </div>
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
    </main>
  );
};
export default SignUp;
