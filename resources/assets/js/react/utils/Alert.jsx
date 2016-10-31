App.Utils.Alert = React.createClass({
  render: function() {
    return (
      <div className={"alert alert-" + this.props.type} role="alert">
		  <strong>{ this.props.emphasisText }</strong> {this.props.text}
		</div>
    );
  }
});