import React from 'react';
import './style.css';
// import API calls
import API from '../../utils/API';
// import React components
import Container from '../../components/Container';
import RegisterForm from '../../components/RegisterForm';
import Card from '../../components/Card';
import Button from '../../components/Button';


class Test extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    handleOnChange = event => {
        this.setState( {
            [event.target.name]: event.target.value
        } );  
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log('submit clicked');
        let userData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
        console.log(userData);
        API.registerUser(userData)
        .then( jsonData => {
            console.log(jsonData);
        })
        .catch( error => {
            console.log(error)
        });
    }

    render() {
        return (
            <div>
                <Container>
                    <h1>Test</h1>
                    <Card heading='Register'>
                        <RegisterForm 
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            email={this.state.email}
                            password={this.state.password}
                            handleOnChange={this.handleOnChange}
                            handleFormSubmit={this.handleFormSubmit}
                        />
                    </Card>
                </Container>
                <Button />
            </div>
        );
    }
}

export default Test;