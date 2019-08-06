import React, { Component } from "react";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Navbar from "../Components/Navbar"

class Homepage extends Component {
    state={

    }
    render(){
        return(
            <div>
                <Navbar/>
                <Row>
                    <Col>
                    This is a page 
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Homepage;