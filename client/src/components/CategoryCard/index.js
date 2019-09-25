import React from 'react';
import './style.css';


// this is for text insid ethe card

class CategoryCard extends React.Component {
    render() {
        return (
            <div className="CategoryCard">
               
                   
                   <div className= "card-title">Category
                    {this.props.category} {this.props.info}
                   
                    {/* <a href="#" className="btn">Click here</a> */}
                    </div>
                 </div>
             
        
        );
    }
}

export default CategoryCard;
