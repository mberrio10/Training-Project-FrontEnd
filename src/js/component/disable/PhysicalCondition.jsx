import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';


class PhysicalCondition extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3">
                <div className="card-header text-white bg-dark border-dark">PHYSICAL CONDITION:</div>
                <div className="card-body text-dark">
                    <form>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck11"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck11">
                                Fracture
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck22"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck22">
                                Luxation
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck33"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck33">
                                Sprain
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck44"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck44">
                                Column Injury
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck55"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck55">
                                Recurrent Low Back Pain
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck66"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck66">
                                Knee Injury
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck77"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck77">
                                Repetitive Tear
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="defaultCheck88"
                            />
                            <label className="form-check-label" htmlFor="defaultCheck88">
                                Chronic Pain
                            </label>
                        </div>
                    </form>
                </div>
                <div className="card-footer bg-transparent border-dark">Check all that apply.</div>
            </div>
        );
    }
}

export default PhysicalCondition;