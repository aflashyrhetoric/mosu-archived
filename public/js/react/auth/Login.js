App.Auth.Login = React.createClass({
  submitLoginForm: function(){
  	// TODO: Handle AJAX for submitting a new User
  },
  render: function() {
    return (
      <form>
        <fieldset className="form-group">
          <label htmlFor="email">Email</label>
          <input className="form-control" type="text" id="email"/>
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="password">Password</label>
          <input className="form-control" type="password" id="password"/>
        </fieldset>
        <button type="submit" className="btn btn-primary">Login</button>
      </form> 
    );
  }
});