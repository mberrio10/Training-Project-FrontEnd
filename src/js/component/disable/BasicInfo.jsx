import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import PropTypes from "prop-types";


class BasicInfo extends React.Component{

	constructor(props){
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            repassword:"",
            age:"",
            height:"",
            weight:"",
            ocupation:""
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3">
                <div className="card-header text-white bg-dark border-dark">BASIC INFO:</div>
                <div className="card-body text-dark">
                    <div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputName4">First Name *</label>
                                <input type="text" name="firstName" value={this.state.firstName} className="form-control" id="inputName4" placeholder="" onChange={(e) => this.setState({firstName: e.target.value})}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputLastN4">Last Name *</label>
                                <input type="LastN" name="lastName" value={this.state.lastName} className="form-control" id="inputLastN4" placeholder="" onChange={(e) => this.setState({lastName: e.target.value})}/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputName44">Email *</label>
                                <input type="username" name="email" value={this.state.email} className="form-control" id="inputName44" placeholder="" onChange={(e) => this.setState({email: e.target.value})}/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputLastN44">Password *</label>
                                <input type="password" name="password" value={this.state.password} className="form-control" id="inputLastN44" placeholder="" onChange={(e) => this.setState({password: e.target.value})}/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputLastN444">Re-type Password *</label>
                                <input type="password" name="repassword" value={this.state.repassword} className="form-control" id="inputLastN444" placeholder="" onChange={(e) => this.setState({repassword: e.target.value})}/>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputAge">Age *</label>
                                <input type="text" name="age" value={this.state.age} className="form-control" id="inputAge" onChange={(e) => this.setState({age: e.target.value})}/>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputAge">Height *</label>
                                <input type="text" name="height" value={this.state.height} className="form-control" id="inputHeight" placeholder="in cm." onChange={(e) => this.setState({height: e.target.value})}/>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputAge">Weight *</label>
                                <input type="text" name="weight" value={this.state.weight} className="form-control" id="inputWeight" placeholder="in lbs." onChange={(e) => this.setState({weight: e.target.value})}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputOcupationN4">Ocupation</label>
                                <input type="OcupationN" name="ocupation" value={this.state.ocupation}className="form-control" id="inputOcupationN4" onChange={(e) => this.setState({ocupation: e.target.value})}/>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="card-footer bg-transparent border-dark">* This field is required.</div>
            </div>
        );
    }
}

export default BasicInfo;