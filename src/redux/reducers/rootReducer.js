import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {adminNewsReducer} from "./adminNewsReducer";
import {adminMenusReducer} from "./adminMenusReducer";
import {appReducer} from "./appReducer";

export const rootReducers = combineReducers({
    login: loginReducer,
    news: adminNewsReducer,
    menu: adminMenusReducer,
    app: appReducer
});