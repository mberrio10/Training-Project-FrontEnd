import React from "react";

class FeaturePost extends React.Component {
    render () {
        return (
            <React.Fragment>
                <h3 className="pb-4 mb-4 font-italic border-bottom">
                    Feature Post
                </h3>
                <img src="https://firebasestorage.googleapis.com/v0/b/en-equilibrium-photos.appspot.com/o/hipcravo-eFx1KZhaSvo-unsplash.jpg?alt=media&token=215dc8d5-f9de-4b36-9da9-b45c12e6dbe0" className="img-fluid" alt="Responsive image"></img>
                <div className="col-md-8 px-0">
                    <p className="blog-post-meta font-italic">
                        September 22, 2018 by En Equilibrium
                    </p>
                    <h2 className="font-italic">Tiltle Blog Post</h2>
                    <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                    <p className="lead mb-0"><a href="#" className="font-weight-bold">Continue reading...</a> </p>
                </div>
                <p>&nbsp;</p>
            </React.Fragment>
        );
    }
}
export default FeaturePost;