import React from 'react';
import PropTypes from 'prop-types';
import '../styles/css/Sidebar.css';

function Sidebar(props) {
  const categories = [
    'story',
    'characters',
    'dialogue',
    'items',
    'powers',
    'environments'
  ];
  return (
    <div className="sidebar">
      <ul className="categories">
        {categories.map((category, index) => {
          return (
            <li className={"category " + (props.selectedCategory === category ? 'active ' : '') + (props.accordions[category] ? 'open' : '')} key={index}>
              <div className="category-btn-wrapper">
                <button type="button" className="accordion-toggle" onClick={e => props.clickAccordionHandler(category, e)}>
                  <span className="accordion-icon"></span>
                </button>
                <button type="button" className="category-btn" onClick={e => props.clickCategoryHandler(category, e)}>
                  <span className="text-wrapper">{category}</span>
                </button>
              </div>
              <ul className="accordion-content">
                {props.accordions[category] && props.cards[category].map((card, index) => {
                  return (
                    <li className={(props.selectedCard && (props.selectedCard.id === card.id)) ? 'active' : ''} key={card.id} onClick={e => props.clickCardHandler(card, e)}>
                      <span className="text-wrapper">{card.title}</span>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
        <li className="new-category">
          <button>+</button>
          <span className="text-wrapper">New Category</span>
        </li>
      </ul>
    </div>
  )
}

Sidebar.propTypes = {
  selectedCategory: PropTypes.string, 
  selectedCard: PropTypes.object,
  accordions: PropTypes.object,
  clickAccordionHandler: PropTypes.func,
  clickCategoryHandler: PropTypes.func,
  clickCardHandler: PropTypes.func,
  cards: PropTypes.object
};

export default Sidebar;