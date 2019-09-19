import React from 'react';
import './style.css';

class RegisterForm extends React.Component {
    render() {
        return (
            <form>
                <div className='form-group'>
                    <label htmlFor='firstName'>First Name</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        placeholder='First Name'
                        value={this.props.firstName}
                        name='firstName'
                        id='firstName' 
                        onChange={this.props.handleOnChange}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        placeholder='Last Name'
                        value={this.props.lastName}
                        name='lastName'
                        id='lastName' 
                        onChange={this.props.handleOnChange}
                    />
                </div>
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
                    className='btn btn-style'
                    onClick={this.props.handleRegisterFormSubmit}
                >Register!
                </button>
            </form>
        );
    }
}

export default RegisterForm;