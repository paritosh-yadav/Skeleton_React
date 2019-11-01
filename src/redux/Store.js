import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../screens/RootReducers";
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

export default compose(applyMiddleware(...middlewares))(createStore)(rootReducer);
