import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';


class FamilyHistory extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3">
                <div className="card-header text-white bg-dark border-dark">FAMILY HISTORY:</div>
                <div className="card-body text-dark">
                    <form>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck10"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck10">
                                High Cholesterol
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck20"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck20">
                                Obese
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck30"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck30">
                                Diabetes
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck40"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck40">
                                Hypertension
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck50"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck50">
                                Heart Attack
                            </label>
                        </div>
                        <div className="form-check-1">
                            <p></p>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="inputText2" 
                                placeholder="Other Cardiac Disease..."
                            />
                        </div>
                    </form>
                </div>
                <div className="card-footer bg-transparent border-dark">Check all that apply.</div>
            </div>
        );
    }
}

export default FamilyHistory;