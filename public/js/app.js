/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// App.js
	// Import all the other stuff.

	// Bootstrap
	__webpack_require__(1);

	// Mosu Auth
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);

	// Mosu Main
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var App = {
		Views: {},
		Auth: {},
		Utils: {}
	};

	$.ajaxSetup({
		timeout: 30000
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	App.Utils.Alert = React.createClass({
	  displayName: "Alert",

	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "alert alert-" + this.props.type, role: "alert" },
	      React.createElement(
	        "strong",
	        null,
	        this.props.emphasisText
	      ),
	      " ",
	      this.props.text
	    );
	  }
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	App.Auth.Navbar = React.createClass({
	  displayName: "Navbar",

	  render: function render() {
	    return React.createElement(
	      "nav",
	      { className: "navbar navbar-default" },
	      React.createElement(
	        "div",
	        { className: "container-fluid" },
	        React.createElement(
	          "div",
	          { className: "navbar-header" },
	          React.createElement(
	            "a",
	            { className: "navbar-brand", href: "#" },
	            React.createElement(
	              "p",
	              { className: "mosu-logo" },
	              "MOSU"
	            )
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	App.Auth.SignUp = React.createClass({
	    displayName: 'SignUp',

	    getInitialState: function getInitialState() {
	        return {
	            name: '',
	            email: '',
	            password: '',
	            error: '',
	            loading: false
	        };
	    },
	    handleNameChange: function handleNameChange(e) {
	        this.setState({ name: e.target.value });
	    },
	    handleEmailChange: function handleEmailChange(e) {
	        this.setState({ email: e.target.value });
	    },
	    handlePasswordChange: function handlePasswordChange(e) {
	        this.setState({ password: e.target.value });
	    },
	    submitSignUpForm: function submitSignUpForm(e) {
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

	        // Call user signup handler on Form.js
	        this.props.handleUserSignup({
	            name: name,
	            email: email,
	            password: password
	        });
	    },
	    render: function render() {
	        var errorBox;
	        if (this.state.error) {
	            errorBox = React.createElement(App.Utils.Alert, {
	                type: 'danger',
	                emphasisText: 'Input invalid.',
	                text: 'Please check messages and try again.'
	            });
	        } else {
	            errorBox = '';
	        }
	        return React.createElement(
	            'form',
	            { onSubmit: this.submitSignUpForm },
	            errorBox,
	            React.createElement(
	                'fieldset',
	                { className: 'form-group' },
	                React.createElement(
	                    'label',
	                    { htmlFor: 'name' },
	                    'Name'
	                ),
	                React.createElement('input', {
	                    value: this.state.name,
	                    onChange: this.handleNameChange,
	                    className: 'form-control', type: 'text', id: 'name' })
	            ),
	            React.createElement(
	                'fieldset',
	                { className: 'form-group' },
	                React.createElement(
	                    'label',
	                    { htmlFor: 'email' },
	                    'Email'
	                ),
	                React.createElement('input', {
	                    value: this.state.email,
	                    onChange: this.handleEmailChange,
	                    className: 'form-control', type: 'text', id: 'email' })
	            ),
	            React.createElement(
	                'fieldset',
	                { className: 'form-group' },
	                React.createElement(
	                    'label',
	                    { htmlFor: 'password' },
	                    'Password'
	                ),
	                React.createElement('input', {
	                    value: this.state.password,
	                    onChange: this.handlePasswordChange,
	                    className: 'form-control', type: 'password', id: 'password' })
	            ),
	            React.createElement(
	                'button',
	                { type: 'submit', className: 'btn btn-primary' },
	                'Sign Up'
	            )
	        );
	    }
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	App.Auth.Login = React.createClass({
	  displayName: 'Login',

	  getInitialState: function getInitialState() {
	    return {
	      email: '',
	      password: '',
	      error: ''
	    };
	  },
	  handleEmailChange: function handleEmailChange(e) {
	    this.setState({ email: e.target.value });
	  },
	  handlePasswordChange: function handlePasswordChange(e) {
	    this.setState({ password: e.target.value });
	  },
	  submitLoginForm: function submitLoginForm(e) {
	    e.preventDefault();
	    var email = this.state.email.trim();
	    var password = this.state.password.trim();

	    // Super basic validation
	    if (!email || !password) {
	      this.setState({ error: "Input wasn't valid. Please try again." });
	      return;
	    }

	    // Call user login handler on Form.js
	    this.props.handleUserLogin({
	      email: email,
	      password: password
	    });
	  },
	  render: function render() {
	    var errorBox;
	    if (this.state.error) {
	      errorBox = React.createElement(App.Utils.Alert, {
	        type: 'danger',
	        emphasisText: 'Input invalid.',
	        text: 'Please check messages and try again.'
	      });
	    } else {
	      errorBox = '';
	    }
	    return React.createElement(
	      'form',
	      { onSubmit: this.submitLoginForm },
	      errorBox,
	      React.createElement(
	        'fieldset',
	        { className: 'form-group' },
	        React.createElement(
	          'label',
	          { htmlFor: 'email' },
	          'Email'
	        ),
	        React.createElement('input', {
	          value: this.state.email,
	          onChange: this.handleEmailChange,
	          className: 'form-control', type: 'text', id: 'email' })
	      ),
	      React.createElement(
	        'fieldset',
	        { className: 'form-group' },
	        React.createElement(
	          'label',
	          { htmlFor: 'password' },
	          'Password'
	        ),
	        React.createElement('input', {
	          value: this.state.password,
	          onChange: this.handlePasswordChange,
	          className: 'form-control', type: 'password', id: 'password' })
	      ),
	      React.createElement(
	        'button',
	        { type: 'submit', className: 'btn btn-primary' },
	        'Login'
	      )
	    );
	  }
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	App.Auth.Form = React.createClass({
	    displayName: 'Form',

	    getInitialState: function getInitialState() {
	        return {
	            newUser: true
	        };
	    },
	    toggleSignUpAndLogin: function toggleSignUpAndLogin() {
	        var toggle = !this.state.newUser;
	        this.setState({ newUser: toggle });
	    },
	    handleUserSignup: function handleUserSignup(newUser) {
	        $.ajax({
	            url: '/api/v1/signup',
	            dataType: 'json',
	            type: 'POST',
	            data: newUser,
	            // Token gets sent. Blank ? Signup : Main
	            beforeSend: function beforeSend(xhr) {
	                var authHeaderText = "Bearer " + localStorage.getItem('api_token');
	                xhr.setRequestHeader('Authorization', authHeaderText);
	            },
	            success: function (data) {
	                // Set false so login renders
	                this.setState({ newUser: false });
	            }.bind(this),
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }.bind(this),
	            complete: function () {
	                this.setState({ loading: false });
	                // Refresh the page
	                window.location.href = "/";
	            }.bind(this)
	        });
	    },
	    handleUserLogin: function handleUserLogin(loginInfo) {
	        // console.log(loginInfo);
	        $.ajax({
	            url: '/api/v1/login',
	            dataType: 'json',
	            type: 'POST',
	            data: loginInfo,
	            success: function (data) {
	                // Save api_key data to localStorage
	                localStorage.setItem('api_token', data);
	            }.bind(this),
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }.bind(this),
	            complete: function () {
	                this.setState({ loading: false });
	                // Refresh the page
	                window.location.href = "/";
	            }.bind(this)
	        });
	    },
	    render: function render() {
	        var formToBeUsed;
	        var headingToBeUsed;
	        var prompt;
	        if (this.state.newUser) {
	            formToBeUsed = React.createElement(App.Auth.Login, { handleUserLogin: this.handleUserLogin });
	            headingToBeUsed = "Login";
	            prompt = ["New to Mosu?", "Sign Up"];
	        } else {
	            formToBeUsed = React.createElement(App.Auth.SignUp, { handleUserSignup: this.handleUserSignup });
	            headingToBeUsed = "Welcome To Mosu!";
	            prompt = ["Already a user?", "Login"];
	        }
	        return React.createElement(
	            'div',
	            { className: ' col-xs-12  col-md-5  col-lg-3 col-lg-offset-3 container__introduction-right tac' },
	            React.createElement(
	                'h1',
	                { className: 'heading__join' },
	                ' ',
	                headingToBeUsed,
	                ' '
	            ),
	            React.createElement(
	                'div',
	                { className: 'auth-signup' },
	                formToBeUsed
	            ),
	            React.createElement('br', null),
	            React.createElement(
	                'p',
	                null,
	                prompt[0] + " ",
	                React.createElement(
	                    'a',
	                    { onClick: this.toggleSignUpAndLogin,
	                        href: '#' },
	                    prompt[1]
	                )
	            )
	        );
	    }
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	App.Views.Auth = React.createClass({
		displayName: "Auth",

		render: function render() {
			return React.createElement(
				"div",
				{ className: "container-fluid container__introduction" },
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(App.Views.Introduction, null),
					React.createElement(App.Auth.Form, null)
				),
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(
						"div",
						{ className: "col-xs-12  col-md-6  col-lg-4 col-lg-offset-1 " },
						React.createElement(
							"h1",
							{ className: "display-4 tac" },
							"Track Your Data"
						),
						React.createElement(
							"ul",
							{ className: "list-group" },
							React.createElement(
								"li",
								{ className: "list-group-item" },
								"Where you applied"
							),
							React.createElement(
								"li",
								{ className: "list-group-item" },
								"What stage the application is in"
							),
							React.createElement(
								"li",
								{ className: "list-group-item" },
								"Your notes on each company"
							),
							React.createElement(
								"li",
								{ className: "list-group-item" },
								"More! Not much more, but still!"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-xs-12  col-md-6 col-md-offset-0 col-lg-4 col-lg-offset-2 " },
						React.createElement(
							"h1",
							{ className: "display-4 tac" },
							"Random Goodies"
						),
						React.createElement(
							"ul",
							{ className: "list-group" },
							React.createElement(
								"li",
								{ className: "list-group-item" },
								"Works on web & mobile!"
							),
							React.createElement(
								"li",
								{ className: "list-group-item" },
								"Quotes for daily inspiration!"
							),
							React.createElement(
								"li",
								{ className: "list-group-item" },
								"Better than pen & paper. Pen & Paper is basic."
							),
							React.createElement(
								"li",
								{ className: "list-group-item" },
								"Built w/ React, Bootstrap & Laravel!"
							)
						)
					)
				),
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(
						"div",
						{ className: "alert alert-info tac" },
						React.createElement(
							"p",
							null,
							"Coded with love by Kevin Oh. Logo by Rebecca Choi."
						)
					)
				)
			);
		}
	});

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	App.Views.Navbar = React.createClass({
	  displayName: "Navbar",

	  // Only checks for existence of token, not actual valid login.
	  basicIsLoggedIn: function basicIsLoggedIn() {
	    if (localStorage.getItem("api_token")) {
	      return true;
	    } else {
	      return false;
	    }
	  },
	  logout: function logout() {
	    localStorage.removeItem("api_token");
	    // Refresh the page
	    window.location.href = "/";
	  },
	  render: function render() {
	    return React.createElement(
	      "nav",
	      { className: "navbar navbar-default" },
	      React.createElement(
	        "div",
	        { className: "container-fluid" },
	        React.createElement(
	          "div",
	          { className: "navbar-header" },
	          React.createElement(
	            "a",
	            { className: "navbar-brand", href: "#" },
	            React.createElement(
	              "p",
	              { className: "mosu-logo" },
	              "MOSU v0.2.0 alpha"
	            )
	          )
	        ),
	        this.basicIsLoggedIn() ? React.createElement(
	          "div",
	          { className: "pull-right" },
	          React.createElement(
	            "a",
	            {
	              onClick: this.logout,
	              className: "btn btn-secondary" },
	            "Logout"
	          )
	        ) : null
	      )
	    );
	  }
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	App.Views.Introduction = React.createClass({
		displayName: "Introduction",


		render: function render() {
			return React.createElement(
				"div",
				{ className: " col-xs-12  col-md-5 col-md-offset-1  col-lg-4 col-lg-offset-1 container__introduction-left tac " },
				React.createElement(
					"h3",
					{ className: "heading__tagline heading__tagline--bold" },
					"Job hunting sucks."
				),
				React.createElement(
					"h3",
					{ className: "heading__tagline" },
					"Mosu makes it suck like 5% less."
				),
				React.createElement("img", { className: "img img__mosu",
					src: "/img/mosu-med.png", alt: "Mosu Logo" })
			);
		}
	});

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	App.Views.NewApplicationForm = React.createClass({
	  displayName: 'NewApplicationForm',

	  getInitialState: function getInitialState() {
	    return {
	      company: '',
	      listing_url: '',
	      phase: 'saved',
	      expected_salary: 0,
	      location: '',
	      inside_contact_name: '',
	      inside_contact_email: '',
	      notes: '',
	      remote: 0
	    };
	  },
	  handleCompanyChange: function handleCompanyChange(e) {
	    this.setState({ company: e.target.value });
	  },
	  handleUrlChange: function handleUrlChange(e) {
	    this.setState({ listing_url: e.target.value });
	  },
	  handlePhaseChange: function handlePhaseChange(e) {
	    this.setState({ phase: e.target.value });
	  },
	  handleSalaryChange: function handleSalaryChange(e) {
	    this.setState({ expected_salary: e.target.value });
	  },
	  handleLocationChange: function handleLocationChange(e) {
	    this.setState({ location: e.target.value });
	  },
	  handleContactNameChange: function handleContactNameChange(e) {
	    this.setState({ inside_contact_name: e.target.value });
	  },
	  handleContactEmailChange: function handleContactEmailChange(e) {
	    this.setState({ inside_contact_email: e.target.value });
	  },
	  handleNotesChange: function handleNotesChange(e) {
	    this.setState({ notes: e.target.value });
	  },
	  handleRemoteChange: function handleRemoteChange(e) {
	    this.setState({ remote: e.target.checked });
	  },
	  handleSubmit: function handleSubmit(e) {
	    e.preventDefault();
	    var company = this.state.company.trim();
	    var listing_url = this.state.listing_url.trim();
	    var phase = this.state.phase.trim();
	    var expected_salary = this.state.expected_salary;
	    var location = this.state.location.trim();
	    var inside_contact_name = this.state.inside_contact_name.trim();
	    var inside_contact_email = this.state.inside_contact_email.trim();
	    var notes = this.state.notes.trim();
	    var remote = this.state.remote;

	    if (!company || !listing_url) {
	      return;
	    }

	    $('#newApplicationForm').modal('toggle');

	    this.props.onNewAppSubmit({
	      company: company,
	      listing_url: listing_url,
	      phase: phase,
	      expected_salary: expected_salary,
	      location: location,
	      inside_contact_name: inside_contact_name,
	      inside_contact_email: inside_contact_email,
	      notes: notes,
	      remote: remote
	    });
	    // Reset State
	    this.setState({
	      company: '',
	      listing_url: '',
	      phase: 'saved',
	      expected_salary: 0,
	      location: '',
	      inside_contact_name: '',
	      inside_contact_email: '',
	      notes: '',
	      remote: false
	    });
	  },
	  capitalizeCompany: function capitalizeCompany(companyName) {
	    return companyName.charAt(0).toUpperCase() + companyName.slice(1);
	  },
	  generateTitle: function generateTitle(companyName) {
	    if (companyName == '') {
	      return 'New Company';
	    } else {
	      return this.capitalizeCompany(this.state.company);
	    }
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'modal fade', id: 'newApplicationForm', tabindex: '-1', role: 'dialog' },
	      React.createElement(
	        'div',
	        { className: 'modal-dialog' },
	        React.createElement(
	          'div',
	          { className: 'modal-content' },
	          React.createElement(
	            'div',
	            { className: 'modal-header' },
	            this.generateTitle(this.state.company)
	          ),
	          React.createElement(
	            'div',
	            { className: 'modal-body' },
	            React.createElement(
	              'form',
	              { className: 'commentForm',
	                onSubmit: this.handleSubmit },
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'label',
	                  { 'for': 'company-input' },
	                  'Company *'
	                ),
	                React.createElement('input', {
	                  className: 'form-control',
	                  type: 'text',
	                  id: 'company-input',
	                  placeholder: 'Adelie, LLC',
	                  value: this.state.company,
	                  onChange: this.handleCompanyChange
	                })
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'label',
	                  { 'for': 'listing-input' },
	                  'Job Listing URL *'
	                ),
	                React.createElement('input', {
	                  className: 'form-control',
	                  type: 'text',
	                  id: 'listing-input',
	                  placeholder: 'http://jobs.com/listing/xxx',
	                  value: this.state.listing_url,
	                  onChange: this.handleUrlChange
	                })
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'label',
	                  { 'for': 'phase-input' },
	                  'Phase *'
	                ),
	                React.createElement(
	                  'select',
	                  {
	                    id: 'phase-input',
	                    className: 'form-control',
	                    onChange: this.handlePhaseChange, value: this.state.phase, name: 'select' },
	                  React.createElement(
	                    'option',
	                    { value: 'saved' },
	                    'Saved'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: 'applied' },
	                    'Applied'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: 'interviewing' },
	                    'Interviewing'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: 'offered' },
	                    'Offered'
	                  )
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'label',
	                  { 'for': 'salary-input' },
	                  'Salary'
	                ),
	                React.createElement('input', {
	                  className: 'form-control',
	                  type: 'text',
	                  id: 'salary-input',
	                  placeholder: '60,000',
	                  value: this.state.expected_salary,
	                  onChange: this.handleSalaryChange
	                })
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'label',
	                  { 'for': 'location-input' },
	                  'Location'
	                ),
	                React.createElement('input', {
	                  className: 'form-control',
	                  type: 'text',
	                  placeholder: 'New York, NY',
	                  value: this.state.location,
	                  onChange: this.handleLocationChange
	                })
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'label',
	                  { 'for': 'contact-name-input' },
	                  'Internal Contact'
	                ),
	                React.createElement('input', {
	                  className: 'form-control',
	                  type: 'text',
	                  id: 'contact-name-input',
	                  placeholder: 'Bob Jones',
	                  value: this.state.inside_contact_name,
	                  onChange: this.handleContactNameChange
	                })
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'label',
	                  { 'for': 'contact-email-input' },
	                  'Internal Contact Email'
	                ),
	                React.createElement('input', {
	                  className: 'form-control',
	                  type: 'text',
	                  id: 'contact-email-input',
	                  placeholder: 'bjones@jobs.com',
	                  value: this.state.inside_contact_email,
	                  onChange: this.handleContactEmailChange
	                })
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'label',
	                  { 'for': 'notes-input' },
	                  'Notes'
	                ),
	                React.createElement('textarea', {
	                  className: 'form-control',
	                  type: 'text',
	                  id: 'notes',
	                  placeholder: 'Notes?',
	                  value: this.state.notes,
	                  onChange: this.handleNotesChange
	                })
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'label',
	                  { 'for': 'remote' },
	                  'Remote'
	                ),
	                React.createElement('input', {
	                  className: 'form-control',
	                  type: 'checkbox',
	                  id: 'remote',
	                  defaultChecked: this.state.remote,
	                  onChange: this.handleRemoteChange
	                })
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement('input', {
	                  className: 'btn btn-primary form-control',
	                  type: 'submit',
	                  value: 'Add New Job' })
	              )
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'modal-footer' },
	            React.createElement(
	              'button',
	              { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
	              'Close'
	            )
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	App.Views.ModifyApplicationForm = React.createClass({
	  displayName: 'ModifyApplicationForm',

	  getInitialState: function getInitialState() {
	    return {
	      id: this.props.jobApp.id,
	      company: this.props.jobApp.company,
	      listing_url: this.props.jobApp.listing_url,
	      phase: this.props.jobApp.phase,
	      location: this.props.jobApp.location,
	      expected_salary: this.props.jobApp.expected_salary,
	      inside_contact_name: this.props.jobApp.inside_contact_name,
	      inside_contact_email: this.props.jobApp.inside_contact_email,
	      notes: this.props.jobApp.notes,
	      remote: this.props.jobApp.remote
	    };
	  },
	  handleCompanyChange: function handleCompanyChange(e) {
	    this.setState({ company: e.target.value });
	    this.props.updateCompanyName(e.target.value);
	  },
	  handleUrlChange: function handleUrlChange(e) {
	    this.setState({ listing_url: e.target.value });
	    this.props.updateListingUrl(e.target.value);
	  },
	  handlePhaseChange: function handlePhaseChange(e) {
	    this.setState({ phase: e.target.value });
	    this.props.updateItemColor(e.target.value);
	  },
	  handleSalaryChange: function handleSalaryChange(e) {
	    this.setState({ expected_salary: e.target.value });
	  },
	  handleLocationChange: function handleLocationChange(e) {
	    this.setState({ location: e.target.value });
	  },
	  handleContactNameChange: function handleContactNameChange(e) {
	    this.setState({ inside_contact_name: e.target.value });
	  },
	  handleContactEmailChange: function handleContactEmailChange(e) {
	    this.setState({ inside_contact_email: e.target.value });
	  },
	  handleNotesChange: function handleNotesChange(e) {
	    this.setState({ notes: e.target.value });
	  },
	  handleRemoteChange: function handleRemoteChange(e) {
	    this.setState({ remote: e.target.checked });
	  },
	  handleSubmit: function handleSubmit(e) {
	    e.preventDefault();
	    var id = this.state.id;
	    // Hide Modal after setting ID
	    $('#modifyApplicationForm' + id).modal('hide');
	    var company = this.state.company.trim();
	    var listing_url = this.state.listing_url.trim();
	    var phase = this.state.phase.trim();
	    var expected_salary = this.state.expected_salary;
	    var location = this.state.location.trim();
	    var inside_contact_name = this.state.inside_contact_name.trim();
	    var inside_contact_email = this.state.inside_contact_email.trim();
	    var notes = this.state.notes.trim();
	    if (this.state.remote) {
	      var remote = 1;
	    } else {
	      var remote = 0;
	    }
	    if (!company || !listing_url) {
	      return;
	    }
	    this.props.callbackAppSubmit({
	      company: company,
	      listing_url: listing_url,
	      phase: phase,
	      expected_salary: expected_salary,
	      location: location,
	      inside_contact_name: inside_contact_name,
	      inside_contact_email: inside_contact_email,
	      notes: notes,
	      remote: remote
	    }, id);
	  },
	  handleDelete: function handleDelete() {
	    var id = this.state.id;
	    // Delete record
	    this.props.handleDelete(id);
	  },
	  capitalizeCompany: function capitalizeCompany(companyName) {
	    return companyName.charAt(0).toUpperCase() + companyName.slice(1);
	  },
	  generateTitle: function generateTitle(companyName) {
	    if (companyName == '') {
	      return 'New Company';
	    } else {
	      return this.capitalizeCompany(this.state.company);
	    }
	  },
	  // closeModal: function(id){
	  //   jQuery('#modifyApplicationForm' + id).on('click', function(){
	  //      jQuery('#modifyApplicationForm' + id).hide();
	  //      jQuery('.modal-backdrop').remove();
	  //   });
	  // },
	  // hideModal: function(){
	  //   $('.open').removeClass('modal-open');
	  //   $('.modal-backdrop').hide();
	  //   $('#modifyApplicationForm' + this.state.id).removeClass("in");
	  //   $('#modifyApplicationForm' + this.state.id).css({ "display": "none", 'padding-left': "0px" });
	  //   console.log(this.state.id);

	  // },
	  render: function render() {
	    return React.createElement(
	      'div',
	      {
	        className: 'modal fade',
	        id: "modifyApplicationForm" + this.props.jobApp.id,
	        tabindex: '-1',
	        role: 'dialog' },
	      React.createElement(
	        'div',
	        { className: 'modal-dialog' },
	        React.createElement(
	          'div',
	          { className: 'modal-content' },
	          React.createElement(
	            'div',
	            { className: 'modal-header' },
	            this.generateTitle(this.state.company)
	          ),
	          React.createElement(
	            'div',
	            { className: 'modal-body' },
	            React.createElement(
	              'form',
	              { className: 'commentForm',
	                onSubmit: this.handleSubmit },
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'label',
	                  { HtmlFor: 'company-input' },
	                  'Company *'
	                ),
	                React.createElement('input', {
	                  className: 'form-control',
	                  type: 'text',
	                  id: 'company-input',
	                  placeholder: 'Adelie, LLC',
	                  value: this.state.company,
	                  onChange: this.handleCompanyChange
	                })
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'label',
	                  { HtmlFor: 'phase-input' },
	                  'Phase *'
	                ),
	                React.createElement(
	                  'select',
	                  {
	                    id: 'phase-input',
	                    className: 'form-control',
	                    onChange: this.handlePhaseChange, value: this.state.phase, name: 'select' },
	                  React.createElement(
	                    'option',
	                    { value: 'saved' },
	                    'Saved'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: 'applied' },
	                    'Applied'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: 'interviewing' },
	                    'Interviewing'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: 'offered' },
	                    'Offered'
	                  )
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement(
	                  'label',
	                  { HtmlFor: 'notes-input' },
	                  'Notes'
	                ),
	                React.createElement('textarea', {
	                  className: 'form-control',
	                  type: 'text',
	                  id: 'notes',
	                  placeholder: 'Notes?',
	                  value: this.state.notes,
	                  onChange: this.handleNotesChange
	                })
	              ),
	              React.createElement(
	                'a',
	                {
	                  href: "#collapsedInfo" + this.props.jobApp.id,
	                  role: 'button', 'data-toggle': 'collapse', 'aria-expanded': 'false',
	                  'aria-controls': "collapsedInfo" + this.props.jobApp.id,
	                  className: 'btn__viewInfo btn btn-info-outline' },
	                'Edit Details'
	              ),
	              React.createElement(
	                'div',
	                { className: 'collapse',
	                  id: "collapsedInfo" + this.props.jobApp.id
	                },
	                React.createElement(
	                  'div',
	                  { className: 'well' },
	                  React.createElement(
	                    'div',
	                    { className: 'form-group' },
	                    React.createElement(
	                      'label',
	                      { HtmlFor: 'listing-input' },
	                      'Job Listing URL *'
	                    ),
	                    React.createElement('input', {
	                      className: 'form-control',
	                      type: 'text',
	                      id: 'listing-input',
	                      placeholder: 'http://jobs.com/listing/xxx',
	                      value: this.state.listing_url,
	                      onChange: this.handleUrlChange
	                    })
	                  ),
	                  React.createElement(
	                    'div',
	                    { className: 'form-group' },
	                    React.createElement(
	                      'label',
	                      { HtmlFor: 'salary-input' },
	                      'Salary'
	                    ),
	                    React.createElement('input', {
	                      className: 'form-control',
	                      type: 'text',
	                      id: 'salary-input',
	                      placeholder: '60,000',
	                      value: this.state.expected_salary,
	                      onChange: this.handleSalaryChange
	                    })
	                  ),
	                  React.createElement(
	                    'div',
	                    { className: 'form-group' },
	                    React.createElement(
	                      'label',
	                      { HtmlFor: 'location-input' },
	                      'Location'
	                    ),
	                    React.createElement('input', {
	                      className: 'form-control',
	                      type: 'text',
	                      placeholder: 'New York, NY',
	                      value: this.state.location,
	                      onChange: this.handleLocationChange
	                    })
	                  ),
	                  React.createElement(
	                    'div',
	                    { className: 'form-group' },
	                    React.createElement(
	                      'label',
	                      { HtmlFor: 'contact-name-input' },
	                      'Internal Contact'
	                    ),
	                    React.createElement('input', {
	                      className: 'form-control',
	                      type: 'text',
	                      id: 'contact-name-input',
	                      placeholder: 'Bob Jones',
	                      value: this.state.inside_contact_name,
	                      onChange: this.handleContactNameChange
	                    })
	                  ),
	                  React.createElement(
	                    'div',
	                    { className: 'form-group' },
	                    React.createElement(
	                      'label',
	                      { HtmlFor: 'contact-email-input' },
	                      'Internal Contact Email'
	                    ),
	                    React.createElement('input', {
	                      className: 'form-control',
	                      type: 'text',
	                      id: 'contact-email-input',
	                      placeholder: 'bjones@jobs.com',
	                      value: this.state.inside_contact_email,
	                      onChange: this.handleContactEmailChange
	                    })
	                  ),
	                  React.createElement(
	                    'div',
	                    { className: 'form-group' },
	                    React.createElement(
	                      'label',
	                      { HtmlFor: 'remote' },
	                      'Remote'
	                    ),
	                    React.createElement('input', {
	                      className: 'form-control',
	                      type: 'checkbox',
	                      id: 'remote',
	                      checked: this.state.remote,
	                      onChange: this.handleRemoteChange
	                    })
	                  )
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement('input', {
	                  className: 'btn btn-primary btn-lg form-control',
	                  type: 'submit',
	                  value: 'Update' })
	              )
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'modal-footer' },
	            React.createElement(
	              'button',
	              {
	                type: 'button',
	                'data-dismiss': 'modal',
	                style: { float: 'left' },
	                onClick: this.handleDelete,
	                className: 'btn btn-danger' },
	              'Delete'
	            ),
	            React.createElement(
	              'button',
	              {
	                type: 'button',
	                'data-dismiss': 'modal',
	                className: 'btn btn-primary' },
	              'Close'
	            )
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	App.Views.InspirationBox = React.createClass({
	  displayName: "InspirationBox",

	  randomIndex: function randomIndex(quoteBoxSize) {
	    return Math.floor(Math.random() * quoteBoxSize + 1);
	  },
	  getQuote: function getQuote() {
	    var quotes = [{
	      quote: "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.",
	      author: "Elbert Hubbard"
	    }, {
	      quote: "Success is the result of perfection, hard work, learning from failure, loyalty, and persistence. ",
	      author: "Colin Powell"
	    }, {
	      quote: "Paralyze resistance with persistence.",
	      author: "Woody Hayes"
	    }, {
	      quote: "Quantity and persistence will get you the outcomes you need.",
	      author: "James Altucher"
	    }, {
	      quote: "Choose a job you love, and you will never have to work a day in your life.",
	      author: "Confucius"
	    }, {
	      quote: "The beginning is the most important part of the work.",
	      author: "Plato"
	    }, {
	      quote: "Opportunities are usually disguised as hard work, so most people don't recognize them.",
	      author: "Ann Landers"
	    }, {
	      quote: "“One important key to success is self-confidence. An important key to self-confidence is preparation.”",
	      author: "Arthur Ashe"
	    }, {
	      quote: "Success consists of going from failure to failure without loss of enthusiasm.",
	      author: "Winston Churchill"
	    }, {
	      quote: "Do one thing everyday that scares you.",
	      author: "Eleanor Roosevelt"
	    }, {
	      quote: "Take risks: if you win, you will be happy; if you lose, you will be wise.",
	      author: "Unknown"
	    }, {
	      quote: "Only those who dare to fail greatly can ever achieve greatly.",
	      author: "Robert F. Kennedy"
	    }, {
	      quote: "Whenever you are asked if you can do a job, tell ‘em, ‘Certainly I can!’ Then get busy and find out how to do it.",
	      author: "Theodore Roosevelt"
	    }];

	    var randomNumber = this.randomIndex(quotes.length);
	    var quote = quotes[randomNumber].quote;
	    var author = quotes[randomNumber].author;

	    return {
	      quote: quote,
	      author: author
	    };
	  },
	  componentDidMount: function componentDidMount() {},
	  render: function render() {
	    var quote = this.getQuote();
	    return React.createElement(
	      "div",
	      { className: "inspiration-box jumbotron" },
	      React.createElement(
	        "p",
	        { className: "quote-text" },
	        quote.quote
	      ),
	      React.createElement(
	        "p",
	        { className: "quote-author" },
	        quote.author
	      )
	    );
	  }
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	App.Views.ApplicationItem = React.createClass({
	  displayName: 'ApplicationItem',

	  getInitialState: function getInitialState() {
	    return {
	      company: this.props.jobApp.company,
	      listing_url: this.props.jobApp.listing_url,
	      phase: this.props.jobApp.phase
	    };
	  },
	  updateCompanyName: function updateCompanyName(newCompanyName) {
	    // var job_applications = this.state.data;
	    this.setState({ company: newCompanyName });
	  },
	  updateListingUrl: function updateListingUrl(newUrl) {
	    this.setState({ listing_url: newUrl });
	  },
	  showModal: function showModal() {
	    $('#modifyApplicationForm' + this.props.jobApp.id).modal('toggle');
	  },
	  updateItemColor: function updateItemColor(newPhase) {
	    this.setState({ phase: newPhase });
	  },
	  render: function render() {
	    // Set snippet
	    if (this.props.jobApp.notes.length == 0) {
	      var snippet = String.fromCharCode('U+00A0');
	    } else {
	      var snippet = this.props.jobApp.notes.substring(0, 24) + " (...)";
	    }
	    return React.createElement(
	      'div',
	      { className: 'application-item col-xs-12 col-sm-6 col-md-6 col-lg-4' },
	      React.createElement(
	        'div',
	        {
	          className: "card card-block " + this.state.phase },
	        React.createElement(
	          'h4',
	          { className: 'card-title' },
	          ' ',
	          this.state.company,
	          ' '
	        ),
	        React.createElement(
	          'p',
	          { className: 'card-text' },
	          snippet
	        ),
	        React.createElement(
	          'a',
	          { className: 'btn btn_viewListing btn-secondary', target: '_blank', href: this.state.listing_url },
	          ' View Listing '
	        ),
	        React.createElement(
	          'button',
	          { type: 'button', onClick: this.showModal, className: 'btn btn-secondary' },
	          'Manage'
	        ),
	        React.createElement(App.Views.ModifyApplicationForm, {
	          jobApp: this.props.jobApp,
	          callbackAppSubmit: this.props.callbackAppSubmit,
	          handleDelete: this.props.handleDelete,
	          updateCompanyName: this.updateCompanyName,
	          updateListingUrl: this.updateListingUrl,
	          showModal: this.showModal,
	          updateItemColor: this.updateItemColor
	        })
	      )
	    );
	  }
	});

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	App.Views.ApplicationList = React.createClass({
	  displayName: 'ApplicationList',

	  render: function render() {
	    var callbackAppSubmit = this.props.callbackAppSubmit;
	    var handleDelete = this.props.handleDelete;
	    var jobAppNodes = this.props.data.map(function (jobApp) {
	      return React.createElement(
	        App.Views.ApplicationItem,
	        {
	          key: jobApp.id,
	          jobApp: jobApp,
	          handleDelete: handleDelete,
	          callbackAppSubmit: callbackAppSubmit },
	        jobApp.phase
	      );
	    });
	    var plural = jobAppNodes.length == 0 || jobAppNodes.length > 1 ? 's' : '';

	    return React.createElement(
	      'div',
	      { className: ' application-list row  col-sm-12 col-md-l2 col-lg-12 ' },
	      React.createElement(
	        'div',
	        { className: 'card card-block tac' },
	        React.createElement(
	          'h2',
	          { className: 'card-title' },
	          ' ',
	          jobAppNodes.length,
	          ' Active Application',
	          plural
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'application-item col col-sm-6 col-md-6 col-lg-4' },
	        React.createElement(
	          'div',
	          {
	            className: 'card card-block add-new-job-app' },
	          React.createElement(
	            'p',
	            { className: 'card-text' },
	            'Whatcha waiting for?'
	          ),
	          React.createElement(
	            'button',
	            { type: 'button', className: 'btn btn-primary', 'data-toggle': 'modal', 'data-target': '#newApplicationForm' },
	            '+ Add New Application'
	          )
	        )
	      ),
	      React.createElement(App.Views.NewApplicationForm, {
	        onNewAppSubmit: this.props.onNewAppSubmit
	      }),
	      jobAppNodes.reverse()
	    );
	  }
	});

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	App.Views.Mosu = React.createClass({
		displayName: 'Mosu',

		getInitialState: function getInitialState() {
			return {
				loading: false,
				error: null,
				ajaxError: null,
				data: []
			};
		},
		loadJobAppDataFromServer: function loadJobAppDataFromServer() {
			this.setState({ loading: true });
			$.ajax({
				url: this.props.url,
				dataType: 'json',
				cache: false,
				beforeSend: function beforeSend(xhr) {
					var authHeaderText = "Bearer " + localStorage.getItem('api_token');
					xhr.setRequestHeader('Authorization', authHeaderText);
				},
				success: function (data) {
					if (typeof data.error !== 'undefined') {
						this.setState({ error: data.error });
					} else {
						this.setState({ data: data, ajaxError: null });
					}
				}.bind(this),
				error: function (xhr, status, err) {
					this.setState({ ajaxError: err.toString() });
					console.error(this.props.url, status, err.toString());
				}.bind(this),
				complete: function () {
					this.setState({ loading: false });
					setTimeout(this.loadJobAppDataFromServer, this.props.pollInterval);
				}.bind(this)
			});
		},
		handleNewApplicationSubmit: function handleNewApplicationSubmit(jobApplication) {
			// If current state is empty
			if (this.state.data) {
				var job_applications = [];
			} else {
				var job_applications = this.state.data;
			}
			// Optimistically set an id on the new comment. It will be replaced by an
			// id generated by the server. In a production application you would likely
			// not use Date.now() for this and would have a more robust system in place.
			jobApplication.id = Date.now();
			var new_job_applications = job_applications.concat([jobApplication]);
			this.setState({ data: new_job_applications });
			$.ajax({
				url: this.props.url,
				dataType: 'json',
				type: 'POST',
				data: jobApplication,
				beforeSend: function beforeSend(xhr) {
					var authHeaderText = "Bearer " + localStorage.getItem('api_token');
					xhr.setRequestHeader('Authorization', authHeaderText);
				},
				success: function (data) {
					// "data" here is the API response success code, not the app data
					// Uncommenting the line below will cause strange edge case behavior
					// this.setState({ data: data});
					console.log(data);
				}.bind(this),
				error: function (xhr, status, err) {
					console.error(this.props.url, status, err.toString());
				}.bind(this),
				complete: function () {
					this.loadJobAppDataFromServer();
				}.bind(this)
			});
		},
		handleModifyApplicationSubmit: function handleModifyApplicationSubmit(jobApplication, id) {
			$.ajax({
				url: this.props.url + '/update/' + id,
				dataType: 'json',
				type: 'POST',
				data: jobApplication,
				success: function (data) {
					this.setState({ data: data });
				}.bind(this),
				error: function (xhr, status, err) {
					console.error(this.props.url, status, err.toString());
				}.bind(this)
			});
		},
		handleDelete: function handleDelete(id) {
			$.ajax({
				url: this.props.url + '/delete/' + id,
				type: 'POST',
				success: function (data) {
					// If we just deleted the last item, remove it.
					if (this.state.data.length == 1) {
						this.setState({ data: [] });
					}
					// Otherwise, just update with new list.
					else {
							console.log(this.state.data);
							console.log(data);
							this.loadJobAppDataFromServer();
						}
				}.bind(this),
				error: function (xhr, status, err) {
					console.error(this.props.url, status, err.toString());
				}.bind(this)
			});
			if (this.state.data.length == 1) {
				var job_applications = [];
			} else {
				var job_applications = this.state.data;
			}
		},
		// When component is loaded successfully
		componentDidMount: function componentDidMount() {
			this.loadJobAppDataFromServer();
		},
		componentDidUpdate: function componentDidUpdate() {
			// var updated_job_list = this.state.data;
			// this.setState({ data: updated_job_list })
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'container__mosu container' },
				React.createElement(App.Views.ApplicationList, {
					data: this.state.data,
					callbackAppSubmit: this.handleModifyApplicationSubmit,
					onNewAppSubmit: this.handleNewApplicationSubmit,
					handleDelete: this.handleDelete
				})
			);
		}
	});

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	(function (App) {

		App.Views.Error = React.createClass({
			displayName: "Error",

			render: function render() {
				var content = React.createElement(
					"div",
					{ "class": "error-message" },
					"Error: Whoops looks like something went wrong."
				);

				if (this.props.type == 'OauthTokenError') {
					content = React.createElement(
						"div",
						{ className: "error-message" },
						this.props.data.service,
						" authentication required:\xA0",
						React.createElement(
							"a",
							{ href: this.props.data.auth_url },
							"Authenticate now"
						)
					);
				}

				return React.createElement(
					"div",
					{ className: 'error error-' + this.props.type.toLowerCase() },
					content
				);
			}
		});
	})(App);

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	var page;
	var hasToken;
	// If API_TOKEN is undefined, display login
	if (!localStorage.getItem("api_token")) {
		page = React.createElement(App.Views.Auth, null);
		hasToken = true;
	} else {
		// page = <App.Views.Auth />
		page = React.createElement(App.Views.Mosu, {
			url: "/api/v1/jobapplications",
			pollInterval: "2000" });
	}
	ReactDOM.render(React.createElement(
		"div",
		null,
		React.createElement(App.Views.Navbar, null),
		!hasToken ? React.createElement(
			"div",
			{ className: "container__mosu" },
			React.createElement(App.Views.InspirationBox, null)
		) : null,
		page
	), document.getElementById('app'));

/***/ }
/******/ ]);