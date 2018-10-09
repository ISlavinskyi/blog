import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import NavBar from '../components/layout/NavBar/NavBar';
import Landing from '../components/layout/Landing';
import Footer from '../components/layout/Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <NavBar/>
                    <Route exact path="/" component={Landing}/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
