import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App6 from './App6';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component{

    render() {
        return (
            <Router>
                <Provider store={store}>
                    <div>
                        <Route exact path="/" component={App6}/>
                        <Route exact path="/App6" component={App6}/>
                    </div>
                </Provider>
            </Router>
        );
    }
}

export default App;
