import React, {Component} from 'react';

class Error extends Component {
	render() {
		let content = (
			<div class="error-message">Error: Whoops looks like something went wrong.</div>
		);

		if (this.props.type == 'OauthTokenError') {
			content = (
				<div className="error-message">
					{this.props.data.service} authentication required:&nbsp;
					<a href={this.props.data.auth_url}>Authenticate now</a>
				</div>
			);
		}

		return (
			<div className={'error error-' + this.props.type.toLowerCase()}>
				{content}
			</div>
		);
	}
}

export default Error;