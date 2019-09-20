import React from 'react';
import './style.css';

class CatagoryCard extends React.Component {
    render() {
        return (
            <div className="CatagoryCard">
               
                    <h1>{this.props.catagory} {this.props.info}</h1>
                    <h3>test copy</h3>
                
            </div>
        );
    }
}

export default CatagoryCard;
