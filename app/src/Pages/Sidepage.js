import React, { Component } from "react";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Navbar from "../Components/Navbar";

class NoMatch extends Component {
  state = {
    status: "Sign In"
  };
  render() {
    return (
      <div>
        <Navbar status={this.state.status} />
        <Row>
          <Col width="col-12">
            <div className="jumbotron shadow-lg mt-4">
              This is a thing on the sidepage
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default NoMatch;
