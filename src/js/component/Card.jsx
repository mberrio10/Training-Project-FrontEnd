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
            <div className="container p-0">
                <h2 className="font-italic">Other Posts</h2>
                <hr/>
                <div className="row">
                    <div className="col-md-4 mt-2 mb-4">
                        <div className="card border-0 card-cascade wider">
                            <div className="view view-cascade">
                                <img src="https://firebasestorage.googleapis.com/v0/b/en-equilibrium-photos.appspot.com/o/dumbbell-1966702_640.jpg?alt=media&token=5ac8944f-3768-497d-a5c9-daaef7f78ed8" className="card-img-top"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div className="mt-3 p-0 text-center card-body card-body-cascade">
                                <h4 className="card-title">Maximize Your Dumbbell Rutine</h4>
                                <p className="lead">
                                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                                </p>                      
                            </div>
                            <div className="p-0 card-footer bg-transparent border-0">
                                <div className="p-0 text-center">
                                    <Link style={{ textDecoration: 'none' }} to={"/post/"+this.props.id}>
                                        <button type="button" className="btn btn-info text-center mb-3">READ MORE</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-2 mb-4">
                        <div className="card border-0 card-cascade wider">
                            <div className="view view-cascade">
                                <img src="https://firebasestorage.googleapis.com/v0/b/en-equilibrium-photos.appspot.com/o/bruce-mars-jY-GlbKeTDs-unsplash.jpg?alt=media&token=98c1bfa4-f612-413c-be2c-0bf2fc05937e" className="card-img-top"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div className="mt-3 p-0 text-center card-body card-body-cascade">
                                <h4 className="card-title">Exercises to Build a Strong & Sexy Booty</h4>
                                <p className="lead">
                                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                                </p>                      
                            </div>
                            <div className="p-0 card-footer bg-transparent border-0">
                                <div className="p-0 text-center">
                                    <Link style={{ textDecoration: 'none' }} to={"/post/"+this.props.id}>
                                        <button type="button" className="btn btn-info text-center mb-3">READ MORE</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-2 mb-4">
                        <div className="card border-0 card-cascade wider">
                            <div className="view view-cascade">
                                <img src="https://firebasestorage.googleapis.com/v0/b/en-equilibrium-photos.appspot.com/o/crossfit-534615_1920.jpg?alt=media&token=8e86e55e-4390-4458-a77a-afecad081fc5" className="card-img-top"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            <div className="mt-3 p-0 text-center card-body card-body-cascade">
                                <h4 className="card-title">Squat Depth: How Deep Should You Squat?</h4>
                                <p className="lead">
                                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                                </p>                      
                            </div>
                            <div className="p-0 card-footer bg-transparent border-0">
                                <div className="p-0 text-center">
                                    <Link style={{ textDecoration: 'none' }} to={"/post/"+this.props.id}>
                                        <button type="button" className="btn btn-info text-center mb-3">READ MORE</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // <div className="col-md-4 mt-2 mb-4">
            //     <div className="card border-0 card-cascade wider">
            //         <div className="view view-cascade">
            //             <img src={"" + this.props.image + ""} className="card-img-top"/>
            //             <a href="#!">
            //                 <div className="mask rgba-white-slight"></div>
            //             </a>
            //         </div>
            //         <div className="mt-3 p-0 text-center card-body card-body-cascade">
            //             <h4 className="card-title">{this.props.title}</h4>
            //             <p></p>
            //             {/*
            //             <p className="mt-2">
            //                 #{this.props.category}
            //             </p>
            //             */}
            //         </div>
            //         {/*
            //         <div className="card-text p-3 bg-transparent">{this.props.desc}</div>
            //         */}
            //         <div className="p-0 card-footer bg-transparent border-0">
            //             <div className="p-0 text-center">
            //                 <Link style={{ textDecoration: 'none' }} to={"/post/"+this.props.id}>
            //                     <button type="button" className="btn btn-info text-center mb-3">READ MORE</button>
            //                 </Link>
            //             </div>
            //         </div>
            //     </div>
            // </div>
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