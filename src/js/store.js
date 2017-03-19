import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import axios from "axios";
import promise from "redux-promise-middleware";
import reducer from "./reducers/main";

const middleware = applyMiddleware(promise(), logger());
export default createStore(reducer, middleware);
