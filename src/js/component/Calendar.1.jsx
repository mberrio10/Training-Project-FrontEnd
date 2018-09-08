import React from 'react';
import { withSession } from '../stores/AppContext.jsx';
import { Consumer } from "../stores/AppContext.jsx";
import PropTypes from "prop-types";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";

class Calendar extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        const numbers = [0,1,2];
        const listItems = numbers.map((number) =>{
            <li key={number.toString()}>
                {number}
            </li>;
            });
        return (
            <React.Fragment>
                <Navbar />
                <p>&nbsp;</p>
                <ul>{listItems}</ul>
                {/*
                <h1 className="py-2 text-center">POST</h1>
                */}
                <Consumer>
                    {({ state }) => {
                        const member = state.members.find( member => member.ID === parseInt(this.props.match.params.theid) );
                        if (member === undefined) { 
                            return(<p>Loading...</p>);
                        } 
                        else {
                            // let workouts1 = [0,1,2];
                            // console.log(typeof(workouts1));
                            // console.log(workouts1);
                            for (var i=0; i < member.meta_keys.monday.length; i++) {
                                // workouts[i] = state.workouts.find( workout => workout.ID === parseInt(member.meta_keys.monday[i]));
                                console.log(parseInt(member.meta_keys.monday[i]));
                                console.log(typeof(parseInt(member.meta_keys.monday[i])));
                                // workouts.push(member.meta_keys.monday[i]);
                            }
                            // console.log(typeof(workouts));
                            // console.log(workouts);
                            // console.log('done');
                            // workouts1.map((item, index) => {
                            //     return (
                            //         <h1 key={index.toString()}>Hello {item}</h1>
                            //     );
                            // });
                            // return (
                            //     <div className="container">
                            //         <div className="container p-0">
                            //             <div className="row">
                            //                 <div className="col-md-8 blog-main-disable">
                            //                     <br />
                            //                     <div className="col-md-12 blog-post">
                            //                         <h2 className="blog-post-title">{post.post_title}</h2>
                            //                         <p className="blog-post-meta">
                            //                             {Moment(post.post_date).format("dddd, MMMM Do YYYY")} by AUTHOR.ID
                            //                         </p>
                            //                         <p>
                            //                             {post.meta_keys.monday[0]}
                            //                         </p>
                            //                         <Link style={{ textDecoration: 'none' }} to="/blog">
                            //                             <button type="button" className="btn btn-info">SEE MORE POSTS</button>
                            //                         </Link>
                            //                         <p></p>
                            //                     </div>
                            //                 </div>
                            //             </div>
                            //         </div>
                            //     </div>
                            // );
                        }
                    }}
                </Consumer>
                <Footer />
            </React.Fragment>
        );
    }
}

export default withSession(Calendar);

Calendar.propTypes = {
    match: PropTypes.object
};