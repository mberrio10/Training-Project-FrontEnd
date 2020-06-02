import React from "react";

class TrainerAbout extends React.Component {
    render() {
        return (
            <div className="container secAbout">
                <div className="row mxw justify-content-center">
                    <div className="col-md-6">
                        <h3>Your Fitness Coach</h3>
                        <hr/>
                        <p className="text-left lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
                            volutpat ut nunc at ultricies. Cras massa lacus, maximus id ligula 
                            sed, porttitor ultrices magna. Sed sed consequat magna. Integer 
                            vulputate augue metus, a viverra odio tristique ut. Proin 
                            efficitur neque vitae nisi dictum efficitur. In mi leo, finibus 
                            nec porttitor vitae, cursus eu tortor. Nam vitae odio eu neque 
                            scelerisque porttitor. Nulla nisi tellus, scelerisque ultrices 
                            dolor nec, imperdiet vulputate sem.
                        </p>
                    </div>
                    <div className="col-md-3 trainerImg">
                        <img src="https://firebasestorage.googleapis.com/v0/b/en-equilibrium-photos.appspot.com/o/hipcravo-5UbIqV58CW8-unsplash.jpg?alt=media&token=4a4f2960-1159-46e6-a1c5-d0bf710128b6" className="img-fluid" alt="Responsive image"></img>
                    </div>
                    <div className="col-md-3 trainerImg">
                        <img src="https://firebasestorage.googleapis.com/v0/b/en-equilibrium-photos.appspot.com/o/anastase-maragos-DHsdSeCpjRU-unsplash.jpg?alt=media&token=fa037327-3a3f-4b0c-8b32-1eb55d41fc57" className="img-fluid" alt="Responsive image"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrainerAbout;