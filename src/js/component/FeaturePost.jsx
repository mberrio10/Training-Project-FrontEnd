import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class FeaturePost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    render () {
        return (
            <React.Fragment>
                <h3 className="pb-4 mb-4 font-italic border-bottom">
                    Feature Post
                </h3>
                <img src="https://firebasestorage.googleapis.com/v0/b/en-equilibrium-photos.appspot.com/o/hipcravo-eFx1KZhaSvo-unsplash.jpg?alt=media&token=215dc8d5-f9de-4b36-9da9-b45c12e6dbe0" className="img-fluid featureImg" alt="Responsive image"></img>
                <div className="col-md-12 px-0">
                    <p className="blog-post-meta font-italic">
                        September 22, 2018 by En Equilibrium
                    </p>
                    <h2 className="font-italic">Preparing for Heavy Lifting</h2>
                    <p className="lead my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ut nunc at ultricies. 
                        Cras massa lacus, maximus id ligula sed, porttitor ultrices magna.</p>
                    <Link style={{ textDecoration: 'none' }} to={"/post/"+this.props.id}>
                        <p className="lead mb-0"><a href="#" className="font-weight-bold">Continue reading...</a> </p>
                    </Link>    
                </div>
                <p>&nbsp;</p>
            </React.Fragment>
        );
    }
}
export default FeaturePost;

FeaturePost.propTypes = {
    id: PropTypes.number,
    index: PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
    post: PropTypes.string
};