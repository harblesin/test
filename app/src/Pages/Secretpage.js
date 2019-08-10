import React, { Component } from "react";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Navbar from "../Components/Navbar"
import Button from "../Components/Button"
import { Redirect } from "react-router-dom"

class Homepage extends Component {

    state = {
        
    };

    render(){
        return(
            <div>
                <Navbar/>
                <Row>
                    <Col width="col-12">
                        <div className="jumbotron shadow-lg mt-4">
                            You can only see this if you have permission!
                       </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Homepage;