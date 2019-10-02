import React from "react";
import "./style.css";

import Container from "../../components/Container";
import Card from "../../components/Card";
import RegisterForm from "../../components/RegisterForm";
import API from "../../utils/API";

class Register extends React.Component {

  componentDidMount = () => {
    this.props.loginClose();
  }
  handleRegisterFormSubmit = event => {
    event.preventDefault();
    console.log("submit clicked");
    let userData = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      password: this.props.password
    };
    // console.log(userData);
    API.registerUser(userData)
      .then(jsonData => {
        console.log(jsonData);
        let userKey = jsonData.data._id;
        console.log(userKey);
        this.props.setUserSession(userKey);
        // send the welcome email
        let userEmail={'user_email':this.props.email}
        API.email(userEmail)
          .then( res => {
            // go back to prior (referring) page
            this.props.history.goBack();
          });
      })
      .catch(error => {
        console.log(error);
      });
  };


  render() {
    return (
      <div>
        <Container>
          <Card heading="Register">
            <RegisterForm
              firstName={this.props.firstName}
              lastName={this.props.lastName}
              email={this.props.email}
              password={this.props.password}
              handleOnChange={this.props.handleOnChange}
              handleRegisterFormSubmit={this.handleRegisterFormSubmit}
            />
          </Card>
        </Container>
      </div>
    );
  }
}

export default Register;
