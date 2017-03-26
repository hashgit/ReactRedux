import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
import Result from "./components/Result";
import Form from "./components/Form";

import { Provider } from "react-redux";
import store from "./store";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store)
const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Layout }>
                <IndexRoute component={Form}></IndexRoute>
                <Route path="result" component={Result} />
            </Route>
        </Router>
    </Provider>,
    app);
