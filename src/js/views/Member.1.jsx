import React from 'react';
import { Consumer } from '../stores/AppContext.jsx';
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import MemberInfo from "../component/MemberInfo.jsx";
import OverallGoal from "../component/OverallGoal.jsx";
import BodyComposition from "../component/BodyComposition.jsx";
import BodyFatGoals from "../component/BodyFatGoals.jsx";
import ProgressPhoto from "../component/ProgressPhoto.jsx";
import UpcomingWorkouts from "../component/UpcomingWorkouts.jsx";
// import UpcomingMeals from "../component/UpcomingMeals.jsx";
import PropTypes from "prop-types";

class Member extends React.Component{
    
    render(){
        
        return (
            <React.Fragment>
                <Navbar />
                <p>&nbsp;</p>
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
                            <Link style={{ textDecoration: 'none' }} to="/workout">
                                <button type="button" className="btn btn-light">
                                    <Consumer>
                                        {({ state }) => {
                                            var selected = state.members.filter( item => item.id === 480 );
                                            var member = selected[0];
                                            console.log(member);
                                            console.log('Hello');
                                            return (
                                                <React.Fragment>
                                                    <h1>Hello</h1>
                                                    
                                                    <span key={member.post_author}>{member.post_author}</span>
                                                    
                                                </React.Fragment>
                                            );
                                        }}
                                    </Consumer>
                                </button>
                            </Link> 
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
                <hr className="mb-4" />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Member;