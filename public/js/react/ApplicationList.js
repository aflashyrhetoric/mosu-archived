App.Views.ApplicationList = React.createClass({
  render: function() {
    var callbackAppSubmit = this.props.callbackAppSubmit;
    var all_job_applications = this.props.responseData;
    var jobAppNodes = this.props.responseData.map(function(jobApp) {
    return  (
        <App.Views.ApplicationItem 
          key={jobApp.id} 
          all_job_applications={all_job_applications}
          jobApp={jobApp}
          callbackAppSubmit={ callbackAppSubmit }
        > 
          { jobApp.phase }
        </App.Views.ApplicationItem>
      );
    });

    return (
      <div className="
      application-list row 
      col-sm-12 col-md-l2 col-lg-12
      ">
        {/* Heading */}
        <div className="panel panel-default tac">
          <div className="panel-body">
            <h2>Active Applications</h2>
          </div>
        </div>

        { /* Job Application Item */ }
        <div className="application-item col col-sm-6 col-md-3 col-md-offset-s3">
            {/* + Add New Button */}
            <div className="card-panel small grey hover add-new-job-app">
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#newApplicationForm">
               + Add New Application 
              </button>
            </div>
        </div>
        {/* Render application list */}
        {jobAppNodes}
      </div>
    );
  }
});
