import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import Navbar from "../component/Navbar.jsx";
import Card from "../component/Card.jsx";
import Footer from "../component/Footer.jsx";

class Yoga extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <h1 className="py-2 text-center">YOGA</h1>
                <p className="py-2 text-center">“Yoga means addition – addition of energy, strength and beauty to body, mind and soul.”</p>
                <div className="container">
                    <div className="container p-0">
                        <div className="row">
                            <Consumer>
                                {({ state }) => (
                                    state.yoga.map((item, index) => {
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

export default Yoga;