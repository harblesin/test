import React, { Component } from "react";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Navbar from "../Components/Navbar"
import Button from "../Components/Button"
import { Redirect } from "react-router-dom"

class Homepage extends Component {
    state={
        redirect: false
    }

    renderRedirect(){
        if(this.state.redirect){
            return <Redirect to="/Secret"/>
        }
    }

    changePage(){
        this.setState({
            redirect: true
        })
    }

    render(){
        return(
            <div>
                <Navbar/>
                <Row>
                    <Col width="col-12" className="col-12">
                        <div className="jumbotron shadow-lg mt-4">
                            <Button onClick={this.changePage}>
                                
                            </Button>
                        </div>
                     
                    </Col>
                </Row>
                {this.renderRedirect()}
            </div>
        )
    }
}

export default Homepage;