
// Initialize the app via SIAF with final Render statement.

(function(App) {

	ReactDOM.render(
		(
			<div>
				<App.Views.Mosu url="/api/v1/jobapplications" myUserId={2}/>
			</div>
		),
		document.getElementById('app')
	);
})(App);