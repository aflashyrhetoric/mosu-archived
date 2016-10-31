App.Views.NewApplicationForm = React.createClass({
    getInitialState: function() {
      return {
          company: '',
          listing_url: '',
          phase: 'saved',
          expected_salary: 0,
          location: '',
          inside_contact_name: '',
          inside_contact_email: '',
          notes: '',
          remote: 0
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
        this.setState({ expected_salary: e.target.value});
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
        this.setState({ remote: e.target.checked });
    },      
    handleSubmit: function(e) {
        e.preventDefault();
        var company = this.state.company.trim();
        var listing_url = this.state.listing_url.trim();
        var phase = this.state.phase.trim();
        var expected_salary = this.state.expected_salary;
        var location = this.state.location.trim();
        var inside_contact_name = this.state.inside_contact_name.trim();
        var inside_contact_email = this.state.inside_contact_email.trim();
        var notes = this.state.notes.trim();
        var remote = this.state.remote;

        if (!company || !listing_url) {
          return;
        }

        $('#newApplicationForm').modal('toggle');

        this.props.onNewAppSubmit({
            company: company,
            listing_url: listing_url,
            phase: phase,
            expected_salary: expected_salary,
            location: location,
            inside_contact_name: inside_contact_name, 
            inside_contact_email: inside_contact_email,
            notes: notes,
            remote: remote
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
            remote: false,
        });
    },
    capitalizeCompany: function(companyName) {
      return companyName.charAt(0).toUpperCase() + companyName.slice(1);
    },
    generateTitle: function(companyName){
      if(companyName == ''){
        return 'New Company'
      } else {
        return this.capitalizeCompany(this.state.company);
      }
    },
    render: function() {
        return (
            <div className="modal fade" id="newApplicationForm" tabindex="-1" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    { this.generateTitle(this.state.company) }
                  </div>
                  <div className="modal-body">
                      <form className="commentForm" 
                      onSubmit={this.handleSubmit} >
                        <div className="form-group">
                        <label for="company-input">Company *</label>
                       <input
                          className="form-control" 
                          type="text"
                          id="company-input"
                          placeholder="Adelie, LLC"
                          value={this.state.company}
                          onChange={this.handleCompanyChange }
                        />
                        </div>
                        <div className="form-group">
                        <label for="listing-input">Job Listing URL *</label>
                       <input
                          className="form-control" 
                          type="text"
                          id="listing-input"
                          placeholder="http://jobs.com/listing/xxx"
                          value={this.state.listing_url}
                          onChange={this.handleUrlChange }
                        />
                        </div>
                        <div className="form-group">
                        <label for="phase-input">Phase *</label>
                        <select 
                        id="phase-input" 
                        className="form-control"
                        onChange={this.handlePhaseChange} value={this.state.phase} name="select">
                          <option value="saved">Saved</option> 
                          <option value="applied">Applied</option>
                          <option value="interviewing">Interviewing</option>
                          <option value="offered">Offered</option>
                        </select>
                        </div>
                        <div className="form-group">
                        <label for="salary-input">Salary</label>
                       <input
                          className="form-control" 
                          type="text"
                          id="salary-input"
                          placeholder="60,000"
                          value={this.state.expected_salary}
                          onChange={this.handleSalaryChange }
                        />
                        </div>
                        <div className="form-group">
                        <label for="location-input">Location</label>
                       <input
                          className="form-control" 
                          type="text"
                          placeholder="New York, NY"
                          value={this.state.location}
                          onChange={this.handleLocationChange }
                        />
                        </div>
                        <div className="form-group">
                        <label for="contact-name-input">Internal Contact</label>
                       <input
                          className="form-control" 
                          type="text"
                          id="contact-name-input"
                          placeholder="Bob Jones"
                          value={this.state.inside_contact_name}
                          onChange={this.handleContactNameChange }
                        />
                        </div>
                        <div className="form-group">
                        <label for="contact-email-input">Internal Contact Email</label>
                       <input
                          className="form-control" 
                          type="text"
                          id="contact-email-input"
                          placeholder="bjones@jobs.com"
                          value={this.state.inside_contact_email}
                          onChange={this.handleContactEmailChange }
                        />
                        </div>
                        <div className="form-group">
                        <label for="notes-input">Notes</label>
                       <textarea
                          className="form-control" 
                          type="text"
                          id="notes"
                          placeholder="Notes?"
                          value={this.state.notes}
                          onChange={this.handleNotesChange }
                        ></textarea>
                        </div>
                        <div className="form-group">
                        <label for="remote">Remote</label>
                       <input
                          className="form-control" 
                          type="checkbox"
                          id="remote"
                          defaultChecked={this.state.remote}
                          onChange={this.handleRemoteChange }
                        />
                        </div>
                        <div className="form-group">
                        <input
                        className="btn btn-primary form-control" 
                        type="submit" 
                        value="Add New Job" />
                        </div>
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