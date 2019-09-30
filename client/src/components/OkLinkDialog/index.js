import React from 'react';

import './style.css';

class OkLinkDialog extends React.Component {
    render() {
        if (this.props.showOkDialog) {
            return (
                <div className='okdialog-popup'>
                    <p>{this.props.okDialogText}</p>
                        <button 
                            type='submit' 
                            className='btn navbutton btn-okdialog'
                            id='btn-okdialog'
                            redirect-location={this.props.okDialogLink}
                        >OK
                        </button>
                </div>
            )
        } else {
            return(
                <span></span>
            )
        }
    }
}

export default OkLinkDialog