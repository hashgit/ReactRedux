import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import promise from "redux-promise-middleware";
import reducer from "./reducers/main";
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { browserHistory } from "react-router";


const middleware = applyMiddleware(promise(), logger(), routerMiddleware(browserHistory));
const reducers = combineReducers({
    reducer,
    routing: routerReducer
  });
export default createStore(reducers, middleware);
