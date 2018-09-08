import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';

class ProgressPhoto extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3">
                <div className="card-header text-white bg-dark border-dark">PROGRESS PHOTOS:
                    <button type="button" className="btn btn-secondary btn-sm float-right">
                        <FontAwesomeIcon className="fa-lg" icon={faCog} />
                    </button>
                </div>
                <div className="card-body text-dark">
                    <div className="row">
                        <div className="col-md-4 mb-1"><img src="../img/no-photo-headshot.jpg" className="card-img-top"/></div>
                        <div className="col-md-4 mb-1"><img src="../img/no-photo-headshot.jpg" className="card-img-top"/></div>
                        <div className="col-md-4 mb-1"><img src="../img/no-photo-headshot.jpg" className="card-img-top"/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProgressPhoto;