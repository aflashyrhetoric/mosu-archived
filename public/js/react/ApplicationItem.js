App.Views.ApplicationItem = React.createClass({
  getInitialState: function() {
      return {
         company: this.props.jobApp.company,
         phase: this.props.jobApp.phase  
      };
  },
  updateCompanyName: function(newCompanyName){
    var job_applications = this.state.data;
    this.setState({ company: newCompanyName });
  },
  showModal: function(){
    $('#modifyApplicationForm' + this.props.jobApp.id).modal('toggle');
  },
  updateItemColor: function(newPhase){
    this.setState({ phase: newPhase})
  },
  render: function() {
    return (
      <div className="application-item col-xs-12 col-sm-6 col-md-6 col-lg-3">
        <div
        className={"card card-block " + this.state.phase }>
            {/* Card Title: Company */}
          	<h4 className="card-title"> { this.state.company } </h4>
            <p className="card-text"><a href={this.props.jobApp.listing_url}>Job Listing {this.props.jobApp.id} </a></p>
            <button type="button" onClick={this.showModal} className="btn btn-secondary">Manage</button>

            <App.Views.ModifyApplicationForm
                jobApp={this.props.jobApp}
                callbackAppSubmit={this.props.callbackAppSubmit}
                updateCompanyName={ this.updateCompanyName }
                showModal={ this.showModal }
                updateItemColor={this.updateItemColor}
                />
        </div>
      </div>
    );
  }
});