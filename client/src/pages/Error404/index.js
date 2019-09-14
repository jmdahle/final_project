import React from 'react';
import './style.css';

class Error404 extends React.Component {
    render() {
        return (
            <h1 className='error-404'>
                404 Error - check the route and try again!
            </h1>
        );
    }
}

export default Error404;