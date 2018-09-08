import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';

class OverallGoal extends React.Component{

	constructor(props){
        super(props);
        this.state = {
            overall_goal: "Weight Loss",
            weight_goal: "170"
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3" id="profile-info">
                <div className="card-header text-white bg-dark border-dark">OVERALL GOAL:
                    <button type="button" className="btn btn-secondary btn-sm float-right">
                        <FontAwesomeIcon className="fa-lg" icon={faCog} />
                    </button>
                </div>
                <div className="card-body text-dark">
                    <h5 className="card-title">This is your overall goal: <span className="text-primary">{this.state.overall_goal}</span></h5>
                    <h5 className="card-title">Weight Goal: <span className="text-primary">{this.state.weight_goal} lbs.</span></h5>
                </div>
                <div className="card-footer bg-transparent border-dark">Achieve on July 25, 2018</div>
            </div>
        );
    }
}

export default OverallGoal;