App.Views.Auth = React.createClass({
	render: function(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-4 col-md-offset-4 tac">
						<h1>Mosu</h1>
					</div>
				</div>

				<App.Auth.Form />
			</div>
		);
	}
});
