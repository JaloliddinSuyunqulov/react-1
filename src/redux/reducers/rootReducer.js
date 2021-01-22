import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {adminNewsReducer} from "./adminNewsReducer";

export const rootReducers = combineReducers({
    login: loginReducer,
    news: adminNewsReducer
});