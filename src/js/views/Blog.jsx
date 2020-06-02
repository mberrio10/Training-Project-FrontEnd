import React from 'react';
//import { Consumer } from "../stores/AppContext.jsx";
import Navbar from "../component/Navbar.jsx";
import Carousel from "../component/Carousel.jsx";
import FeaturePost from "../component/FeaturePost";
import Featurette from "../component/Featurette.jsx";
import Card from "../component/Card.jsx";
import SideBar from "../component/SideBar";

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
                            <SideBar/>
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
                        </div>
                    </div>
                </div>
                <footer className="mastfoot mt-auto text-center">
                    <div className="inner">
                        <p className="footerStyle text-muted">
                            © 2018 En Equilibrium Blog, Website created by
                            <a href="https://www.linkedin.com/in/mikeberrio">
                                {" "}
                                Mike Berrio
                            </a>
                            .
                        </p>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Blog;