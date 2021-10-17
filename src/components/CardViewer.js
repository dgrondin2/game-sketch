import React from 'react';
import '../styles/css/CardViewer.css';
import Card from './Card';
import Modal from './Modal';

export default class CardViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewModal: false,
      cardName: "",
      cardDescription: ""
    };
    this.handleClickNew = this.handleClickNew.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCreateNewCard = this.handleCreateNewCard.bind(this);
  }
  handleClickNew(e) {
    this.setState({showNewModal: true});
  }
  handleCreateNewCard(e) {
    const cards = this.props.cards;
    const id = cards[cards.length-1].id + 1;
    const card = {
      id: id,
      title: this.state.cardName,
      body: this.state.cardDescription
    };
    e.preventDefault();
    this.props.addCard(card);
    this.handleCloseModal();
  }
  handleCloseModal(e) {
    this.setState({showNewModal: false});
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render () {
    let view;
    if (this.props.selectedCard) { // card selected, show card detail/edit page
      view = (
        <div className="card-detail-view">
          <h2>{this.props.selectedCard.title}</h2>
          <p>{this.props.selectedCard.body}</p>
        </div>
      );
    }
    else if (this.props.selectedCategory) { // category selected, show all cards view
      view = (
        <div>
          <h2>{this.props.selectedCategory}</h2>
          <ul className="cards">
            {this.props.cards.map((card, index) => {
              return (
                <li key={card.id} onClick={e => this.props.clickCardHandler(card, e)}>
                  <Card>
                    <div className="card-content-wrapper">
                      <h4>{card.title}</h4>
                      <p>{card.body}</p>
                    </div>
                  </Card>
                </li>
              )
            })}
            <li className="new-card-btn" onClick={this.handleClickNew}>
              <Card>
                <span>Create New Card</span>
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
        <Modal show={this.state.showNewModal} handleCloseModal={this.handleCloseModal}>
          <div className="modal-content">
            <h2>New {this.props.selectedCategory}</h2>
            <form onSubmit={this.handleCreateNewCard}>
              <div className="field">
                <label htmlFor="cardName">Name</label>
                <input 
                    id="cardName" 
                    type="text" 
                    name="cardName" 
                    value={this.state.cardName} 
                    onChange={this.handleInputChange} 
                />
              </div>
              <div className="field">
                <label htmlFor="cardDescription">Description</label>
                <textarea 
                    id="cardDescription" 
                    name="cardDescription" 
                    value={this.state.cardDescription} 
                    onChange={this.handleInputChange} 
                />
              </div>
              <div className="cta">
                <button className="primary-btn">Create</button>
                <button type="button" className="secondary-btn" onClick={this.handleCloseModal}>Cancel</button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    )
  }
}
