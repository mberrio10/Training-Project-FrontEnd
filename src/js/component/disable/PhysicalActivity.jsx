import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';


class PhysicalActivity extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3">
                <div className="card-header text-white bg-dark border-dark">PHYSICAL ACTIVITY:</div>
                <div className="card-body text-dark">
                    <form>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck2"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Physical Active
                            </label>
                        </div>
                        <div className="form-check-disable">
                            <p></p>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="inputText5" 
                                placeholder="Examples of activities..."
                            />
                        </div>
                        <div className="form-check-disable">
                            <p></p>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="inputText3" 
                                placeholder="How manny times a week..."
                            />
                        </div>
                        <p></p>
                        <div className="form-check-disable">
                            <p></p>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="inputText4" 
                                placeholder="Purpose of the training..."
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default PhysicalActivity;