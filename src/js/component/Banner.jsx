import React from "react";
import bgBanner from "../../img/bg-banner.jpg";

class Banner extends React.Component {
    render() {
        return (
            <div className="jumbotron banner text-white">
                <div className="container-fluid">
                    <div className="row mb-2 justify-content-around">
                        <img className="bgBanner" src={bgBanner} />
                        <div className="col-lg-7 px-0">
                            <h1 className="display-4 text-left nameTitle">
                                Put Your Body And Mind <br />
                                <span>In Equilibrium</span>
                            </h1>
                            <p className="lead my-3 text-left font-italic descTitle">
                                Personal Training, Yoga and Nutrition!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Banner;