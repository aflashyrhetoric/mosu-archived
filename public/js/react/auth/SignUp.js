App.Auth.SignUp = React.createClass({
    getInitialState: function(){
      return {
          name: '',
          email: '',
          password: '',
          error: '',
          loading: false
      };
    },
    handleNameChange: function(e) {
        this.setState({ name: e.target.value});
    },
    handleEmailChange: function(e) {
        this.setState({ email: e.target.value});
    },   
    handlePasswordChange: function(e) {
        this.setState({ password: e.target.value});
    },   
    submitSignUpForm: function(e){
        e.preventDefault();
        // "Processing"
        this.setState({ loading: true });
        // Trim user inputs
        var name = this.state.name.trim();
        var email = this.state.email.trim();
        var password = this.state.password;

        // Super basic validation
        if (!name || !email || !password) {
            this.setState({ error: "Input wasn't valid. Please try again." });
            return;
        }

        this.props.handleNewUserSubmit({
            name: name,
            email: email,
            password: password
        });

    },
    render: function() {
    var errorBox;
    if(this.state.error){
        errorBox = <App.Utils.Alert 
                       type="danger" 
                       emphasisText="Input invalid." 
                       text="Please check messages and try again."
                   />;
    } else {
        errorBox = '';
    }
    return (
        <form onSubmit={ this.submitSignUpForm} >
            {/* Conditionally display error messages */}
            { errorBox }
            <fieldset className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                value={this.state.name}
                onChange={this.handleNameChange}
                className="form-control" type="text" id="name"/>
            </fieldset>
            <fieldset className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                value={this.state.email}
                onChange={this.handleEmailChange}
                className="form-control" type="text" id="email"/>
            </fieldset>
            <fieldset className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                value={this.state.password}
                onChange={this.handlePasswordChange}
                className="form-control" type="password" id="password"/>
            </fieldset>
            <button type="submit" className="btn btn-primary">Sign Up</button>
        </form> 
    );
  }
});