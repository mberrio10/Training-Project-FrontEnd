import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';

class BodyFatGoals extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3">
                <div className="card-header text-white bg-dark border-dark">BODY FAT GOALS:
                    <button type="button" className="btn btn-secondary btn-sm float-right">
                        <FontAwesomeIcon className="fa-lg" icon={faCog} />
                    </button>
                </div>
                <div className="card-body text-dark">
                    <h5 className="card-title">Ready, Set, Goal</h5>
                    <p className="card-text">Achieving the health and fitness goals of your dreams starts with a goal.  Set your weight and body fat goals and get the tools you need to succeed.</p>
                </div>
            </div>
        );
    }
}

export default BodyFatGoals;