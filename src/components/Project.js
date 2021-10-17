import React from 'react';
import _ from 'lodash';
import '../styles/css/Project.css';
import Sidebar from './Sidebar';
import CardViewer from './CardViewer';
import Modal from './Modal';

// TODO: remove card data from state
// TODO: add ability to add new categories
export default class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: null,
      showErrorModal: false,
      cards: {
        story: [],
        characters: [],
        dialogue: [],
        items: [],
        powers: [],
        environments: []
      },
      selectedCard: null,
      accordions: {
        story: false,
        characters: false,
        dialogue: false,
        items: false,
        powers: false,
        environments: false
      }
    }

    this.changeCategory = this.changeCategory.bind(this);
    this.accordionHandler = this.accordionHandler.bind(this);
    this.selectCard = this.selectCard.bind(this);
    this.addCard = this.addCard.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const axios = require('axios').default;

    let errorFlag = false;
    let data = {
      story: [],
      characters: [],
      dialogue: [],
      items: [],
      powers: [],
      environments: []
    };

    // TODO: wire this up to an actual backend
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        //console.log(response);
        for (let i = 0; i < response.data.length; i++) {
          if (i < 10) {
            data.story.push(response.data[i]);
          }
          else if (i < 20) {
            data.characters.push(response.data[i]);
          }
          else if (i < 30) {
            data.dialogue.push(response.data[i]);
          }
          else if (i < 40) {
            data.items.push(response.data[i]);
          }
          else if (i < 50) {
            data.powers.push(response.data[i]);
          }
          else if (i < 60) {
            data.environments.push(response.data[i]);
          }
          else {
            break;
          }
        }
      })
      .catch(function (error) {
        console.log(error);
        errorFlag = true;
      })

    if (errorFlag) {
      this.setState({showErrorModal: true});
    }
    else {
      console.log(data);
      this.setState({cards: data});
    }
  }

  changeCategory(category) {
    this.setState({selectedCategory: category});
    this.setState({selectedCard: null});
  }

  accordionHandler(category) {
    let accordions = _.cloneDeep(this.state.accordions);
    accordions[category] = !accordions[category];
    this.setState({accordions: accordions});
  }

  selectCard(card) {
    this.setState({selectedCard: card});
    this.setState({selectedCategory: null});
  }

  addCard(card) {
    console.log("new card: ", card);
    let cards = _.cloneDeep(this.state.cards);
    cards[this.state.selectedCategory].push(card);
    this.setState({cards: cards});
  }

  handleCloseModal() {
    this.setState({showErrorModal: false});
  }

  render() {
    return (
      <div className="content-wrapper">
        <Sidebar 
            selectedCategory={this.state.selectedCategory} 
            selectedCard={this.state.selectedCard}
            accordions={this.state.accordions}
            clickAccordionHandler={this.accordionHandler}
            clickCategoryHandler={this.changeCategory}
            clickCardHandler={this.selectCard}
            cards={this.state.cards} 
        />
        <CardViewer 
            selectedCategory={this.state.selectedCategory} 
            selectedCard={this.state.selectedCard}
            cards={this.state.cards[this.state.selectedCategory]} 
            addCard={this.addCard}
            clickCardHandler={this.selectCard}
        />
        <Modal show={this.state.showErrorModal} handleCloseModal={this.handleCloseModal}>
          <h2>Error</h2>
          <p>Something went wrong. Please try again later.</p>
          <button type="button" className="secondary-btn" onClick={this.handleCloseModal}>OK</button>
        </Modal>
      </div>
    )
  }
}