import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';

class UpcomingWorkouts extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            mon: 460,
            tue: 457,
            wed: 453,
            thu: 450,
            fri: 447,
            sat: 445,
            sun: 460
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3">
                <div className="card-header text-white bg-dark border-dark">UPCOMING WORKOUTS:
                    <button type="button" className="btn btn-secondary btn-sm float-right">
                        <FontAwesomeIcon className="fa-lg" icon={faCog} />
                    </button>
                </div>
                <div className="month"> 
                    <ul>
                        <li>Your Weekly Workout</li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="weekdays">
                            <li>Mo</li>
                            <li>Tu</li>
                            <li>We</li>
                            <li>Th</li>
                            <li>Fr</li>
                            <li>Sa</li>
                            <li>Su</li>
                        </ul>
                        <ul className="days"> 
                            <li>
                                <Link style={{ textDecoration: 'none' }} to={"/workout/"+this.state.mon}>
                                    <button type="button" className="btn btn-light">
                                        Lower Body
                                        <br/>
                                        Quads
                                    </button>
                                </Link>    
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to={"/workout/"+this.state.tue}>
                                    <button type="button" className="btn btn-light">
                                        Arms
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to={"/workout/"+this.state.wed}>
                                    <button type="button" className="btn btn-light">
                                        Lower Body
                                        <br />
                                        Glutes
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to={"/workout/"+this.state.thu}>
                                    <button type="button" className="btn btn-light">
                                        Shoulders
                                        <br/>
                                        Arms
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to={"/workout/"+this.state.fri}>
                                    <button type="button" className="btn btn-light">
                                        Biceps
                                        <br/>
                                        Triceps
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to={"/workout/"+this.state.sat}>
                                    <button type="button" className="btn btn-light">
                                        Upper Body
                                        <br />
                                        Abs
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to={"/member"}>
                                    <button type="button" className="btn btn-light">
                                        Rest
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>    
            </div>
        );
    }
}

export default UpcomingWorkouts;

UpcomingWorkouts.propTypes = {
    id: PropTypes.number,
    match: PropTypes.object
};