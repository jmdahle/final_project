import React from 'react';
import CategoryCard from '../../components/CategoryCard';
import CTAButton from "../../components/CTAButton";
class LandingPage extends React.Component {
    state={
        testArray:[
            {Category_Name: "Health", info:"I want to see my feet again"},
            
            {Category_Name: "Work", info:"Need to not get fired"},
            {Category_Name:"Social", info: "I've become a hermit, help!"},
            {Category_Name:"Fitness", info: "Get Swol, whatever that means?"}

    
    
            

        ]
    };
    render() {
        return (
            <div className="row">
                <figure className="col-md-4">
                 <div className="card"> 
            {this.state.testArray.map(catagory => (
                <CategoryCard category={category.Category_Name} info={category.info} />
            ))}
            <CTAButton buttonText="Click here" />
             </div>
            </figure>        
            </div>    
        );
    }
}

export default LandingPage;

