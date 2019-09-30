import React from 'react';
import {Link} from 'react-router-dom';  
import './style.css';

class LoginForm extends React.Component {
    render() {
        if (this.props.showLogin) {
            return (
                <div className='login-popup'>
                    <h5>{this.props.message}</h5>
                <p>Don't have an account?  <Link className='inline-link' to='/register'>Register</Link> now.</p>
                <form>
                    <div className='form-group'>
                        <label htmlFor='email'>Email Address</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            placeholder='Email Address'
                            value={this.props.email}
                            name='email'
                            id='email' 
                            onChange={this.props.handleOnChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input 
                            type='password' 
                            className='form-control' 
                            value={this.props.password}
                            name='password'
                            id='password' 
                            onChange={this.props.handleOnChange}
                        />
                    </div>
                    <button 
                        type='submit' 
                        className='btn navbutton'
                        onClick={this.props.handleLoginFormSubmit}
                    >Log In
                    </button>
                    &nbsp;
                    <button 
                        type='submit' 
                        className='btn navbutton'
                        onClick={this.props.handleLoginClose}
                    >Close
                    </button>
                    <p className='login-message'>{this.props.failedLoginAttempts > 0 ? 'Incorrect email or password.' : ''}</p>
                </form>
                </div>
        );
        } else {
            return (
                <span> </span>
            );
        }
    }
}

export default LoginForm;