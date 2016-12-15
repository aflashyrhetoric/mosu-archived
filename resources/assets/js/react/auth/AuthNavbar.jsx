// AuthNavbar.jsx
// Renders AuthNavbar

import React from 'react';

export default class AuthNavbar extends React.Component {
  constructor(props) {
    super(props);
  }
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