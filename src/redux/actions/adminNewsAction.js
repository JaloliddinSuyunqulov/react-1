import {UPDATE_STATE} from "../actionTypes/adminNewsActionTypes";

export function updateState (data) {
    return {
        type: UPDATE_STATE,
        payload: data
    }
}