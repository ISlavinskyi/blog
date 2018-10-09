import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import classes from './App.css';

import NavBar from '../components/layout/NavBar/NavBar';
import Landing from '../components/layout/Landing/Landing';
import Footer from '../components/layout/Footer';

class App extends Component {

    state = {
        posts: []

    };

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => this.setState({
                posts
            }))
    };

    render() {

        return (
            <Router>
                <div className={classes.App}>
                    <NavBar/>
                    <Route exact path="/"
                           component={_ => <Landing posts={this.state.posts}/>}
                    />
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
