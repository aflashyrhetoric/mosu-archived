import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <p className="mosu-logo">MOSU</p>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;