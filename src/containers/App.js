import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {connect} from "react-redux";


import classes from './App.css';

import NavBar from '../components/layout/NavBar/NavBar';
import Landing from '../components/layout/Landing/Landing';
import Footer from '../components/layout/Footer';


class App extends Component {
    render() {

        const {fetching, posts, onRequestPosts, error} = this.props;

        return (
            <Router>
                <div className={classes.App}>
                    <NavBar/>
                    <Route exact path="/"
                           component={_ => <Landing posts={posts}/>}
                    />
                    {fetching ? (
                        <button disabled>Fetching...</button>
                    ) : (
                        <button onClick={onRequestPosts}>get posts</button>
                    )}

                    <Footer/>
                </div>
            </Router>
        );
    }
}


const mapStateToProps = state => {
    console.log(state)
    return {
        fetching: state.fetching,
        posts: state.posts,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestPosts: () => dispatch({type: "API_CALL_REQUEST"})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

