import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import Navbar from "../component/Navbar.jsx";
import Card from "../component/Card.jsx";
import Footer from "../component/Footer.jsx";

class Blog extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <p>&nbsp;</p>
                {/*
                <h1 className="py-2 text-center">BLOG</h1>
                */}
                <div className="container">
                    <div className="container p-0">
                        <div className="row">
                            <Consumer>
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
                            </Consumer>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Blog;