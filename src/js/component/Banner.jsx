import React from "react";
import bgBanner from "../../img/bg-banner.jpg";

class Banner extends React.Component {
	render() {
		return (
            <div className="jumbotron text-white">
                <div className="container-fluid">
                    <div className="row mb-2 justify-content-start">
                        <img className="bgBanner" src={bgBanner} />
                        <div className="col-lg-7 px-0">
                            <h1 className="display-4 text-left nameTitle">
                                Hey! I`m Mike B. <br />
                                <span>Full Stack Web Developer</span>
                            </h1>
                            <p className="lead my-3 text-left font-italic descTitle">
                                Here to make your bussines Groovy!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}
export default Banner;