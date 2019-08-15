import React from "react";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Navbar from "../Components/Navbar";

function NoMatch() {
  return (
    <div className="App container">
      <Navbar />
      <Row>
        <Col width="col-12">
          <div className="jumbotron">
            <h1 className="display-4">This is a sidepage</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default NoMatch;
