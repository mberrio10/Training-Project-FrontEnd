import React from 'react';
import PropTypes from "prop-types";

class Post extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <React.Fragment>
                
            </React.Fragment>
        );
    }
}

export default Post;

Post.propTypes = {
    prop_name: PropTypes.type_of_the_prop
};