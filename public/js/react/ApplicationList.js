App.Views.ApplicationList = React.createClass({
  render: function() {
    var callbackAppSubmit = this.props.callbackAppSubmit;
    var jobAppNodes = this.props.data.map(function(jobApp) {
    return  (
        <App.Views.ApplicationItem 
          key={jobApp.id} 
          job_application={jobApp}
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
        <div className="panel panel-default tac">
          <div className="panel-body">
            <h2>Active Applications</h2>
          </div>
        </div>
        <div className="application-item col col-sm-6 col-md-3 col-md-offset-s3">
            <div className="card-panel small grey hover add-new-job-app">
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#newApplicationForm">
               + Add New Application 
              </button>
            </div>
        </div>
        {jobAppNodes}
      </div>
    );
  }
});
