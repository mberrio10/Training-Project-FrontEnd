import React from 'react';
import { Link } from "react-router-dom";
import { Consumer } from "../stores/AppContext.jsx";
import PropTypes from "prop-types";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";

class Checkout extends React.Component{
    constructor() {
        super();
        this.state = {
            discount: 25,
            cc_name: "John Smith",
            cc_number: "44434 55564 44566 445",
            cc_expiration: "04/2020",
            cc_cvv: "888"
        };
    }
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <p>&nbsp;</p>
                {/*
                <h1 className="py-2 text-center">CHECKOUT</h1>
                */}
                <Consumer>
                    {({ state }) => {
                        const checkout = state.plans.find( checkout => checkout.ID === parseInt(this.props.match.params.theid) );
                        if (!checkout) { 
                            return(<p>Loading...</p>);
                        } 
                        
                        else { 
                            return (
                                <React.Fragment>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 order-md-2 mb-4">
                                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                                    <span>
                                                        Your Cart
                                                    </span>
                                                    {/*<span className="badge badge-secondary badge-pill"></span>*/}
                                                </h4>
                                                <ul className="list-group mb-3">
                                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                                        <div>
                                                            <h6 className="my-0">{checkout.main}</h6>
                                                            <small className="text-muted">{checkout.desc}</small>
                                                        </div>
                                                        <span className="text-muted">${checkout.price.toFixed(2)}</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between bg-light">
                                                        <div className="text-success">
                                                            <h6 className="my-0">4Geeks Academy Promo</h6>
                                                            <small>{this.state.discount}% Discount</small>
                                                        </div>
                                                        <span className="text-success">${(this.state.discount/100 * checkout.price.toFixed(2))}</span>
                                                    </li>
                                                    <li className="list-group-item d-flex justify-content-between">
                                                        <span>Total (USD)</span>
                                                        <strong>${(checkout.price.toFixed(2) - this.state.discount/100 * checkout.price.toFixed(2))}</strong>
                                                    </li>
                                                </ul>
                                                <form className="card p-2">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" placeholder="Promo code" />
                                                        <div className="input-group-append">
                                                            <button type="submit" className="btn-sm btn-secondary">Redeem</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 order-md-1">
                                                <form className="needs-validation" noValidate="" _lpchecked="1">
                                                    <h4 className="mb-3">Payment</h4>
                                                    <div className="d-block my-3">
                                                        <div className="custom-control custom-radio">
                                                            <input 
                                                                id="credit" 
                                                                name="paymentMethod" 
                                                                type="radio" 
                                                                className="custom-control-input" 
                                                                required=""
                                                                onChange={(e) => this.setState({paymentMethod: e.target.value})}
                                                                checked 
                                                            />
                                                            <label className="custom-control-label" htmlFor="credit">Credit card</label>
                                                        </div>
                                                        <div className="custom-control custom-radio">
                                                            <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                                            <label className="custom-control-label" htmlFor="debit">Debit card</label>
                                                        </div>
                                                        <div className="custom-control custom-radio">
                                                            <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                                            <label className="custom-control-label" htmlFor="paypal">PayPal</label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="cc_name">Name on card</label>
                                                            <input 
                                                                value={this.state.cc_name} 
                                                                type="text" 
                                                                className="form-control" 
                                                                id="cc_name" 
                                                                placeholder="" 
                                                                required=""
                                                                onChange={(e) => this.setState({cc_name: e.target.value})}
                                                            />
                                                            <small className="text-muted">Full name as displayed on card</small>
                                                            <div className="invalid-feedback">
                                                                Name on card is required
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label htmlFor="cc_number">Credit card number</label>
                                                            <input 
                                                                value={this.state.cc_number}
                                                                type="text" 
                                                                className="form-control" 
                                                                id="cc_number" 
                                                                placeholder="" 
                                                                required=""
                                                                onChange={(e) => this.setState({cc_number: e.target.value})}
                                                            />
                                                            <div className="invalid-feedback">
                                                            Credit card number is required
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3 mb-3">
                                                            <label htmlFor="cc_expiration">Expiration</label>
                                                            <input
                                                                value={this.state.cc_expiration}
                                                                type="text" 
                                                                className="form-control" 
                                                                id="cc_expiration" 
                                                                placeholder="" 
                                                                required=""
                                                                onChange={(e) => this.setState({cc_expiration: e.target.value})}
                                                            />
                                                            <div className="invalid-feedback">
                                                                Expiration date required
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 mb-3">
                                                            <label htmlFor="cc_cvv">CVV</label>
                                                            <input 
                                                                value={this.state.cc_cvv}
                                                                type="text" 
                                                                className="form-control" 
                                                                id="cc_cvv" 
                                                                placeholder="" 
                                                                required=""
                                                                onChange={(e) => this.setState({cc_cvv: e.target.value})}
                                                            />
                                                            <div className="invalid-feedback">
                                                                Security code required
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label></label>
                                                            <Link style={{ textDecoration: 'none' }} to="/create">
                                                                <button className="btn btn-success btn-checkout btn-block" type="submit-disable">Continue</button>
                                                            </Link>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <label></label>
                                                            <Link style={{ textDecoration: 'none' }} to="/plan">
                                                                <button className="btn btn-danger btn-checkout btn-block" type="submit-disable">Cancel</button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <hr className="mb-4" />
                                                    
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            );
                        }
                    }}
                </Consumer>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Checkout;

Checkout.propTypes = {
    title: PropTypes.string,
    main: PropTypes.string,
    price: PropTypes.number,
    desc: PropTypes.string,
    image: PropTypes.string,
    match: PropTypes.object
};