App.Views.ApplicationItem = React.createClass({
  render: function() {
    return (
      <div className="application-item col-sm-6 col-md-3 col-md-offset-s1">
        <div className="card-panel">
          	<p className="flow-text"> { this.props.job_application.company } </p>
        </div>
      </div>
    );
  }
});