import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import Navbar from "../component/Navbar.jsx";
import Carousel from "../component/Carousel.jsx";
import FeaturePost from "../component/FeaturePost";
import Featurette from "../component/Featurette.jsx";
import Card from "../component/Card.jsx";

class Blog extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <Carousel />
                <p>&nbsp;</p>
                <div className="container">
                    <div className="container p-0">
                        <div className="row">
                            <div className="col-md-8 blog-main">
                                <FeaturePost/>
                                <Featurette/>
                                <Card/>
                            </div>
                            {/* <Consumer>
                                {({ state }) => (
                                    state.blogs.map((item, index) => {
                                        return (
                                            <Card 
                                                key={index}
                                                id={item.ID}
                                                title={item.post_title}
                                                desc={item.post_content}
                                                // category={item.category[0].name}
                                                image={item.meta_keys.image}
                                                // post={item.post_date}
                                                // image={item.thumbnail[0]}
                                                // image={item.meta_keys.video}
                                            />
                                        );
                                    })
                                )}
                            </Consumer> */}
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
            </React.Fragment>
        );
    }
}

export default Blog;