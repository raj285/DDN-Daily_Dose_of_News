import React, { Component } from "react";
import { Link } from 'react-router-dom';
export default class navbar extends Component {
  render() {
    const {mode,onModeChange,altermode,sign,onSignChange}=this.props;
    const stylingofnavbar={
      color:altermode
    };
    return (
      <div>
        <nav className={`navbar fixed-top navbar-expand-lg bg-${mode} `}>
          <div className="container-fluid" >
            <a className="navbar-brand" href="/" style={stylingofnavbar}>
              <b>chaecking chnge on site</b>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                <li className="nav-item" >
                  <a className="nav-link active" aria-current="page" href="/" style={stylingofnavbar}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/business" style={stylingofnavbar}>
                    business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/entertainment" style={stylingofnavbar}>
                    entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/health" style={stylingofnavbar}>
                    health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sports" style={stylingofnavbar}>
                    sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/technology" style={stylingofnavbar}>
                    technology
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/science" style={stylingofnavbar}>
                    science
                  </a>
                </li>
              </ul>
              <div>
                {(sign==="in")?(
                  <div>
                  <Link className="btn btn-primary mx-2" to="/login" role="button" onClick={onSignChange}>Login</Link>,
                  <Link className="btn btn-primary mx-2" to="/signup" role="button" onClick={onSignChange}>SignIn</Link>
                  </div>
                ):(
                  <Link className="btn btn-primary mx-2" to="/signup" role="button" onClick={onSignChange}>SignOut</Link>
                )}

              </div>

              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={onModeChange} />
                <label  className="form-check-label" htmlFor="flexSwitchCheckDefault" style={stylingofnavbar}>{mode==="white"?"Light Mode":"Dark Mode"}</label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
//// The main reason for using Link instead of <a> tag is to ensure that the navigation is handled by React Router and the page does not refresh completely.
