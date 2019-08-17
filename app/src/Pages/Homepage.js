import React, { Component } from "react";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import { Redirect } from "react-router-dom";
import API from "../";

class Homepage extends Component {
  state = {
    redirect: 0,
    status: "Sign In"
  };

  //This needs to be edited, to employ a switch
  renderRedirect() {
    switch (this.state.redirect) {
      case 1:
        return <Redirect to="/side" />;
      case 2:
        return <Redirect to="/secret" />;
      default:
    }
  }

  changePage = () => {
    this.setState({
      redirect: true
    });
  };

  changeStatus = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Navbar status={this.state.status} option={this.changeStatus} />
        <Row>
          <Col width="col-12">
            <div className="jumbotron shadow-lg mt-4">
              <Button onClick={this.changePage} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col width="col-12">
            <div className="jumbotron shadow-lg mt-4">
              <Button onClick={this.logThis} />
            </div>
          </Col>
        </Row>
        {this.renderRedirect()}
      </div>
    );
  }
}

export default Homepage;
