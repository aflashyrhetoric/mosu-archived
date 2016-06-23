App.Views.ApplicationList = React.createClass({
  render: function() {
    var jobAppNodes = this.props.data.map(function(jobApp) {
      return (
        <App.Views.ApplicationItem key={jobApp.id} job_application={jobApp}> 
          { jobApp.phase }
        </App.Views.ApplicationItem>
      );
    });
    return (
      <div className="jobAppList">
        {jobAppNodes}
      </div>
    );
  }
});
