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
      <div className="
      application-list row 
      col-sm-12 col-md-l2 col-lg-12
      ">
        <div className="application-item col col-sm-6 col-md-3 col-md-offset-s3">
            <div className="card-panel small grey hover add-new-job-app">
                <p> + Add Application</p>
            </div>
        </div>
        {jobAppNodes}
      </div>
    );
  }
});
