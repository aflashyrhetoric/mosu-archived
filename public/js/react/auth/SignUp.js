App.Auth.SignUp = React.createClass({
  submitSignUpForm: function(){
    // TODO: Handle AJAX for submitting a new User
  },
  render: function() {
    return (
        <form>
            <fieldset className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" type="text" id="name"/>
            </fieldset>
            <fieldset className="form-group">
                <label htmlFor="email">Email</label>
                <input className="form-control" type="text" id="email"/>
            </fieldset>
            <fieldset className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" type="password" id="password"/>
            </fieldset>
            <button type="submit" className="btn btn-primary">Sign Up</button>
        </form> 
    );
  }
});