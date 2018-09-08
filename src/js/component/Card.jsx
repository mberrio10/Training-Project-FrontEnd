import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Card extends React.Component{

	constructor(props){
        super(props);
        this.state = {
            
        };
    }
    
    render(){
        return (
            <div className="col-md-4 mt-2 mb-4">
                <div className="card border-0 card-cascade wider">
                    <div className="view view-cascade">
                        <img src={"" + this.props.image + ""} className="card-img-top"/>
                        <a href="#!">
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div className="mt-3 p-0 text-center card-body card-body-cascade">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p></p>
                        {/*
                        <p className="mt-2">
                            #{this.props.category}
                        </p>
                        */}
                    </div>
                    {/*
                    <div className="card-text p-3 bg-transparent">{this.props.desc}</div>
                    */}
                    <div className="p-0 card-footer bg-transparent border-0">
                        <div className="p-0 text-center">
                            <Link style={{ textDecoration: 'none' }} to={"/post/"+this.props.id}>
                                <button type="button" className="btn btn-info text-center mb-3">READ MORE</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;

Card.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
    post: PropTypes.string,
    category: PropTypes.string
};