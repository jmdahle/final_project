import React from 'react';
import './style.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-expand' role='navigation'>
                <div className='navbar-brand'>LOGO | </div>
                <div className='navbar-nav mr-auto'>
                    <a className='nav-item nav-link' href='/test'>Test</a>
                </div>
            </nav>
        );
    }
}

export default Navbar;