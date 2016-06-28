// Initialize the app via SIAF with final Render statement.

(function(App) {
	ReactDOM.render(
		(
			<div className="container">
				<App.Auth.Navbar />
				<div className="row">
					<div className="col-xs-12 col-md-4 col-md-offset-4 tac">
						<h1>Sign Up</h1>
						<p>To use Mosu, please sign up.</p>
					</div>
				</div>

				<App.Auth.Form />
			</div>
		),
		document.getElementById('auth')
	);
})(App);