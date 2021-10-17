import React from 'react';
import '../styles/css/Sidebar.css';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.categories = [
      "story",
      "characters",
      "dialogue",
      "items",
      "powers",
      "environments"
    ];
  }
  render() {
    return (
      <div className="sidebar">
        <ul className="categories">
          {this.categories.map((category, index) => {
            return (
              <li className={"category " + (this.props.selectedCategory === category ? 'active ' : '') + (this.props.accordions[category] ? 'open' : '')} key={index}>
                <div className="category-btn-wrapper">
                  <button type="button" className="accordion-toggle" onClick={e => this.props.clickAccordionHandler(category, e)}>
                    <span className="accordion-icon"></span>
                  </button>
                  <button type="button" className="category-btn" onClick={e => this.props.clickCategoryHandler(category, e)}>
                    <span className="text-wrapper">{category}</span>
                  </button>
                </div>
                <ul className="accordion-content">
                  {this.props.accordions[category] && this.props.cards[category].map((card, index) => {
                    return (
                      <li className={(this.props.selectedCard && (this.props.selectedCard.id === card.id)) ? 'active' : ''} key={card.id} onClick={e => this.props.clickCardHandler(card, e)}>
                        <span className="text-wrapper">{card.title}</span>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}