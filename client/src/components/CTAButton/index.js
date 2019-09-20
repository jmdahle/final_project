import React from 'react';
import './style.css'

class CTAButton extends React.Component{
    render(){
        return(
            <div>
            <a className="CTAButton"></a>
            <h2>{this.props.CTA}</h2>
            </div>
            );
    }
}

export default CTAButton;