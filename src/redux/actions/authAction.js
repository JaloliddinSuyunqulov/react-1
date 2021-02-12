import axios from "axios";
import {API_PATH, TOKEN_NAME} from "../../tools/constants";
import {toast} from "react-toastify";
import {LOGIN} from "../actionTypes/authType";
import {CHANGE_LOADING} from "../actionTypes/changeLoadingType";

export function loginUser(data, history) {
    return function (dispatch){
        dispatch({type: LOGIN});
        axios.post(API_PATH + 'auth/login', data)
            .then((res) => {
                localStorage.setItem(TOKEN_NAME, res.data.tokenType + " " + res.data.accessToken);
                dispatch({type: LOGIN});
                history.push('/admin');
                dispatch({type: CHANGE_LOADING, payload: {pageLoading: false}});
            })
            .catch((error) => {
                toast.error('Xatolik');
                dispatch({type: LOGIN});
            });
    };
}