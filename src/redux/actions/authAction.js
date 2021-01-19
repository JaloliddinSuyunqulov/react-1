import axios from "axios";
import {API_PATH, TOKEN_NAME} from "../../tools/constants";
import {toast} from "react-toastify";

export function loginUser(data) {
    axios.post(API_PATH + 'auth/login', data)
        .then((res) => {
            console.log(res);
            localStorage.setItem(TOKEN_NAME, res.data.tokenType + " " + res.data.accessToken);

        })
        .catch((error) => {
            console.log(error);
            toast("Xatolik");
        });
    return {
        type: "",
    }
}