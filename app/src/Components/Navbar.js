import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Navbar extends Component {
  state = {};

  option = event => {
    event.preventDefault();
    // alert("this thing is working");
    return <Redirect to="/login" />;
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" href=" ">
            Navbar
          </a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/side">
                  Side
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/secret">
                  Secret
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <a href="/login">
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  onClick={this.option}
                >
                  {this.props.status}
                </button>
              </a>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
