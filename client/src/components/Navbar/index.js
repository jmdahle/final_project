import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-expand' role='navigation'>
                <Link to='/'><div className='navbar-brand'>
                    <img className='navlogo' src='images/KeepItTogetherLogo.png' alt='logo' />
                </div></Link>
                <div className='navbar-nav mr-auto'>
                    {/* <Link className='nav-item nav-link' to='/test'>Test</Link> */}
                    { this.props.isAuthenticated ? (
                        <React.Fragment>
                            <Link className='nav-item nav-link' to='/addgoal'>Add Goal</Link>
                            <Link className='nav-item nav-link' to='/manage'>Manage Goals</Link>
                            <Link className='nav-item nav-link' to='/progress'>Progress</Link>
                            <a className='nav-item nav-link' href='https://medium.com/better-humans' target="_blank" rel="noopener noreferrer">Blog</a>
                            <span className="loggedInAs">Let's do this {this.props.firstName}!</span>
                            <button 
                                type='button' 
                                className='btn navbutton btn-logout'
                                id='btn-logout'
                                redirect-location='/'
                            >Log Out
                            </button>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {/* <Link className='nav-item nav-link' to='/register'>Register</Link> */}
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