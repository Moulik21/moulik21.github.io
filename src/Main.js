import React, { Component } from 'react';
import {
    NavLink,
    Route,
    HashRouter
} from 'react-router-dom';

import ReactGA from 'react-ga';
import withTracker from './withTracker';
import { withCookies } from 'react-cookie';

import Homepage from './Components/Homepage';
import Social from './Components/Social';
import Resume from './Components/Resume';


ReactGA.initialize('G-KQ911JY8FG');

function fireTracking() {
    ReactGA.pageview(window.location.pathname + window.location.search);
}

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { cookies } = this.props;
        return (
            <HashRouter basename={process.env.PUBLIC_URL} onUpdate={fireTracking}>
                <div>
                    <div className="content">
                        <ul className="header">
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink exact to="/resume">Resume</NavLink></li>
                        </ul>
                        <h1>Moulik Gaglani</h1>
                        <Social />

                       <Route exact path="/" component={withTracker(Homepage)} /> 
                       <Route exact path="/resume" component={withTracker(Resume)} />

                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default withCookies(Main);
