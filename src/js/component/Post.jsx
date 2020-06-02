import React from 'react';
import { Link } from "react-router-dom";
// import { Consumer } from "../stores/AppContext.jsx";
// import Moment from "moment";
import PropTypes from "prop-types";
import Navbar from "../component/Navbar.jsx";
import SideBar from "../component/SideBar";

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
                <div className="container">
                    <div className="jumbotron jumboImage">
                        <div className="col-md-12 px-0">
                            <img className="bgPostImg" src="https://firebasestorage.googleapis.com/v0/b/en-equilibrium-photos.appspot.com/o/scott-webb-Vn39uEkX00s-unsplash.jpg?alt=media&token=676a5504-d8c1-4271-9e31-ba79a82704ef" />
                        </div>
                    </div>
                    <div className="container p-0">
                        <div className="row">
                            <div className="col-md-8 blog-main-disable">
                                <div className="col-md-12">
                                    {/* <div className="videoWrapper">
                                        <iframe 
                                            src={"" + post.meta_keys.video +  "?rel=0&showinfo=0&autoplay=0&controls=1&modestbranding=1"}
                                            frameBorder="0"
                                            allowFullScreen
                                        >
                                        </iframe>
                                    </div> */}
                                </div>
                                <br />
                                <div className="col-md-12 blog-post">
                                    <h2 className="blog-post-title">All you need to know to start Training</h2>
                                    <p className="blog-post-meta font-italic">
                                        September 22, 2018 by En Equilibrium
                                    </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ut nunc at ultricies. 
                                        Cras massa lacus, maximus id ligula sed, porttitor ultrices magna. Sed sed consequat magna. 
                                        Integer vulputate augue metus, a viverra odio tristique ut. Proin efficitur neque vitae nisi dictum efficitur. 
                                        In mi leo, finibus nec porttitor vitae, cursus eu tortor. Nam vitae odio eu neque scelerisque porttitor. 
                                        Nulla nisi tellus, scelerisque ultrices dolor nec, imperdiet vulputate sem. 
                                        Quisque elit tortor, sagittis ac turpis sit amet, molestie maximus quam. Aliquam in dui ut enim malesuada tincidunt. 
                                        Morbi id libero vel eros vulputate euismod a non lacus. Duis cursus dolor fringilla sagittis dignissim. 
                                        Praesent gravida ante vitae consectetur dapibus. Vivamus quis justo at tellus ullamcorper vehicula quis eu orci. 
                                        In ultrices, dui eget euismod tempus, ante turpis vestibulum ipsum, sit amet elementum augue ligula at est. 
                                        Ut eget condimentum nisi, non cursus quam.
                                        <br/>
                                        <br/>
                                        Sed mi augue, placerat nec vehicula vitae, porta vitae odio. Donec nec libero sed risus varius placerat. 
                                        Proin ligula est, ultricies vel velit non, lobortis molestie magna. Maecenas a velit maximus quam ornare aliquet. 
                                        Praesent accumsan a nisl ut congue. In at dictum ex. Nullam condimentum fermentum molestie. Nunc libero nisl, fermentum eu ultricies id, 
                                        ullamcorper at turpis. In commodo augue nisi, in facilisis velit eleifend vitae. Vestibulum ante ipsum primis in 
                                        faucibus orci luctus et ultrices posuere cubilia curae; Nam at nunc massa. Duis ultrices quis mi in pharetra. 
                                        Proin blandit eget lacus at posuere.</p>
                                    <Link style={{ textDecoration: 'none' }} to="/blog">
                                        <button type="button" className="btn btn-info">SEE MORE POSTS</button>
                                    </Link>
                                    <p></p>
                                </div>
                            </div>
                            <SideBar />
                        </div>
                    </div>
                </div>
                {/* <Consumer>
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
                                                <div className="p-4 mb-3 bg-light rounded">
                                                    <h4 className="font-italic">About</h4>
                                                    <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. 
                                                        Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
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
                </Consumer> */}
                <footer className="mastfoot mt-auto text-center">
                    <div className="inner">
                        <p className="footerStyle text-muted">© 2018 En Equilibrium Blog, Website created by<a href="https://www.linkedin.com/in/mikeberrio">{" "}Mike Berrio</a>.</p>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Post;

Post.propTypes = {
    match: PropTypes.object
};