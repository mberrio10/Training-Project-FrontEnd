import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import Navbar from "../component/Navbar.jsx";
import Shop from "../component/Shop.jsx";
    
class Plan extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <p>&nbsp;</p>
                <div className="container">
                    <div className="card-deck mb-3 text-center">
                        <Consumer>
                            {({ state }) => (
                                state.plans.map((item, index) => {
                                    return (
                                        <Shop 
                                            key={index}
                                            id={item.ID}
                                            title={item.title}
                                            main={item.main}
                                            price={item.price}
                                            desc={item.desc}
                                            image={item.image}
                                        />
                                    );
                                })
                            )}
                        </Consumer>
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

export default Plan;