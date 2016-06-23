(function(App) {

	App.Views.Slack = React.createClass({
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
		getInitialState: function() {
			return {
				loading: false,
				error: null,
				ajaxError: null,
				data: []
			};
		},
		componentDidMount: function() {
			this.loadJobAppDataFromServer();
		},
		render: function() {
			var loading;
			if (this.state.loading) {
				loading = <div className="box-loading"><i className="fa fa-spinner fa-spin"></i></div>
			}
			if (this.state.ajaxError) {
				loading = <div className="box-ajax-error"><i className="fa fa-exclamation-triangle" title={this.state.ajaxError}></i></div>
			}

			if (this.state.error) {
				return (
					<div className="slack-status box box-has-error">
						{loading}
						<App.Views.Error type={this.state.error.type} data={this.state.error.data} />
					</div>
				);
			}

			return (
				<div className="mosu-app box">
					// Render 'loading' variable, which is a div thing
					{loading}
					<ul className="application-list">
						{hours}
					</ul>
				</div>
			);
		}
	});

	App.Views.Slack.Hour = React.createClass({
		render: function() {
			var users = this.props.users.map(function(user) {
				return (
					<App.Views.Slack.User key={user.id} user={user} />
				);
			});
			return (
				<li className={'slack-hour slack-hour-' + this.props.hour + ' total-' + (this.props.users.length > 4 ? 'multiple' : this.props.users.length)}>
					{users}
				</li>
			);
		}
	});

	App.Views.Slack.User = React.createClass({
		render: function() {
			return (
				<div className={'slack-user status-' + this.props.user.presence}>
					<img src={this.props.user.profile.image_48} alt="" />
					<div className="slack-user-status" title={this.props.user.presence}></div>
					<div className="slack-user-info">
						<span className="slack-user-name">{this.props.user.real_name ? this.props.user.real_name : this.props.user.name}</span>
						<span className="slack-user-local-time">Local time: {this.props.user.local_time}:00</span>
					</div>
				</div>
			);
		}
	});

})(App);