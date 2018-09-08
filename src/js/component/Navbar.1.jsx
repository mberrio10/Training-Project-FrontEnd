import React from 'react';
import $ from "jquery";
import { Link } from "react-router-dom";
import { withSession } from '../stores/AppContext.jsx';
import PropTypes from "prop-types";
import Home from '../../img/home.png';
import Login from '../../img/login.png';
import User from '../../img/user.png';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            username: "",
            password: "",
            modal: false
        };
    }
    
    componentDidUpdate(prevProps, prevState) {
        // Previous ThemeContext value is prevProps.theme
        // New ThemeContext value is this.props.theme
        if(this.props.session.token) $('#exampleModal').modal('hide');
    }
    
    render(){
        // let homeActive = this.props.currentView === "home" ? "active" :"";
        
        const {session, actions} = this.props;
        
        return(
            <div className="navbar-spacer">
                <nav className="navbar navbar-dark bg-dark justify-content-between navbar-expand-md fixed-top">
                    <button
                        id="home-btn"
                        type="button" 
                        className="btn btn-link p-0">
                        <Link className="navbar-brand" to="/">
                            <img id="logoInverted" className="img-fluid" src={Home} />
                            <p className="login">Home</p>
                        </Link>
                    </button>
                    <button id="toggler-btn" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to={"/home"} className="nav-item nav-link text-white" >Home</Link>
                            <Link to={"/blog"} className="nav-item nav-link text-white" >Blog</Link>
                            <Link to={"/plan"} className="nav-item nav-link text-white" >Plan</Link>
                            {/*
                            <Link to={"/post"} className="nav-item nav-link text-white" >Post</Link>
                            <Link to={"/checkout"} className="nav-item nav-link text-white" >Checkout</Link>
                            <Link to={"/registration"} className="nav-item nav-link text-white" >Registration</Link>
                            <Link to={"/member"} className="nav-item nav-link text-white" >Member</Link>
                            */}
                            {session && typeof(session.user_nicename) !== 'undefined' ?
                                <button 
                                    type="button" 
                                    className="btn btn-link text-center text-white" 
                                    onClick={(e) => actions.logout()}>
                                    <img id="logoInverted" className="img-fluid" src={Login} />
                                    <p className="login">Logout</p>
                                </button>
                            :
                                <button
                                    type="button"
                                    className="btn btn-link text-center text-white"
                                    data-toggle="modal" 
                                    data-target="#exampleModal">
                                    <img id="logoInverted" className="img-fluid" src={User} />
                                    <p className="login">Login</p>
                                </button>
                            }
                        </div>
                    </div>
                </nav>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form role="form" onSubmit={(e) => {
                                    e.preventDefault();
                                    actions.loadSession(this.state.username, this.state.password);
                                }}>
                                    <div className="form-group">
                                        <input type="text" name="user" value={this.state.user} placeholder="Username" onChange={(e) => this.setState({username: e.target.value})} />
                                        <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
                                    </div>
                                    <input type="submit" value="Login" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withSession(Navbar);

Navbar.propTypes = {
    session: PropTypes.object,
    actions: PropTypes.object
    // currentView: PropTypes.string
};