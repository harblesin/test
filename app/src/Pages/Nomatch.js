import React from "react";
import Row from "../Components/Row";
import Col from "../Components/Col";


function NoMatch () {
  
    return (
      <div className="App container">
        <Row>
          <Col width="col-12">
            <div className="jumbotron">
                <h1 className="display-4">
                    NO MATCH
                </h1>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

export default NoMatch;