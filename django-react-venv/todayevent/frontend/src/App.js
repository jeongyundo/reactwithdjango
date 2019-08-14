import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App6 from './App6';


class App extends Component{

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={App6}/>
                    <Route exact path="/App6" component={App6}/>
                </div>
            </Router>
        );
    }
}

export default App;
