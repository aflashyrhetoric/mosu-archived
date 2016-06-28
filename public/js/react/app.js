
// Initialize the app via SIAF with final Render statement.

(function(App) {
	ReactDOM.render(
		(
			<div>
				<App.Views.Navbar />
				<App.Views.Mosu url="/api/v1/jobapplications/3" pollInterval="2000" />
			</div>
		),
		document.getElementById('app')
	);
})(App);