import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';

class BodyComposition extends React.Component{

	constructor(props){
        super(props);
        this.state = {
            weight: "190",
            body_fat: "26",
            lean_mass:"80"
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3">
                <div className="card-header text-white bg-dark border-dark">BODY COMPOSITION:
                    <button type="button" className="btn btn-secondary btn-sm float-right">
                        <FontAwesomeIcon className="fa-lg" icon={faCog} />
                    </button>
                </div>
                <div className="card-body text-dark">
                    <h5 className="card-title">Current Weight:<span className="text-primary"> {this.state.weight} lbs.</span></h5>
                    <h5 className="card-title">Current Body Fat:<span className="text-primary"> {this.state.body_fat} %</span></h5>
                    <h5 className="card-title">Lean Body Mass:<span className="text-primary"> {this.state.lean_mass} lbs.</span></h5>
                </div>
            </div>
        );
    }
}

export default BodyComposition;