import React from 'react';
import '../styles/css/Header.css';
import Modal from './Modal';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewModal: false,
      showSaveModal: false,
      showPublishModal: false,
      showSettingsModal: false,
      showAboutModal: false
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleNew = this.handleNew.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
    this.handleSettings = this.handleSettings.bind(this);
    this.handleAbout = this.handleAbout.bind(this);
  }

  handleNew() {
    this.setState({showNewModal: true});
  }

  handleSave() {
    this.setState({showSaveModal: true});
  }

  handlePublish() {
    this.setState({showPublishModal: true});
  }

  handleSettings() {

  }

  handleAbout() {
    this.setState({showAboutModal: true});
  }

  handleCloseModal() {
    this.setState({
      showNewModal: false,
      showSaveModal: false,
      showPublishModal: false,
      showSettingsModal: false,
      showAboutModal: false
    });
  }

  render() {
    return (
      <header>
        <h1>Game Sketch</h1>
        <nav>
          <a href="#" onClick={this.handleNew}>New</a>
          <a href="#" onClick={this.handleSave}>Save</a>
          <a href="#" onClick={this.handlePublish}>Publish</a>
          <a href="#" onClick={this.handleSettings}>Settings</a>
          <a href="#" className="pull-right" onClick={this.handleAbout}>About</a>
        </nav>
        <Modal show={this.state.showNewModal} handleCloseModal={this.handleCloseModal}>
          Are you sure you want to create a new project? Unsaved work will be deleted.
          <div className="cta">
            <button className="primary-btn">Create New Project</button>
            <button className="secondary-btn" onClick={this.handleCloseModal}>Cancel</button>
          </div>
        </Modal>
        <Modal show={this.state.showSaveModal} handleCloseModal={this.handleCloseModal}>
          Save project

          <div className="cta">
            <button className="primary-btn">Save Project</button>
            <button className="secondary-btn" onClick={this.handleCloseModal}>Cancel</button>
          </div>
        </Modal>
        <Modal show={this.state.showAboutModal} handleCloseModal={this.handleCloseModal}>
          About

          <div className="cta">
            <button className="secondary-btn" onClick={this.handleCloseModal}>Close</button>
          </div>
        </Modal>
      </header>
    );
  }
}
