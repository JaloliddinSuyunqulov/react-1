import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducers} from "./redux/reducers/rootReducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../src/components/main.scss';
import thunk from "redux-thunk";
const store = createStore(rootReducers, compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,
  document.getElementById('root')
);

reportWebVitals();
