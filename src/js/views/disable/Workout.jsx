import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import Navbar from "../component/Navbar.jsx";
import Card from "../component/Card.jsx";
import Footer from "../component/Footer.jsx";

class Workouts extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <h1 className="py-2 text-center">WORKOUT</h1>
                <p className="py-2 text-center">“Wake Up. Work Out. Look Hot. Kick Ass”</p>
                <div className="container">
                    <div className="container p-0">
                        <div className="row">
                            <Consumer>
                                {({ state }) => (
                                    state.workouts.map((item, index) => {
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

export default Workouts;