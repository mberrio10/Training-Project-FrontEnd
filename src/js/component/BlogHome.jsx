import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class BlogHome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    render () {
        return (
            <div className="container-fluid d-flex align-items-center blogHome">
                <div className="row mb-2 justify-content-around">
                    <div className="col-md-12 px-0" style={{zIndex:"1"}}>
                        <h1 className="display-4 text-center blogTitle">The Latest On My <span>Fitness Blog</span></h1>
                        <p>&nbsp;</p>
                    </div>
                    <div className="row mb-2" style={{zIndex:"1"}}>
                        <div className="col-md-4 workoutHBlog">
                            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static" style={{backgroundColor:"white"}}>
                                    <strong className="d-inline-block mb-2 text-danger">Work Out</strong>
                                    <h3 className="mb-0">The Benefits of Squats</h3>
                                    <div className="mb-1 text-muted">09/22</div>
                                    <p className="card-text mb-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ut nunc at ultricies.</p>
                                    <Link style={{ textDecoration: 'none' }} to={"/post/"+this.props.id}>
                                        <a href="#" className="stretched-link">Continue reading</a>
                                    </Link>
                                </div>
                                <div className="col-auto d-none d-lg-block bgWorkoutImg">
                                    <svg className="bd-placeholder-img" width="200" height="250" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 yogaHBlog">
                            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static" style={{backgroundColor:"white"}}>
                                    <strong className="d-inline-block mb-2 text-warning">Yoga</strong>
                                    <h3 className="mb-0">All About Yoga Flow</h3>
                                    <div className="mb-1 text-muted">09/22</div>
                                    <p className="card-text mb-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ut nunc at ultricies.</p>
                                    <Link style={{ textDecoration: 'none' }} to={"/post/"+this.props.id}>
                                        <a href="#" className="stretched-link">Continue reading</a>
                                    </Link>
                                </div>
                                <div className="col-auto d-none d-lg-block bgYogaImg">
                                    <svg className="bd-placeholder-img" width="200" height="250" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 nutritionHBlog">
                            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static" style={{backgroundColor:"white"}}>
                                    <strong className="d-inline-block mb-2 text-success">Nutrition</strong>
                                    <h3 className="mb-0">Eating Enough Protein</h3>
                                    <div className="mb-1 text-muted">09/22</div>
                                    <p className="mb-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ut nunc at ultricies.</p>
                                    <Link style={{ textDecoration: 'none' }} to={"/post/"+this.props.id}>
                                        <a href="#" className="stretched-link">Continue reading</a>
                                    </Link>
                                </div>
                                <div className="col-auto d-none d-lg-block bgNutritionImg">
                                    <svg className="bd-placeholder-img" width="200" height="250" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogHome;

BlogHome.propTypes = {
    id: PropTypes.number,
    index: PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
    post: PropTypes.string
};