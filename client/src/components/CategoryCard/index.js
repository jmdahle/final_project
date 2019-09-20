import React from 'react';
import './style.css';

class CategoryCard extends React.Component {
    render() {
        return (
            <div className="CategoryCard">
               
                    <h1>{this.props.catagory} {this.props.info}</h1>
                    <h3>test copy</h3>
                
            </div>
        );
    }
}

export default CategoryCard;
