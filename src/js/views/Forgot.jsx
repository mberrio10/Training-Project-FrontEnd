import React from 'react';
import Navbar from '../component/Navbar.jsx';

class Forgot extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <main className="py-4 pl-1">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="card">
                                    <div className="card-header bg-dark">RESET PASSWORD</div>
                                    <div className="card-body">
                                        <form method="POST" action="./forgot">
                                            <input type="hidden" name="_token" value="h51GZO8hFTrBOqnEXYDZmJJlE9vHD1sNyS6dgM6p" />
                                            <div className="form-group row">
                                                <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                                <div className="col-md-6">
                                                    <input id="login-email" type="email" className="form-control" name="email" value="" required="" autoComplete="off" style={{ backgroundImage: 'url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;' }} />
                                                </div>
                                            </div>
                                            <div className="form-group row mb-0">
                                                <div className="col-md-6 offset-md-4">
                                                    <button type="submit" className="btn btn-outline-primary" id="btn-pwd-reminder">
                                                        Send Password Reset Link
                                                    </button>
                                                </div>
                                                <div className="col-md-6 offset-md-4 pwd-reset-input-feedback">
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default Forgot;