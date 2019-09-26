import React from 'react';
import './style.css';

class Error404 extends React.Component {
    render() {
        return (
            <div>
                <h1 className='error-404Header'>
                404 Error
            </h1>
            <h2 className="error-404Body">If at first you don't succeed,<br/>dust yourself off and try again!<br/><br/>
            (You can dust it off and try again, try again)</h2>
            </div>
        );
    }
}

export default Error404;