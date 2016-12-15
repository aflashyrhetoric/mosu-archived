// NewApplicationForm.jsx
// Handles submit logic for submitting new forms.

import React from 'react';

export default class NewApplicationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    // this.props = this.props.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handlePhaseChange = this.handlePhaseChange.bind(this);
    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handleSalaryChange = this.handleSalaryChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleContactNameChange = this.handleContactNameChange.bind(this);
    this.handleContactEmailChange = this.handleContactEmailChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.handleRemoteChange = this.handleRemoteChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.capitalizeCompany = this.capitalizeCompany.bind(this);
    this.generateTitle = this.generateTitle.bind(this);
  }
  handleCompanyChange(e) {
      this.setState({ company: e.target.value});
  }
  handleUrlChange(e) {
      this.setState({ listing_url: e.target.value});
  }   
  handlePhaseChange(e) {
      this.setState({ phase: e.target.value});
  }   
  handleSalaryChange(e) {
      this.setState({ expected_salary: e.target.value});
  }    
  handleLocationChange(e) {
      this.setState({ location: e.target.value});
  }    
  handleContactNameChange(e) {
      this.setState({ inside_contact_name: e.target.value});
  }    
  handleContactEmailChange(e) {
      this.setState({ inside_contact_email: e.target.value});
  } 
  handleNotesChange(e) {
      this.setState({ notes: e.target.value});
  }      
  handleRemoteChange(e) {
      this.setState({ remote: e.target.checked });
  }      
  handleSubmit(e) {
      e.preventDefault();
      let company = this.state.company.trim();
      let listing_url = this.state.listing_url.trim();
      let phase = this.state.phase.trim();
      let expected_salary = this.state.expected_salary;
      let location = this.state.location.trim();
      let inside_contact_name = this.state.inside_contact_name.trim();
      let inside_contact_email = this.state.inside_contact_email.trim();
      let notes = this.state.notes.trim();
      let remote = this.state.remote;

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
  }
  capitalizeCompany(companyName) {
    return companyName.charAt(0).toUpperCase() + companyName.slice(1);
  }
  generateTitle(companyName){
    if(companyName == ''){
      return 'New Company'
    } else {
      return this.capitalizeCompany(this.state.company);
    }
  }
  render() {
    return (
      <div className="modal fade" id="newApplicationForm" tabIndex="-1" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              { this.generateTitle(this.state.company) }
            </div>
            <div className="modal-body">
                <form className="commentForm" 
                onSubmit={this.handleSubmit} >
                  <div className="form-group">
                  <label htmlFor="company-input">Company *</label>
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
                  <label htmlFor="listing-input">Job Listing URL *</label>
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
                  <label htmlFor="phase-input">Phase *</label>
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
                  <label htmlFor="salary-input">Salary</label>
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
                  <label htmlFor="location-input">Location</label>
                 <input
                    className="form-control" 
                    type="text"
                    placeholder="New York, NY"
                    value={this.state.location}
                    onChange={this.handleLocationChange }
                  />
                  </div>
                  <div className="form-group">
                  <label htmlFor="contact-name-input">Internal Contact</label>
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
                  <label htmlFor="contact-email-input">Internal Contact Email</label>
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
                  <label htmlFor="notes-input">Notes</label>
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
                  <label htmlFor="remote">Remote</label>
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
}