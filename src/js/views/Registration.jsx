import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { withSession } from '../stores/AppContext.jsx';
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
// import BasicInfo from "../component/BasicInfo.jsx";
// import ClinicalRecord from "../component/ClinicalRecord.jsx";
// import FamilyHistory from "../component/FamilyHistory.jsx";
// import PhysicalCondition from "../component/PhysicalCondition.jsx";
// import PhysicalActivity from "../component/PhysicalActivity.jsx";
import PropTypes from "prop-types";

class Registration extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            first_name:"John", 
            last_name:"Smith", 
            email:"john.smith@4Geeks.com", 
            password:"password", 
            repassword:"password", 
            age:"30", 
            height:"178", 
            weight:"178", 
            occupation:"Full Stack Developer",
            high_cholesterol:"",
            obese:"",
            diabetes:"",
            hypertension:"",
            heart_attack:"",
            other_cardiac_disease:"None",
            history_high_cholesterol:"",
            history_obese:"",
            history_diabetes:"",
            history_hypertension:"",
            history_heart_attack:"",
            history_other_cardiac_disease:"None",
            fracture:"",
            luxation:"",
            sprain:"",
            column_injury:"",
            low_back_pain:"",
            knee_injury:"",
            repetitive_tear:"",
            chronic_pain:"",
            physical_active:"",
            example_activities:"Running",
            times_week:"About four times a week",
            purpose:"Better nutrition",
            goal_description:"Preventive health care"
        };
    }
    
    render(){
        const {session, actions} = this.props;
        return (
            <React.Fragment>
                <Navbar />
                <p>&nbsp;</p>
                {/*
                <h1 className="py-2 text-center">REGISTRATION</h1>
                */}
                <form role="form" onSubmit={(e) => {
                        e.preventDefault();
                        actions.submitRegistration(
                            this.state.first_name, 
                            this.state.last_name, 
                            this.state.email, 
                            this.state.password, 
                            this.state.repassword, 
                            this.state.age, 
                            this.state.height, 
                            this.state.weight, 
                            this.state.occupation,
                            this.state.high_cholesterol,
                            this.state.obese,
                            this.state.diabetes,
                            this.state.hypertension,
                            this.state.heart_attack,
                            this.state.other_cardiac_disease,
                            this.state.history_high_cholesterol,
                            this.state.history_obese,
                            this.state.history_diabetes,
                            this.state.history_hypertension,
                            this.state.history_heart_attack,
                            this.state.history_other_cardiac_disease,
                            this.state.fracture,
                            this.state.luxation,
                            this.state.sprain,
                            this.state.column_injury,
                            this.state.low_back_pain,
                            this.state.knee_injury,
                            this.state.repetitive_tear,
                            this.state.chronic_pain,
                            this.state.physical_active,
                            this.state.example_activities,
                            this.state.times_week,
                            this.state.purpose,
                            this.state.goal_description
                        );
                    }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card border-dark mb-3">
                                    <div className="card-header text-white bg-dark border-dark">BASIC INFO:</div>
                                    <div className="card-body text-dark">
                                        <div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="first_name">
                                                        First Name *
                                                    </label>
                                                    <input 
                                                        className="form-control" 
                                                        type="text" 
                                                        id="first_name" 
                                                        placeholder="" 
                                                        name="first_name" 
                                                        value={this.state.first_name}
                                                        onChange={(e) => this.setState({first_name: e.target.value})}
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="last_name">
                                                        Last Name *
                                                    </label>
                                                    <input 
                                                        className="form-control" 
                                                        type="text" 
                                                        id="last_name" 
                                                        placeholder="" 
                                                        name="last_name" 
                                                        value={this.state.last_name}
                                                        onChange={(e) => this.setState({last_name: e.target.value})}
                                                    />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="email">
                                                        Email *
                                                    </label>
                                                    <input 
                                                        className="form-control" 
                                                        type="text" 
                                                        id="email" 
                                                        placeholder="" 
                                                        name="email" 
                                                        value={this.state.email}
                                                        onChange={(e) => this.setState({email: e.target.value})}
                                                    />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="password">
                                                        Password *
                                                    </label>
                                                    <input 
                                                        className="form-control" 
                                                        type="password" 
                                                        id="password" 
                                                        placeholder="" 
                                                        name="password" 
                                                        value={this.state.password} 
                                                        onChange={(e) => this.setState({password: e.target.value})}
                                                    />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="repassword">
                                                        Re-type Password *
                                                    </label>
                                                    <input 
                                                        className="form-control" 
                                                        type="password" 
                                                        id="repassword" 
                                                        placeholder="" 
                                                        name="repassword" 
                                                        value={this.state.repassword} 
                                                        onChange={(e) => this.setState({repassword: e.target.value})}
                                                    />
                                                </div>
                                                <div className="form-group col-md-2">
                                                    <label htmlFor="age">
                                                        Age *
                                                    </label>
                                                    <input 
                                                        className="form-control" 
                                                        type="text" 
                                                        id="age"
                                                        placeholder=""
                                                        name="age" 
                                                        value={this.state.age} 
                                                        onChange={(e) => this.setState({age: e.target.value})}
                                                    />
                                                </div>
                                                <div className="form-group col-md-2">
                                                    <label htmlFor="height">
                                                        Height *
                                                    </label>
                                                    <input 
                                                        className="form-control" 
                                                        type="text" 
                                                        id="height" 
                                                        placeholder="in cm." 
                                                        name="height" 
                                                        value={this.state.height} 
                                                        onChange={(e) => this.setState({height: e.target.value})}
                                                    />
                                                </div>
                                                <div className="form-group col-md-2">
                                                    <label htmlFor="weight">
                                                        Weight *
                                                    </label>
                                                    <input 
                                                        className="form-control" 
                                                        type="text" 
                                                        id="weight" 
                                                        placeholder="in lbs." 
                                                        name="weight" 
                                                        value={this.state.weight}
                                                        onChange={(e) => this.setState({weight: e.target.value})}
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="occupation">
                                                        Occupation
                                                    </label>
                                                    <input 
                                                        className="form-control" 
                                                        type="text" 
                                                        id="occupation"
                                                        placeholder=""
                                                        name="occupation" 
                                                        value={this.state.occupation} 
                                                        onChange={(e) => this.setState({occupation: e.target.value})}
                                                    />
                                                </div>
                                            </div>
                                        </div>    
                                    </div>
                                    <div className="card-footer bg-transparent border-dark">* This field is required.</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card border-dark mb-3">
                                    <div className="card-header text-white bg-dark border-dark">CLINICAL RECORD:</div>
                                    <div className="card-body text-dark">
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="high_cholesterol"
                                                name="high_cholesterol"
                                                value="high_cholesterol" 
                                                onChange={(e) => this.setState({high_cholesterol: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="high_cholesterol">
                                                High Cholesterol
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="obese"
                                                name="obese"
                                                value="obese" 
                                                onChange={(e) => this.setState({obese: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="obese">
                                                Obese
                                            </label>
                                        </div>    
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="diabetes"
                                                name="diabetes"
                                                value="diabetes" 
                                                onChange={(e) => this.setState({diabetes: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="diabetes">
                                                Diabetes
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="hypertension"
                                                name="hypertension"
                                                value="hypertension" 
                                                onChange={(e) => this.setState({hypertension: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="hypertension">
                                                Hypertension
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="heart_attack"
                                                name="heart_attack"
                                                value="heart_attack" 
                                                onChange={(e) => this.setState({heart_attack: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="heart_attack">
                                                Heart Attack
                                            </label>
                                        </div>
                                        <div className="form-check-disable">
                                            <p></p>
                                            <input 
                                                className="form-control" 
                                                type="text" 
                                                id="other_cardiac_disease" 
                                                name="other_cardiac_disease" 
                                                value={this.state.other_cardiac_disease} 
                                                placeholder="Other Cardiac Disease..." 
                                                onChange={(e) => this.setState({other_cardiac_disease: e.target.value})}/>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-transparent border-dark">Check all that apply.</div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card border-dark mb-3">
                                    <div className="card-header text-white bg-dark border-dark">FAMILY HISTORY:</div>
                                    <div className="card-body text-dark">
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="history_high_cholesterol"
                                                name="history_high_cholesterol"
                                                value="history_high_cholesterol" 
                                                onChange={(e) => this.setState({history_high_cholesterol: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="history_high_cholesterol">
                                                High Cholesterol
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="history_obese"
                                                name="history_obese"
                                                value="history_obese" 
                                                onChange={(e) => this.setState({history_obese: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="history_obese">
                                                Obese
                                            </label>
                                        </div>    
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="history_diabetes"
                                                name="history_diabetes"
                                                value="history_diabetes" 
                                                onChange={(e) => this.setState({history_diabetes: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="history_diabetes">
                                                Diabetes
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="history_hypertension"
                                                name="history_hypertension"
                                                value="history_hypertension" 
                                                onChange={(e) => this.setState({history_hypertension: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="history_hypertension">
                                                Hypertension
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="history_heart_attack"
                                                name="history_heart_attack"
                                                value="history_heart_attack" 
                                                onChange={(e) => this.setState({history_heart_attack: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="history_heart_attack">
                                                Heart Attack
                                            </label>
                                        </div>
                                        <div className="form-check-disable">
                                            <p></p>
                                            <input 
                                                className="form-control" 
                                                type="text" 
                                                id="history_other_cardiac_disease" 
                                                name="history_other_cardiac_disease" 
                                                value={this.state.history_other_cardiac_disease} 
                                                placeholder="Other Cardiac Disease..." 
                                                onChange={(e) => this.setState({history_other_cardiac_disease: e.target.value})}/>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-transparent border-dark">Check all that apply.</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card border-dark mb-3">
                                    <div className="card-header text-white bg-dark border-dark">PHYSICAL CONDITION:</div>
                                    <div className="card-body text-dark">
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="fracture"
                                                name="fracture"
                                                value="fracture" 
                                                onChange={(e) => this.setState({fracture: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="fracture">
                                                Fracture
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="luxation"
                                                name="luxation"
                                                value="luxation" 
                                                onChange={(e) => this.setState({luxation: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="luxation">
                                                Luxation
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="sprain"
                                                name="sprain"
                                                value="sprain" 
                                                onChange={(e) => this.setState({sprain: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="sprain">
                                                Sprain
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="column_injury"
                                                name="column_injury"
                                                value="column_injury" 
                                                onChange={(e) => this.setState({column_injury: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="column_injury">
                                                Column Injury
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="low_back_pain"
                                                name="low_back_pain"
                                                value="low_back_pain" 
                                                onChange={(e) => this.setState({low_back_pain: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="low_back_pain">
                                                Low Back Pain
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="knee_injury"
                                                name="knee_injury"
                                                value="knee_injury" 
                                                onChange={(e) => this.setState({knee_injury: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="knee_injury">
                                                Knee Injury
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="repetitive_tear"
                                                name="repetitive_tear"
                                                value="repetitive_tear" 
                                                onChange={(e) => this.setState({repetitive_tear: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="repetitive_tear">
                                                Repetitive Tear
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="chronic_pain"
                                                name="chronic_pain"
                                                value="chronic_pain" 
                                                onChange={(e) => this.setState({chronic_pain: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="chronic_pain">
                                                Chronic Pain
                                            </label>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-transparent border-dark">Check all that apply.</div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card border-dark mb-3">
                                    <div className="card-header text-white bg-dark border-dark">PHYSICAL ACTIVITY:</div>
                                    <div className="card-body text-dark">
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="physical_active"
                                                name="physical_active"
                                                value="physical_active" 
                                                onChange={(e) => this.setState({physical_active: e.target.value})}
                                            />
                                            <label className="form-check-label" htmlFor="physical_active">
                                                Physical Active
                                            </label>
                                        </div>
                                        <div className="form-check-disable">
                                            <p></p>
                                            <input 
                                                className="form-control" 
                                                type="text" 
                                                id="example_activities" 
                                                name="example_activities" 
                                                value={this.state.example_activities} 
                                                placeholder="Examples of activities..." 
                                                onChange={(e) => this.setState({example_activities: e.target.value})}
                                            />
                                        </div>
                                        <div className="form-check-disable">
                                            <p></p>
                                            <input 
                                                className="form-control" 
                                                type="text" 
                                                id="times_week" 
                                                placeholder="How many times a week..." 
                                                name="times_week" 
                                                value={this.state.times_week} 
                                                onChange={(e) => this.setState({times_week: e.target.value})}
                                            />
                                        </div>
                                        <p></p>
                                        <div className="form-check-disable">
                                            <p></p>
                                            <input 
                                                className="form-control" 
                                                type="text" 
                                                id="purpose" 
                                                placeholder="Purpose of the training..." 
                                                name="purpose" 
                                                value={this.state.purpose} 
                                                onChange={(e) => this.setState({purpose: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card border-dark mb-3">
                                    <div className="card-header text-center text-white bg-dark border-dark">WHAT ARE YOUR GOALS...</div>
                                    <div className="card-body text-dark">
                                        <p></p>
                                        <textarea 
                                            className="card-text" 
                                            type="text" 
                                            rows="5" 
                                            style={{width:"100%", height:"100%"}} 
                                            id="goal_description" 
                                            placeholder="Please describe your specific goals" 
                                            name="goal_description" 
                                            value={this.state.goal_description} 
                                            onChange={(e) => this.setState({goal_description: e.target.value})}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                                {/*
                                <Redirect to='/member'>
                                    <button 
                                        className="btn btn-primary btn-checkout btn-block" 
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </Redirect>
                                */}
                                <button 
                                    className="btn btn-primary btn-checkout btn-block" 
                                    type="submit">Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <hr className="mb-4" />
                <Footer />
            </React.Fragment>
        );
    }
}
export default withSession(Registration);


Registration.propTypes = {
    session: PropTypes.object,
    actions: PropTypes.object,
    currentView: PropTypes.string
};