// ApplicationItem.jsx
// Handles toggling of modal
// Renders Application Item

import React from 'react';
import ModifyApplicationForm from './ModifyApplicationForm';

export default class ApplicationItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id:             this.props.jobApp.id,
      company:        this.props.jobApp.company,
      listing_url:    this.props.jobApp.listing_url,
      phase:          this.props.jobApp.phase,
      location:       this.props.jobApp.location,
      expected_salary: this.props.jobApp.expected_salary,
      inside_contact_name: this.props.jobApp.inside_contact_name,
      inside_contact_email: this.props.jobApp.inside_contact_email,
      notes:          this.props.jobApp.notes,
      remote:         this.props.jobApp.remote
    };
    
    this.updateCompanyName = this.updateCompanyName.bind(this);
    this.updateListingUrl = this.updateListingUrl.bind(this);
    this.showModal = this.showModal.bind(this);
    this.updateItemColor = this.updateItemColor.bind(this);
  }

  updateCompanyName(newCompanyName) {
    // let job_applications = this.state.data;
    this.setState({ company: newCompanyName });
  }

  updateListingUrl() {
    this.setState({ listing_url: newUrl });
  }

  showModal() {
    $('#modifyApplicationForm' + this.props.jobApp.id).modal('toggle');
  }

  updateItemColor(newPhase) {
    this.setState({ phase: newPhase})
  }

  render() {
    // Set snippet
    let snippet ='';

    if(this.props.jobApp.notes.length == 0) {
      snippet = String.fromCharCode('U+00A0');
    } else {
      snippet = this.props.jobApp.notes.substring(0, 24) + " (...)";
    }
    return (
      <div className="application-item col-xs-12 col-sm-6 col-md-6 col-lg-4">
      <div
      className={"card card-block " + this.state.phase }>
    {/* Card Title: Company */}
    <h4 className="card-title"> { this.state.company } </h4>
    <p className="card-text"> 
    { snippet } 
    </p>
    <a className="btn btn_viewListing btn-secondary" target="_blank" href={this.state.listing_url}> View Listing </a>
    <button type="button" onClick={this.showModal} className="btn btn-secondary">Manage</button>

    <ModifyApplicationForm
    jobApp={this.props.jobApp}
    callbackAppSubmit={this.props.callbackAppSubmit}
    handleDelete={this.props.handleDelete}
    updateCompanyName={ this.updateCompanyName }
    updateListingUrl={ this.updateListingUrl }
    showModal={ this.showModal }
    updateItemColor={this.updateItemColor}
    />
    </div>
    </div>
    );
  }
}