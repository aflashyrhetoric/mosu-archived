App.Views.Navbar = React.createClass({
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
          <div className="pull-right">
              <a 
              onClick={ this.logout }
              className="btn btn-secondary">Logout</a> 
          </div>
        </div>
      </nav>
    );
  }
});