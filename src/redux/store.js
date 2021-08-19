import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index"
import createSagaMiddleware from "redux-saga";
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));
//const store = compose(applyMiddleware(sagaMiddleware), window.devToolsExtension && window.devToolsExtension())(createStore)(rootReducer);
sagaMiddleware.run(rootSaga);
export default store;