import React, {Component} from 'react';

class Navbar extends Component {
  // Only checks for existence of token, not actual valid login.
  basicIsLoggedIn() {
    if(localStorage.getItem("api_token")) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem("api_token");
    // Refresh the page
    window.location.href = "/";
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <p className="mosu-logo">MOSU v0.2.0 alpha</p>
            </a>
          </div>
          { 
            this.basicIsLoggedIn() ?
            <div className="pull-right">
                <a 
                onClick={ this.logout }
                className="btn btn-secondary">Logout</a> 
            </div> : null
           }
        </div>
      </nav>
    );
  }
}

export default Navbar;