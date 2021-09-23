import React from 'react';

class CardViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }
    render () {
        return (
            <div className="card-viewer"></div>
        )
    }
}

export default CardViewer;