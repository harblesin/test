import React, { Component } from "react";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Navbar from "../Components/Navbar"
import Button from "../Components/Button"
import { Redirect } from "react-router-dom"

class Homepage extends Component {

    state = {
        redirect: false,
        thing: 2
    };

    renderRedirect(){
        if(this.state.redirect){
            return <Redirect to="/Secret"/>
        }
    }

    changePage(){
        this.setState({
            redirect: true
        })
        console.log(this)
        console.log("this thing")
    }

    logThis(){
        console.log("this is a test")
    }
    render(){
        return(
            <div>
                <Navbar/>
                <Row>
                    <Col width="col-12" className="col-12">
                        <div className="jumbotron shadow-lg mt-4">
                            <Button changePage={this.changePage}/>
                        </div>
                     
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="jumbotron shadow-lg mt-4">
                        <Button logThis={this.logThis}/>
                    </div>
                    </Col>
                </Row>
                {this.renderRedirect()}
            </div>
        )
    }
}

export default Homepage;