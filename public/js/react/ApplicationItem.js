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
      <div className="application-item col-xs-12 col-sm-6 col-md-3 col-md-offset-s1">
        <div
        className={"card-panel " + this.state.phase }>
            {/* Card Title: Company */}
          	<h4> { this.state.company } </h4>
            <button type="button" onClick={this.showModal} className="btn btn-default">Manage</button>

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