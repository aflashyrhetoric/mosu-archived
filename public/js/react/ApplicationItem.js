App.Views.ApplicationItem = React.createClass({
  getInitialState: function() {
      return {
          data: {
              company: '',
              listing_url: '',
              phase: 'saved',
              expected_salary: 0,
              location: '',
              inside_contact_name: '',
              inside_contact_email: '',
              notes: '',
              remote: false
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
  handleClick: function(){

  },
  render: function() {
    return (
      <div className="application-item col-sm-6 col-md-3 col-md-offset-s1">
        <div 
        className={"card-panel " + this.state.data.phase}
        onClick={this.handleClick}
        >
          	<p> { this.props.job_application.company } </p>
            <App.Views.ModifyApplicationForm 
                job_application={this.props.job_application} 
                callbackAppSubmit={this.props.callbackAppSubmit}
                />
        </div>
      </div>
    );
  }
});