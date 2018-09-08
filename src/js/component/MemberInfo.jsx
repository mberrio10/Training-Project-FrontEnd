import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';

class MemberInfo extends React.Component{

	constructor(props){
        super(props);
        this.state = {
            name: "John Smith",
            age: "30",
            gender: "Male",
            location: "South Miami, FL",
            current_plan: "Personal Training"
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3">
                <div className="card-header text-white bg-dark border-dark">MEMBER INFO:
                    <button type="button" className="btn btn-secondary btn-sm float-right">
                        <FontAwesomeIcon className="fa-lg" icon={faCog} />
                    </button>
                </div>
                <div className="card-body text-dark">
                    <h5 className="card-title">Name: <span className="text-primary">{this.state.name}</span></h5>
                    <h5 className="card-title">Age: <span className="text-primary">{this.state.age}</span></h5>
                    <h5 className="card-title">Gender: <span className="text-primary">{this.state.gender}</span></h5>
                    <h5 className="card-title">Location: <span className="text-primary">{this.state.location}</span></h5>
                    <h5 className="card-title">Current Plan: <span className="text-primary">{this.state.current_plan}</span></h5>
                </div>
                <div className="card-footer bg-transparent border-dark">Member since June 16, 2018</div>
            </div>
        );
    }
}

export default MemberInfo;