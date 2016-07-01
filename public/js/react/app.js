// Start App

(function(App) {
	var page;
	var hasToken;
	// If API_TOKEN is undefined, display login
	if (! localStorage.getItem("api_token")) {
		page = <App.Views.Auth />
		hasToken = true;
	} else {
		// page = <App.Views.Auth />
		page = 	<App.Views.Mosu 
					url="/api/v1/jobapplications" 
					pollInterval="2000" /> 
	}
	ReactDOM.render(
		(
			<div>
				<App.Views.Navbar />
				{ page }
			</div>
		),
		document.getElementById('app')
	);
})(App);