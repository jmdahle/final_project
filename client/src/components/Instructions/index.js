import React from 'react';
import './style.css';

class Instructions extends React.Component {
    render() {
        return (
            <div className='jumbotron instructions'>
                {this.props.instructionsHeading === '' ? '' : (
                    <h4 className="instructionsHeading">{this.props.instructionsHeading}</h4>
                )}
                <p className="instructionsBody">{this.props.instructionsText}</p>
            </div>
        )
    }
}

export default Instructions;