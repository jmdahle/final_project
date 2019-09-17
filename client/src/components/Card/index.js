import React from 'react';
import './style.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h5>{this.props.heading}</h5>
                </div>
                <div className="card-body">{this.props.children}</div>
            </div>
        );
    }
}

export default Card;

