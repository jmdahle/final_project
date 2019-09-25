import React from 'react';
import './style.css'

// // class CTAButton extends React.Component{
//     // render(){
//         return(
//             <div className="btn btn-primary" >
                
         
//             <h2>{this.props.CTA}</h2>
//              <h2>CTA BUTTON TEXT</h2> }

//             </div>
//             );
    
const CTAButton = (props)=><button className="ctaButton btn btn-primary">{props.buttonText}</button>


export default CTAButton;