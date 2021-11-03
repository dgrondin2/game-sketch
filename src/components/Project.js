import React, {useState, useEffect} from 'react';
import axios from 'axios';
import _ from 'lodash';
import '../styles/css/Project.css';
import Sidebar from './Sidebar';
import CardViewer from './CardViewer';
import Modal from './Modal';

function Project(props) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [cardData, setCardData] = useState({
    story: [],
    characters: [],
    dialogue: [],
    items: [],
    powers: [],
    environments: []
  });
  const [selectedCard, setSelectedCard] = useState(null);
  const [accordions, setAccordions] = useState({
    story: false,
    characters: false,
    dialogue: false,
    items: false,
    powers: false,
    environmnets: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // divides up mock data into our card ctegories. remove when backend is wired up.
  function setUpMockData(data) {
    console.log("mock data before: ", data);
    let result = {
      story: [],
      characters: [],
      dialogue: [],
      items: [], 
      powers: [],
      environments: []
    };

    for (let i = 0; i < data.length; i++) {
      if (i < 10) {
        result.story.push(data[i]);
      }
      else if (i < 20) {
        result.characters.push(data[i]);
      }
      else if (i < 30) {
        result.dialogue.push(data[i]);
      }
      else if (i < 40) {
        result.items.push(data[i]);
      }
      else if (i < 50) {
        result.powers.push(data[i]);
      }
      else if (i < 60) {
        result.environments.push(data[i]);
      }
      else {
        break;
      }
    }

    console.log("mock data after: ", result);

    return result;
  }

  function categoryClickHandler(category) {
    setSelectedCategory(category);
    setSelectedCard(null);
  }

  function accordionHandler(category) {
    let newAccordions = _.cloneDeep(accordions);
    newAccordions[category] = !accordions[category];
    setAccordions(newAccordions);
  }

  function selectCard(card) {
    setSelectedCard(card);
    setSelectedCategory(null);
  }

  function addCard(card) {
    console.log("new card: ", card);
    let cards = _.cloneDeep(cardData);
    cardData[selectedCategory].push(card);
    setCardData(cards);
  }

  function handleCloseModal() {
    setShowErrorModal(false);
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log("response: ", response);
        const result = setUpMockData(response.data);
        setCardData(result);
      }
      catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="content-wrapper">
      <Sidebar 
          selectedCategory={selectedCategory} 
          selectedCard={selectedCard}
          accordions={accordions}
          clickAccordionHandler={accordionHandler}
          clickCategoryHandler={categoryClickHandler}
          clickCardHandler={selectCard}
          cards={cardData}
      />

      <CardViewer 
          selectedCategory={selectedCategory}
          selectedCard={selectedCard}
          cards={cardData[selectedCategory]} 
          addCard={addCard}
          clickCardHandler={selectCard}
      />

      <Modal show={isError} handleCloseModal={handleCloseModal}>
        <h2>Error</h2>
        <p>Something went wrong. Please try again later.</p>
        <button type="button" className="secondary-btn" onClick={handleCloseModal}>OK</button>
      </Modal> 
    </div>
  )
}

export default Project;