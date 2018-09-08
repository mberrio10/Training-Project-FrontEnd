import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import MemberInfo from "../component/MemberInfo.jsx";
import OverallGoal from "../component/OverallGoal.jsx";
import BodyComposition from "../component/BodyComposition.jsx";
import BodyFatGoals from "../component/BodyFatGoals.jsx";
import ProgressPhoto from "../component/ProgressPhoto.jsx";
import UpcomingWorkouts from "../component/UpcomingWorkouts.jsx";
import PropTypes from "prop-types";

class Member extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            session: {
                id: 1000,
                user_nicename: "johnsmith",
                password: "password",
                token: "gfdrtu6545hftydhgrhxfh"
            }
        };
    } 
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <p>&nbsp;</p>
                <Consumer>
                    {({ state }) => {
                    
                        const member = state.members.find( member => member.ID === parseInt(this.props.match.params.theid) );
                        if(!member){ 
                            
                            return(<p>Loading</p>);
                        
                        }
                    }}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <MemberInfo />   
                            </div>
                            <div className="col-lg-6">
                                <OverallGoal />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <BodyComposition />   
                            </div> 
                            <div className="col-lg-6">
                                <BodyFatGoals />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ProgressPhoto />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <UpcomingWorkouts />
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                                <Link style={{ textDecoration: 'none' }} to="/home">
                                    <button className="btn btn-danger btn-checkout btn-block" type="submit">Logout</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Consumer>
                <hr className="mb-4" />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Member;

Member.propTypes = {
  match: PropTypes.object
};