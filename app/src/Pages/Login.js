import React, { Component } from "react";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import Form from "../Components/Form";
import { Redirect } from "react-router-dom";
import API from "../";

class Login extends Component {
  state = {
    redirect: 0,
    status: "Sign In"
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

  changeStatus = () => {};

  render() {
    return (
      <div>
        <Navbar status={this.state.status} onClick={this.changeStatus} />
        <Row>
          <Col width="col-12">
            <div className="jumbotron shadow-lg mt-4">
              <Form />
              <Form />
              <Button onClick={this.changePage} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
