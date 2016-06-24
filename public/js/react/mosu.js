(function(App) {

	App.Views.Mosu = React.createClass({
		loadJobAppDataFromServer: function() {
			this.setState({loading: true});
			$.ajax({
				url: this.props.url,
				dataType: 'json',
				cache: false,
				success: function(data) {
					if (typeof data.error !== 'undefined') {
						this.setState({error: data.error});
					} else {
						this.setState({data: data, ajaxError: null});
					}
				}.bind(this),
				error: function(xhr, status, err) {
					this.setState({ajaxError: err.toString()});
					console.error(this.props.url, status, err.toString());
				}.bind(this),
				complete: function() {
					this.setState({loading: false});
					// setTimeout(this.functionYouWantToRepeat, this.props.pollInterval);
				}.bind(this)
			});
		},
		handleApplicationSubmit: function(jobApplication) {
	        $.ajax({
		      url: 'http://mosu.dev:8000/api/v1/jobapplications/newApp',
		      dataType: 'json',
		      type: 'POST',
		      data: jobApplication,
		      success: function(data) {
		        this.setState({data: data});
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
		    });
		},
		getInitialState: function() {
			return {
				loading: false,
				error: null,
				ajaxError: null,
				data: []
			};
		},
		// When component is loaded successfully
		componentDidMount: function() {
			this.loadJobAppDataFromServer();
		},
		render: function() {
			return (
				<div className="mosu-container container">
					<App.Views.InspirationBox />
					<App.Views.ApplicationList 
						data={ this.state.data } 
						callbackNewAppSubmit={ this.handleApplicationSubmit }
					/>
				</div>
			);
		}
	});
})(App);