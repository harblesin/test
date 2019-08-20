import React, { Component } from "react";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import Form from "../Components/Form";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

class Login extends Component {
  state = {
    redirect: 0,
    status: "Sign In",
    userName: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  //This needs to be edited, to employ a switch
  renderRedirect() {
    if (this.state.redirect > 0) {
      return <Redirect to="/side" />;
    } else if (this.state.redirect > 1) {
      return <Redirect to="/secret" />;
    }
  }

  changePage = () => {
    this.setState({
      redirect: true
    });
  };

  register = async (req, res) => {
    await API.createUser({
      userName: this.state.userName,
      password: this.state.password
    }).then(data => {
      res.json(data);
      alert("Welcome " + data.data.userName + "!");
      return <Redirect to="/login" />;
    });
  };

  render() {
    return (
      <div>
        <Navbar status={this.state.status} onClick={this.changeStatus} />
        <Row>
          <Col width="col-12">
            <Row>
              <Col width="mx-auto col-2 mt-4">
                <h1>Register here!</h1>
              </Col>
            </Row>
            <Row>
              <Col width="mx-auto col-2">
                <label forHtml="userName">Username</label>
                <Form
                  margin="mb-2"
                  placeholder="Username"
                  name="userName"
                  handleInputChange={this.handleInputChange}
                />
                <label forHtml="password">Password</label>
                <Form
                  name="password"
                  placeholder="Password"
                  handleInputChange={this.handleInputChange}
                />

                <Form
                  name="confirmPassword"
                  margin="mt-2"
                  placeholder="confirmPassword"
                  handleInputChange={this.handleInputChange}
                />
                <Button onClick={this.register} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
