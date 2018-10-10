import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {connect} from "react-redux";


import classes from './App.css';

import NavBar from '../components/layout/NavBar/NavBar';
import Landing from '../components/layout/Landing/Landing';
import Footer from '../components/layout/Footer';


class App extends Component {
    componentWillMount() {
        console.log(this.props)
        const {fetching, onRequestPosts, error} = this.props;
        if (!fetching) {
            onRequestPosts();
        }
    }

    render() {

        return (
            <Router>
                <div className={classes.App}>
                    <NavBar/>
                    {this.props.error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
                    <Route exact path="/"
                           component={_ => <Landing posts={this.props.updatePosts}/>}
                    />
                    <Footer/>
                </div>
            </Router>
        );
    }
}


const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        posts: state.posts,
        updatePosts: state.updatePosts,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestPosts: () => dispatch({type: "API_CALL_REQUEST"})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

