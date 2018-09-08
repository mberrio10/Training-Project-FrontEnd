import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Shop extends React.Component{
    
    render(){
        return (
            <div className="col-md-6 card-diasble mb-4 shadow-sm-disable">
                <div className="card-header bg-dark">
                    <h4 className="my-0 font-weight-normal">{this.props.main}</h4>
                </div>
                <div className="card-body">
                    <h1 className="card-title pricing-card-title">${this.props.price} <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>{this.props.desc}</li>
                    </ul>
                    <Link 
                        to={"/checkout/"+this.props.id}
                        style={{ textDecoration: 'none' }} 
                    >
                        <button type="button" className="btn btn-lg btn-block btn-outline-primary">Get started</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Shop;

Shop.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    main: PropTypes.string,
    price: PropTypes.number,
    desc: PropTypes.string,
    image: PropTypes.string
};