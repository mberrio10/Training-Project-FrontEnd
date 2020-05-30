import React from 'react';

class SideBar extends React.Component {
    render () {
        return (
            <React.Fragment>
                <aside className="col-md-4 blog-sidebar">
                    <div className="p-4 mb-3 bg-light rounded">
                        <h4 className="font-italic">The Author</h4>
                        <img src="https://firebasestorage.googleapis.com/v0/b/en-equilibrium-photos.appspot.com/o/michael-afonso-3lbxyaAoXbU-unsplash.jpg?alt=media&token=19eacab3-3242-4305-811c-7f491330bce6" style={{padding:15, paddingTop:0}} alt="Responsive image" className="rounded-circle img-fluid"/>
                        <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. 
                            Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                    </div>
                    <div className="p-3">
                        <h4 className="font-italic">Categories</h4>
                        <ol className="list-unstyled">
                            <li style={{paddingBottom: 9}}><a href="#" className="btn btn-outline-danger btn-block" role="button" aria-pressed="true">Excersice</a></li>
                            <li style={{paddingBottom: 9}}><a href="#" className="btn btn-outline-success btn-block" role="button" aria-pressed="true">Yoga</a></li>
                            <li style={{paddingBottom: 9}}><a href="#" className="btn btn-outline-warning btn-block" role="button" aria-pressed="true">Nutrition</a></li>
                        </ol>
                    </div>
                    <div className="p-3">
                        <h4 className="font-italic">Elsewhere</h4>
                        <ol className="list-unstyled">
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ol>
                    </div>
                </aside>
            </React.Fragment>
        );
    }
}

export default SideBar;