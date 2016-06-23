App.Views.ApplicationItem = React.createClass({
  render: function() {
    return (
      <div className="application-item">
      	<h1> { this.props.job_application.company } </h1>
      </div>
    );
  }
});