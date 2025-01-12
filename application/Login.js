import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };
  }

  render() {
    return (
      <main className="mainSign thin">
        <div className="signPage fat">
          <div className="titleStyle">Connection</div>

          <div id="layoutCart">
            <form id="signForm" method="post" onSubmit={this.handleSubmit}>
              <div className="input-box">
                <label>e-mail </label>
                <input
                  type="email"
                  name="mail"
                  placeholder="Entrez votre e-mail"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  aria-required="true"
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="password"> Mot de passe </label>
                <input
                  type="password"
                  name="password"
                  value={this.state.input.password}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Entrez votre mot de passe"
                  id="password"
                  pattern="(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}"
                  maxLength="20"
                  autoComplete="on"
                  required
                />
                <div className="text-danger">{this.state.errors.password}</div>
              </div>
              <input
                type="submit"
                value="entrez"
                className="btn buttonStyleDark"
              />
              <div className="input-box">
                <label> Pas encore inscrit ?</label>
                <div className="btnLink">
                  <Link className="btn buttonStyleDark thin" to="/signup">
                    inscription
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}
export default Login;
