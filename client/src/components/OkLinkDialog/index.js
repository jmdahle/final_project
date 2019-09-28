import React from 'react';
import {Link} from 'react-router-dom';  
import './style.css';

class OkLinkDialog extends React.Component {
    render() {
        if (this.props.showOkDialog) {
            return (
                <div className='okdialog-popup'>
                    <p>{this.props.okDialogText}</p>
                    <Link className='inline-link' to={this.props.okDialogLink}>
                        <button 
                            type='submit' 
                            className='btn navbutton'
                        >OK
                        </button>
                    </Link>
                </div>
            )
        }
    }
}

export default OkLinkDialog