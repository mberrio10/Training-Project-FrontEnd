import React from 'react';
import PropTypes from "prop-types";

class Card extends React.Component{

	constructor(props){
        super(props);
        this.state = {
            
        };
    }
    
    render(){
        return (
            <div className="col-md-6">
                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2 text-primary">{this.props.title}</strong>
                        <h3 className="mb-0">
                            <a className="text-dark" href="#">{this.props.title}</a>
                        </h3>
                        <div className="mb-1 text-muted">Nov 12</div>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#">Continue reading</a>
                    </div>
                    <img
                        className="card-img-right flex-auto d-none d-lg-block"
                        data-src="holder.js/200x250?theme=thumb"
                        alt="Thumbnail [200x250]"
                        src="http://via.placeholder.com/200x250"
                        data-holder-rendered="true"
                    />
                </div>
            </div>
        );
    }
}

export default Card;

Card.propTypes = {
    ID: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
};