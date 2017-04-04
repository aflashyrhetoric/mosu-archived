App.Views.ApplicationList = React.createClass({
  render: function() {
    let callbackAppSubmit = this.props.callbackAppSubmit;
    let handleDelete = this.props.handleDelete;
    let jobAppNodes = this.props.data.map(function(jobApp) {
      return  (
        <App.Views.ApplicationItem 
          key={jobApp.id} 
          jobApp={jobApp}
          handleDelete= { handleDelete }
          callbackAppSubmit={ callbackAppSubmit }> 
          { jobApp.phase }
        </App.Views.ApplicationItem>
      );
    });
    let plural = (jobAppNodes.length == 0 || jobAppNodes.length > 1) ? 's' : ''

    return (
      <div className="
      application-list row 
      col-sm-12 col-md-l2 col-lg-12
      ">
        {/* Heading */}
        <div className="card card-block tac">
            <h2 className="card-title"> { jobAppNodes.length } Active Application{plural}</h2>
        </div>

        { /* Job Application Item */ }
        <div className="application-item col col-sm-6 col-md-6 col-lg-4">
            <div
            className="card card-block add-new-job-app">
                  <p className="card-text">Whatcha waiting for?</p>
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#newApplicationForm">
                  + Add New Application
                  </button>
            </div>
        </div>
        <App.Views.NewApplicationForm 
            onNewAppSubmit={this.props.onNewAppSubmit}
            />

        {/* Render application list with newest jobs first */}
        {jobAppNodes.reverse()}
      </div>
    );
  }
});
