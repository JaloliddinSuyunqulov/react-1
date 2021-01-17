import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducers} from "./redux/reducers/rootReducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/components/main.scss';
const store = createStore(rootReducers);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,
  document.getElementById('root')
);

reportWebVitals();
