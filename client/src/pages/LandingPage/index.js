import React from 'react';
import CatagoryCard from '../../components/CatagoryCard';
import CTAButton from "../../components/CTAButton";
class LandingPage extends React.Component {
    state={
        testArray:[
            {Catagory_Name: "Health", info:"I want to see my feet again"},
            
            {Catagory_Name: "Work", info:"Need to not get fired"},
            {Catagory_Name:"Social", info: "I've become a hermit, help!"},
            {Catagory_Name:"Fitness", info: "Get Swol, whatever that means?"}

    
    
            

        ]
    };
    render() {
        return (
            <div className="row">
                <figure className="col-md-4">
                 <div className="card"> 
            {this.state.testArray.map(catagory => (
                <CatagoryCard catagory={catagory.Catagory_Name} info={catagory.info} />
            ))}
           
             </div>
            </figure>        
            </div>    
        );
    }
}

export default LandingPage;

