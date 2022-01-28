import React, {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles/css/CardViewer.css';
import Card from './Card';
import Modal from './Modal';

function CardViewer(props) {
  const [showNewModal, setShowNewModal] = useState(false);
  const [cardName, setCardName] = useState(null);
  const [cardDescription, setCardDescription] = useState(null);

  function handleClickNew(e) {
    setShowNewModal(true);
  }

  function handleCloseModal(e) {
    setShowNewModal(false);
  }

  function handleCreateNewCard(e) {
    const cards = props.cards;
    const id = cards[cards.length-1].id + 1;
    const card = {
      id: id,
      title: cardName,
      body: cardDescription
    };
    e.preventDefault();
    props.addCard(card);
    handleCloseModal();
  }

  function handleInputChange(e) {
    /*
    this.setState({
      [e.target.name]: e.target.value
    });
    */
  }

  let view;

  if (props.selectedCard) { // card selected, show card detail/edit page
    view = (
      <div className="card-detail-view">
        <div className="card-viewer-header">
          <h2>{props.selectedCard.title}</h2>
        </div>
        <p>{props.selectedCard.body}</p>
      </div>
    );
  }
  else if (props.selectedCategory) { // category selected, show all cards view
    view = (
      <div>
        <div className="card-viewer-header">
          <h2>{props.selectedCategory}</h2>
          <div className="viewer-controls">
            <button className="small-cards-btn"></button>
            <button className="medium-cards-btn"></button>
            <button className="large-cards-btn"></button>
          </div>
        </div>
        <ul className="cards">
          {props.cards.map((card, index) => {
            return (
              <li key={card.id} onClick={e => props.clickCardHandler(card, e)}>
                <Card>
                  <div className="card-content-wrapper">
                    <h4>{card.title}</h4>
                    <p>{card.body}</p>
                  </div>
                </Card>
              </li>
            )
          })}
          <li className="new-card-btn" onClick={handleClickNew}>
            <Card>
              <span>New Card</span>
            </Card>
          </li>
        </ul>
      </div>
    );
  }
  else { // null state
    view = (
      <div>
      </div>
    )
  }

  return (
    <div className="card-viewer-wrapper">
      <div className="card-viewer">
        {view}
      </div>
      <Modal show={showNewModal} handleCloseModal={handleCloseModal}>
        <div className="modal-content">
          <h2>New {props.selectedCategory}</h2>
          <form onSubmit={handleCreateNewCard}>
            <div className="field">
              <label htmlFor="cardName">Name</label>
              <input 
                  id="cardName" 
                  type="text" 
                  name="cardName" 
                  value={cardName} 
                  onChange={handleInputChange} 
              />
            </div>
            <div className="field">
              <label htmlFor="cardDescription">Description</label>
              <textarea 
                  id="cardDescription" 
                  name="cardDescription" 
                  value={cardDescription} 
                  onChange={handleInputChange} 
              />
            </div>
            <div className="cta">
              <button className="primary-btn">Create</button>
              <button type="button" className="secondary-btn" onClick={handleCloseModal}>Cancel</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  )
}

CardViewer.propTypes = {
  selectedCategory: PropTypes.string,
  selectedCard: PropTypes.object,
  cards: PropTypes.arrayOf(PropTypes.object),
  addCard: PropTypes.func,
  clickCardHandler: PropTypes.func
};

export default CardViewer;