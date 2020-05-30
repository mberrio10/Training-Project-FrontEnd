import React from 'react';

class Carousel extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="container">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="3" className=""></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img 
                                className="carousel-image first-slide" 
                                src="https://firebasestorage.googleapis.com/v0/b/en-equilibrium-photos.appspot.com/o/jon-ly-VDdWUSSPPeg-unsplash.jpg?alt=media&token=deb42cc6-ef65-4918-8f1c-464df7356c42" 
                                alt="First slide"
                            />
                        </div>
                        <div className="carousel-item">
                            <img 
                                className="carousel-image second-slide" 
                                src="https://firebasestorage.googleapis.com/v0/b/en-equilibrium-photos.appspot.com/o/meghan-holmes-buWcS7G1_28-unsplash.jpg?alt=media&token=bbdf8001-2339-4c2b-8dda-b7f399d33998" 
                                alt="Second slide"
                            />
                        </div>
                        <div className="carousel-item">
                            <img 
                                className="carousel-image third-slide"
                                src="https://firebasestorage.googleapis.com/v0/b/en-equilibrium-photos.appspot.com/o/sippakorn-yamkasikorn-D35YLlQybF4-unsplash.jpg?alt=media&token=96a94643-e31b-4f5f-942d-abc2afd8a7e0" 
                                alt="Third slide"
                            />
                        </div>
                        <div className="carousel-item">
                            <img 
                                className="carousel-image fourth-slide" 
                                src="https://firebasestorage.googleapis.com/v0/b/en-equilibrium-photos.appspot.com/o/anh-nguyen-iaNjZvh3H2w-unsplash.jpg?alt=media&token=b5b27b02-bead-4530-a7d4-980cc470c1bf" 
                                alt="Fourth slide"
                            />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Carousel;