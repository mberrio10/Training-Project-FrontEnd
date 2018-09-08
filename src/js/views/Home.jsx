import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import Carousel from "../component/Carousel.jsx";
import Featurette from "../component/Featurette.jsx";

class Home extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <Carousel />
                <Consumer>
                    {({ state }) => (
                        state.blogs.map((item, index) => {
                            while (index < 3) {
                                return (
                                    <Featurette 
                                        key={index}
                                        index={index}
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
                            }
                        })
                    )}
                </Consumer>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;