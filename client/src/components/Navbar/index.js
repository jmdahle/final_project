import React from 'react';
import './style.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-expand' role='navigation'>
                <a className='navbar-brand' href='/'>
                    <img className='navlogo' src='images/KeepItTogetherLogo.png' alt='logo' />
                </a>
                <div className='navbar-nav mr-auto'>
                    <a className='nav-item nav-link' href='/test'>Test</a>
                    { this.props.isAuthenticated ? (
                        <React.Fragment>
                            <a className='nav-item nav-link' href='/addgoal'>Add Goal</a>
                            <a className='nav-item nav-link' href='/manage'>Manage Goals</a>
                            <a className='nav-item nav-link' href='/progress'>Visualize Progress</a>
                            <span>You are logged in as {this.props.firstName}</span>
                            <button 
                                type='button' 
                                className='btn navbutton'
                                onClick={this.props.handleLogout}
                            >Log Out
                            </button>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <a className='nav-item nav-link' href='/register'>Register</a>
                            <button 
                                type='button' 
                                className='btn navbutton'
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