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
        return (
            <div className="container marketing">
                <h2 className="font-italic">Latest Posts</h2>
                <hr/>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">8 Foods That Lower Testosterone Levels</h2>
                        <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus...</p>
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
                            src="https://firebasestorage.googleapis.com/v0/b/en-equilibrium-photos.appspot.com/o/man-641691_640.jpg?alt=media&token=df893444-f4c3-4ee9-90d6-d53e16fa667b"
                        />
                    </div>
                </div>
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">12 Common Workout Mistakes</h2>
                        <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus...</p>
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
                            src="https://firebasestorage.googleapis.com/v0/b/en-equilibrium-photos.appspot.com/o/alora-griffiths-0R67pSlU4e4-unsplash.jpg?alt=media&token=fd8b713b-0b00-4ab6-b87a-15e91c3cd6d6"
                        />
                    </div>
                </div>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">4 Common Yoga Mistakes and How To Avoid Them</h2>
                        <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus...</p>
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
                            src="https://firebasestorage.googleapis.com/v0/b/en-equilibrium-photos.appspot.com/o/jd-mason-xCPdjitY5sQ-unsplash.jpg?alt=media&token=b432a6f3-e040-49ab-8a4a-30eb18aeff8f"
                        />
                    </div>
                </div>
            </div>
        );
        // if((this.props.index % 2) == 0) {
        //     return (
        //         <div className="container marketing">
        //             <div className="row featurette">
        //                 <div className="col-md-7">
        //                     <h2 className="featurette-heading">{this.props.title}</h2>
        //                     <p className="lead">{this.props.desc}</p>
        //                     <Link style={{ textDecoration: 'none' }} to={"/post/"+this.props.id}>
        //                         <button type="button" className="btn btn-info">READ MORE</button>
        //                     </Link>
        //                 </div>
        //                 <div className="col-md-5">
        //                     <img 
        //                         className="featurette-image img-fluid mx-auto" 
        //                         data-holder-rendered="true" 
        //                         data-src="holder.js/500x500/auto" 
        //                         alt="500x500" 
        //                         src={this.props.image}
        //                     />
        //                 </div>
        //             </div>
        //         </div>
        //     );
        // } else {
        //     return (
        //         <div className="container marketing">
        //             <div className="row featurette">
        //                 <div className="col-md-7 order-md-2">
        //                     <h2 className="featurette-heading">{this.props.title}</h2>
        //                     <p className="lead">{this.props.desc}</p>
        //                     <Link style={{ textDecoration: 'none' }} to={"/post/"+this.props.id}>
        //                         <button type="button" className="btn btn-info">READ MORE</button>
        //                     </Link>
        //                 </div>
        //                 <div className="col-md-5 order-md-1">
        //                     <img 
        //                         className="featurette-image img-fluid mx-auto" 
        //                         data-holder-rendered="true" 
        //                         data-src="holder.js/500x500/auto" 
        //                         alt="500x500" 
        //                         src={this.props.image}
        //                     />
        //                 </div>
        //             </div>
        //         </div>
        //     );
        //}
        
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