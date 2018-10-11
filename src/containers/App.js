import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {connect} from "react-redux";


import classes from './App.css';


import Posts from '../components/Posts/Posts';
import Users from '../components/Users/Users';
import NavBar from '../components/layout/NavBar/NavBar';
import Landing from '../components/layout/Landing/Landing';
import Footer from '../components/layout/Footer';
import PostItem from '../components/Posts/PostItem/PostItem';


class App extends Component {
    componentDidMount() {
        const {fetching, onRequestPosts} = this.props;
        if (!fetching) {
             onRequestPosts();
        }
    }

    titleClick = (event, id) => {
        alert(id)
    };

    render() {

        return (
            <Router>
                <div className={classes.App}>
                    <NavBar/>
                    {this.props.error && <p className={classes.Error}>Uh oh - something went wrong!</p>}
                    <Route exact path="/"
                           component={_ => <Landing posts={this.props.updatePosts}/>}
                    />
                    <div className={classes.Container}>
                        <Route exact path="/posts" component={() => <Posts
                            posts={this.props.updatePosts}
                            titleClick={this.titleClick}
                        />}/>
                        <Route exact path="/users" component={() => <Users users={this.props.users}/>}/>
                        <Switch>
                            <Route exact path={`/posts/:postId`} component={(props) => <PostItem {...props}/>}/>
                        </Switch>
                    </div>
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
        users: state.users,
        updatePosts: state.updatePosts,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestPosts: () => dispatch({type: "API_CALL_REQUEST_POSTS"})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

