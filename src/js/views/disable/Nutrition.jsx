import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import Navbar from "../component/Navbar.jsx";
import Card from "../component/Card.jsx";
import Footer from "../component/Footer.jsx";

class Nutrition extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <h1 className="py-2 text-center">NUTRITION</h1>
                <p className="py-2 text-center">“To eat is a necessity, but to eat intelligently is an art.”</p>
                <div className="container">
                    <div className="container p-0">
                        <div className="row">
                            <Consumer>
                                {({ state }) => (
                                    state.nutrition.map((item, index) => {
                                        return (
                                            <Card 
                                                key={index}
                                                ID={item.ID}
                                                title={item.title}
                                                description={item.description}
                                                image={item.img600x400}
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

export default Nutrition;