App.Views.ModifyApplicationForm = React.createClass({
    getInitialState: function() {
      return {
          company: this.props.job_application.company,
          listing_url: '',
          phase: 'saved',
          location: '',
          inside_contact_name: '',
          inside_contact_email: '',
          notes: '',
          remote: false
      };
    },
    handleCompanyChange: function(e) {
        this.setState({ company: e.target.value});
    },
    handleUrlChange: function(e) {
        this.setState({ listing_url: e.target.value});
    },   
    handlePhaseChange: function(e) {
        this.setState({ phase: e.target.value});
    },   
    handleSalaryChange: function(e) {
        this.setState({ listing_salary: e.target.value});
    },    
    handleLocationChange: function(e) {
        this.setState({ location: e.target.value});
    },    
    handleContactNameChange: function(e) {
        this.setState({ inside_contact_name: e.target.value});
    },    
    handleContactEmailChange: function(e) {
        this.setState({ inside_contact_email: e.target.value});
    }, 
    handleNotesChange: function(e) {
        this.setState({ notes: e.target.value});
    },      
    handleRemoteChange: function(e) {
        this.setState({ remote: e.target.value});
    },      
    handleSubmit: function(e) {
        e.preventDefault();
        var company = this.state.company.trim();
        var listing_url = this.state.listing_url.trim();
        var phase = this.state.phase.trim();
        var expected_salary = this.state.phase.trim();
        var location = this.state.location.trim();
        var inside_contact_name = this.state.inside_contact_name.trim();
        var inside_contact_email = this.state.inside_contact_email.trim();
        var notes = this.state.notes.trim();
        var remote = this.state.remote;

        if (!company || !listing_url) {
          return;
        }

        $('#modifyApplicationForm').modal('toggle');

        this.props.callbackAppSubmit({
            company: company,
            listing_url: listing_url,
            phase: phase,
            expected_salary: expected_salary,
            location: location,
            inside_contact_name: inside_contact_name, 
            inside_contact_email: inside_contact_email,
            notes: notes,
            remote: remote,
            user_id: 3
        });
        // Reset State
        this.setState({
            company: '',
            listing_url: '',
            phase: 'saved',
            expected_salary: 0,
            location: '',
            inside_contact_name: '',
            inside_contact_email: '',
            notes: '',
            remote: false
        });
  },
    render: function() {
        return (
            <div className="modal fade" id="modifyApplicationForm" tabindex="-1" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    { this.state.company }
                  </div>
                  <div className="modal-body">
                      <form className="commentForm" 
                      onSubmit={this.handleSubmit} >
                        <input
                          type="text"
                          placeholder="Adelie, LLC"
                          value={this.state.company}
                          onChange={this.handleCompanyChange }
                        />
                        <input
                          type="text"
                          placeholder="http://jobs.com/listing/xxx"
                          value={this.state.listing_url}
                          onChange={this.handleUrlChange }
                        />
                        <input
                          type="text"
                          placeholder="60,000"
                          value={this.state.expected_salary}
                          onChange={this.handleSalaryChange }
                        />
                        <input
                          type="text"
                          placeholder="New York, NY"
                          value={this.state.location}
                          onChange={this.handleLocationChange }
                        />
                        <input
                          type="text"
                          placeholder="Bob Jones"
                          value={this.state.inside_contact_name}
                          onChange={this.handleContactNameChange }
                        />
                        <input
                          type="text"
                          placeholder="bjones@jobs.com"
                          value={this.state.inside_contact_email}
                          onChange={this.handleContactEmailChange }
                        />
                        <input
                          type="textarea"
                          placeholder="Notes?"
                          value={this.state.notes}
                          onChange={this.handleNotesChange }
                        />
                        <input
                          type="checkbox"
                          value={this.state.remote}
                          onChange={this.handleRemoteChange }
                        />
                        <input className="btn btn-default" type="submit" value="Post" />
                      </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
    );
  }
});