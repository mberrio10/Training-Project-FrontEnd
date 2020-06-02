import React from "react";
import Gym from "../../img/gym.png";
import Yoga from "../../img/yoga.png";
import Nutrition from "../../img/nutrition.png";

class TrainingServicesCard extends React.Component {
    render () {
        return (
            <div className="container trainingServsCard">
                <div className="row justify-content-center">
                    <div className="card-deck servsCard text-center">
                        <div className="card">
                            <img src="gym.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Personal Training</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="yoga.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Yoga Class</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="nutrition.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Nutrition</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrainingServicesCard;