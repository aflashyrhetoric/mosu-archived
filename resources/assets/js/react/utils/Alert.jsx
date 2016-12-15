import React from 'react';

export default class Alert extends React.Component {
  render() {
    return (
      <div className={"alert alert-" + this.props.type} role="alert">
		  <strong>{ this.props.emphasisText }</strong> {this.props.text}
		</div>
    );
  }
}