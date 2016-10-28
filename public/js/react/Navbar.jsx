App.Views.Navbar = React.createClass({
  // Only checks for existence of token, not actual valid login.
  basicIsLoggedIn: function(){
    if(localStorage.getItem("api_token")){
      return true;
    } else {
      return false;
    }
  },
  logout: function(){
    localStorage.removeItem("api_token");
    // Refresh the page
    window.location.href = "/";
  },
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <p className="mosu-logo">MOSU v0.1.6</p>
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
});