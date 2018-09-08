import React from 'react';
import Navbar from '../component/Navbar.jsx';
import { Link } from "react-router-dom";

class Success extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <div className="jumbotron text-center">
                    <h1 className="display-3">Thank You!</h1>
                    <p className="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p>
                    <hr/>
                    <p>Having trouble? <a href="">Contact us</a></p>
                    <Link style={{ textDecoration: 'none' }} to={"/login/"}>
                        <p className="lead"> <a className="btn btn-primary btn-sm" href="https://bootstrapcreative.com/" role="button">Continue to login</a></p>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Success;