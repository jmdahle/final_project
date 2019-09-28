import React from 'react';

import './style.css';

class OkLinkDialog extends React.Component {
    render() {
        if (this.props.showOkDialog) {
            return (
                <div className='okdialog-popup'>
                    <p>{this.props.okDialogText}</p>
                    {/* <Link className='inline-link' to={this.props.okDialogLink}> */}
                        <button 
                            type='submit' 
                            className='btn navbutton btn-okdialog'
                            id='btn-okdialog'
                            location-location='/'
                        >OK
                        </button>
                    {/* </Link> */}
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