import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Featurette extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    
    render(){
        if((this.props.index % 2) == 0) {
            return (
                <div className="container marketing">
                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">{this.props.title}</h2>
                            <p className="lead">{this.props.desc}</p>
                            <Link style={{ textDecoration: 'none' }} to={"/post/"+this.props.id}>
                                <button type="button" className="btn btn-info">READ MORE</button>
                            </Link>
                        </div>
                        <div className="col-md-5">
                            <img 
                                className="featurette-image img-fluid mx-auto" 
                                data-holder-rendered="true" 
                                data-src="holder.js/500x500/auto" 
                                alt="500x500" 
                                src={this.props.image}
                            />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container marketing">
                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading">{this.props.title}</h2>
                            <p className="lead">{this.props.desc}</p>
                            <Link style={{ textDecoration: 'none' }} to={"/post/"+this.props.id}>
                                <button type="button" className="btn btn-info">READ MORE</button>
                            </Link>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <img 
                                className="featurette-image img-fluid mx-auto" 
                                data-holder-rendered="true" 
                                data-src="holder.js/500x500/auto" 
                                alt="500x500" 
                                src={this.props.image}
                            />
                        </div>
                    </div>
                </div>
            );
        }
        
    }
}

export default Featurette;

Featurette.propTypes = {
    id: PropTypes.number,
    index: PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
    post: PropTypes.string
};