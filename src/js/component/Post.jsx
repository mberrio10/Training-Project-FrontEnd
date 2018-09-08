import React from 'react';
import { Link } from "react-router-dom";
import { Consumer } from "../stores/AppContext.jsx";
import Moment from "moment";
import PropTypes from "prop-types";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";

class Post extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <p>&nbsp;</p>
                {/*
                <h1 className="py-2 text-center">POST</h1>
                */}
                <Consumer>
                    {({ state }) => {
                        const post = state.blogs.find( post => post.ID === parseInt(this.props.match.params.theid) );
                        if (!post) { 
                            return(<p>Loading...</p>);
                        } 
                        
                        else { 
                            return (
                                <div className="container">
                                    <div className="container p-0">
                                        <div className="row">
                                            <div className="col-md-8 blog-main-disable">
                                                <div className="col-md-12">
                                                    <div className="videoWrapper">
                                                        <iframe 
                                                            src={"" + post.meta_keys.video +  "?rel=0&showinfo=0&autoplay=0&controls=1&modestbranding=1"}
                                                            frameBorder="0"
                                                            allowFullScreen
                                                        >
                                                        </iframe>
                                                        {/*
                                                        <h1 className="display-4 font-italic">Title of the post</h1>
                                                        */}
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="col-md-12 blog-post">
                                                    <h2 className="blog-post-title">{post.post_title}</h2>
                                                    <p className="blog-post-meta">
                                                        {Moment(post.post_date).format("dddd, MMMM Do YYYY")} by AUTHOR.ID
                                                    </p>
                                                    <p>{post.post_content}</p>
                                                    <Link style={{ textDecoration: 'none' }} to="/blog">
                                                        <button type="button" className="btn btn-info">SEE MORE POSTS</button>
                                                    </Link>
                                                    <p></p>
                                                </div>
                                            </div>
                                            <aside className="col-md-4 blog-sidebar">
                                                {/*
                                                <div className="p-3 mb-3 bg-light rounded">
                                                    <h4 className="font-italic">About</h4>
                                                    <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                                                </div>
                                                */}
                                                <div className="p-3">
                                                    <h4 className="font-italic">Archives</h4>
                                                    <ol className="list-unstyled mb-0">
                                                        <li><a href="#">March 2014</a></li>
                                                        <li><a href="#">February 2014</a></li>
                                                        <li><a href="#">January 2014</a></li>
                                                        <li><a href="#">December 2013</a></li>
                                                        <li><a href="#">November 2013</a></li>
                                                        <li><a href="#">October 2013</a></li>
                                                        <li><a href="#">September 2013</a></li>
                                                        <li><a href="#">August 2013</a></li>
                                                        <li><a href="#">July 2013</a></li>
                                                        <li><a href="#">June 2013</a></li>
                                                        <li><a href="#">May 2013</a></li>
                                                        <li><a href="#">April 2013</a></li>
                                                    </ol>
                                                </div>
                                                <div className="p-3">
                                                    <h4 className="font-italic">Elsewhere</h4>
                                                    <ol className="list-unstyled">
                                                        <li><a href="#">GitHub</a></li>
                                                        <li><a href="#">Twitter</a></li>
                                                        <li><a href="#">Facebook</a></li>
                                                    </ol>
                                                </div>
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    }}
                </Consumer>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Post;

Post.propTypes = {
    match: PropTypes.object
};