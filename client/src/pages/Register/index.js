import React from "react";
import "./style.css";

import Container from "../../components/Container";
import Card from "../../components/Card";
import RegisterForm from "../../components/RegisterForm";
import API from "../../utils/API";

class Register extends React.Component {

  handleRegisterFormSubmit = event => {
    event.preventDefault();
    console.log("submit clicked");
    let userData = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      password: this.props.password
    };
    console.log(userData);
    API.registerUser(userData)
      .then(jsonData => {
        console.log(jsonData);
        let userKey = jsonData.data._id;
        console.log(userKey);
        this.props.setUserSession(userKey);
        //go back to root page
        this.props.history.push("/");
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
