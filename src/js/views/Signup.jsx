import React from 'react';
import { withSession } from '../stores/AppContext.jsx';
import PropTypes from "prop-types";
import Navbar from '../component/Navbar.jsx';
import Footer from '../component/Footer.jsx';

class Signup extends React.Component{

	constructor(props){
        super(props);
        
        this.state = {
            username: "edgarbrignoni",
            password: "4GeeksAcademy"
        };
    }
    
    render(){
        const {session, actions} = this.props;
        return (
            <React.Fragment>
                <Navbar />
                <p>&nbsp;</p>
                <div className="container login-container">
                    <div className="row">
                        <div className="col-lg-6 new-member">
                            <h2 className="strong text-center mb-4">New Member</h2>
                            <a href="./plan" alt="New Member">
                                <img src="https://cpats.s3.amazonaws.com/system/company_photos/530216/original/9r_join_us.jpg" className="w-100 mb-4" />
                            </a>
                            <h5 className="strong text-center mb-4 text-muted">Start feeling healthy and full of energy!</h5>
                            <div className="text-center mb-4">
                                <a href="./plan" className="btn btn-lg btn-block btn-outline-primary caps w-100">Select a Plan</a>
                            </div>
                        </div>
                        <div className="col-lg-6 returning-member">
                            <h2 className="strong text-center mb50">Returning Member</h2>
                            <main className="py-4 pl-1">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10">
                                            <div className="card">
                                                <div className="card-body">
                                                    <form role="form" onSubmit={(e) => {
                                                        e.preventDefault();
                                                        actions.loadSession(this.state.username, this.state.password);
                                                    }}>
                                                        <div className="form-group row">
                                                            <label htmlFor="identity" className="col-sm-4 col-form-label text-md-right">Username</label>
                                                            <div className="col-md-6">
                                                                <input 
                                                                    id="identity" 
                                                                    className="form-control fb-input-lg" 
                                                                    type="text" 
                                                                    name="user" 
                                                                    value={this.state.username} 
                                                                    placeholder="Username" 
                                                                    onChange={(e) => this.setState({username: e.target.value})} 
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                                            <div className="col-md-6">
                                                                <input 
                                                                    id="password" 
                                                                    className="form-control" 
                                                                    type="password" 
                                                                    name="password" 
                                                                    value={this.state.password} 
                                                                    placeholder="Password" 
                                                                    onChange={(e) => this.setState({password: e.target.value})}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row mb-0">
                                                            <div className="col-md-6 offset-md-4">
                                                                <button type="submit" className="btn btn-lg btn-block btn-outline-primary">
                                                                    Login
                                                                </button><br />
                                                                <a className="btn btn-link p-0" href="./forgot">
                                                                    Forgot Your Password?
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            <div className="text-center alert alert-warning mt-4" id="my-login-msg" style={{ display:'none' }}>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default withSession(Signup);

Signup.propTypes = {
    session: PropTypes.object,
    actions: PropTypes.object,
    currentView: PropTypes.string
};