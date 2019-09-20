import React from 'react';
import './style.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-expand' role='navigation'>
                <div className='navbar-brand'>LOGO | </div>
                <div className='navbar-nav mr-auto'>
                    <a className='nav-item nav-link' href='/test'>Test</a>
                    { this.props.isAuthenticated ? (
                        <React.Fragment>
                            <span>You are logged in as {this.props.firstName}</span>
                            <button 
                                type='button' 
                                className='btn btn-style'
                                onClick={this.props.handleLogout}
                            >Log Out
                            </button>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <a className='nav-item nav-link' href='/register'>Register</a>
                            <button 
                                type='button' 
                                className='btn btn-style'
                                onClick={this.props.handleLogin}
                            >Log In
                            </button>
                        </React.Fragment>
                        )
                    }
                </div>
            </nav>
        );
    }
}

export default Navbar;