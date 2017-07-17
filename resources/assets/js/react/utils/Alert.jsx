import React, {Component} from 'react';

class Alert extends Component {
  render() {
    return (
      <div className={"alert alert-" + this.props.type} role="alert">
		  <strong>{ this.props.emphasisText }</strong> {this.props.text}
		</div>
    );
  }
}

export default Alert;