import React from 'react';
import './style.css';

class Instructions extends React.Component {
    render() {
        return (
            <div className='jumbotron instructions'>
                {this.props.heading === '' ? '' : (
                    <h4>{this.props.instructionsHeading}</h4>
                )}
                <p>{this.props.instructionsText}</p>
            </div>
        )
    }
}

export default Instructions;