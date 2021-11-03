import React, {useState} from 'react';
import '../styles/css/Header.css';
import Modal from './Modal';

function Header(props) {
  const [showNewModal, setShowNewModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  function handleNew() {
    setShowNewModal(true);
  }

  function handleSave() {
    setShowSaveModal(true);
  }

  function handlePublish() {
    setShowPublishModal(true);
  }

  function handleSettings() {
    setShowSettingsModal(true);
  }

  function handleAbout() {
    setShowAboutModal(true);
  }

  function handleCloseModal() {
    setShowNewModal(false);
    setShowSaveModal(false);
    setShowPublishModal(false);
    setShowSettingsModal(false);
    setShowAboutModal(false);
  }

  return (
    <header>
      <h1>Game Sketch</h1>
      <nav>
        <a href="#" onClick={handleNew}>New</a>
        <a href="#" onClick={handleSave}>Save</a>
        <a href="#" onClick={handlePublish}>Publish</a>
        <a href="#" onClick={handleSettings}>Settings</a>
        <a href="#" className="pull-right" onClick={handleAbout}>About</a>
      </nav>

      <Modal show={showNewModal} handleCloseModal={handleCloseModal}>
        Are you sure you want to create a new project? Unsaved work will be deleted.
        <div className="cta">
          <button className="primary-btn">Create New Project</button>
          <button className="secondary-btn" onClick={handleCloseModal}>Cancel</button>
        </div>
      </Modal>

      <Modal show={showSaveModal} handleCloseModal={handleCloseModal}>
        Save project

        <div className="cta">
          <button className="primary-btn">Save Project</button>
          <button className="secondary-btn" onClick={handleCloseModal}>Cancel</button>
        </div>
      </Modal>

      <Modal show={showAboutModal} handleCloseModal={handleCloseModal}>
        About

        <div className="cta">
          <button className="secondary-btn" onClick={handleCloseModal}>Close</button>
        </div>
      </Modal>
    </header>
  )
}

export default Header;