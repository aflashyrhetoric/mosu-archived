App.Views.ApplicationItem = React.createClass({
  getInitialState: function() {
      return {
          data: {
              id: this.props.jobApp.id,
              company: this.props.jobApp.company,
              listing_url: this.props.jobApp.listing_url,
              phase: 'saved',
              location: this.props.jobApp.location,
              expected_salary: this.props.jobApp.expected_salary,
              inside_contact_name: this.props.jobApp.inside_contact_name,
              inside_contact_email: this.props.jobApp.inside_contact_email,
              notes: this.props.jobApp.notes,
              remote: this.props.jobApp.remote
          }
      };
  },
  advanceToNextPhase: function() {
    switch(this.state.phase) {
        case 'saved':
            this.setState({ phase: 'applied' })
            break;
        case 'applied':
            this.setState({ phase: 'interviewing' })
            break;
        case 'interviewing':
            this.setState({ phase: 'offered' })
            break;
        case 'offered':
            this.setState({ phase: 'hired' })
            break;
        case 'hired':
            this.setState({ })
            break;
    }
  },
  showModal: function(){
    $('#modifyApplicationForm' + this.props.jobApp.id).modal('toggle');
  },
  render: function() {
    return (
      <div className="application-item col-sm-6 col-md-3 col-md-offset-s1">
        <div 
        className={"card-panel " + this.state.data.phase}
        onClick={this.showModal}
        >
          	<p> { this.props.jobApp.company } </p>
            <App.Views.ModifyApplicationForm
                jobApp={this.props.jobApp}
                callbackAppSubmit={this.props.callbackAppSubmit}
                />
        </div>
      </div>
    );
  }
});