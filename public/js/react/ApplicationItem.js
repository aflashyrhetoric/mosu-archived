App.Views.ApplicationItem = React.createClass({
  getInitialState: function() {
      return {
         company: this.props.jobApp.company  
      };
  },
  updateCompanyName: function(newCompanyName){
    var job_applications = this.state.data;
    this.setState({ company: newCompanyName });
  },
  showModal: function(){
    $('#modifyApplicationForm' + this.props.jobApp.id).modal('show');
  },
  render: function() {
    return (
      <div className="application-item col-xs-12 col-sm-6 col-md-3 col-md-offset-s1">
        <div 
        className={"card-panel " + this.props.jobApp.phase}
        data-toggle="modal"
        data-target={"#modifyApplicationForm" + this.props.jobApp.id}
        >
            {/* Card Title: Company */}
          	<p> { this.state.company } </p>

            <App.Views.ModifyApplicationForm
                jobApp={this.props.jobApp}
                callbackAppSubmit={this.props.callbackAppSubmit}
                updateCompanyName={ this.updateCompanyName }
                />
        </div>
      </div>
    );
  }
});