import React, { Component } from "react";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Navbar from "../Components/Navbar";

class Homepage extends Component {
  state = {
    status: "Sign In",
    signOut: "Sign Out"
  };

  render() {
    return (
      <div>
        <Navbar status={this.state.status} />
        <Row>
          <Col width="col-12">
            <div className="jumbotron shadow-lg mt-4">
              You can only see this if you have permission!
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Homepage;
