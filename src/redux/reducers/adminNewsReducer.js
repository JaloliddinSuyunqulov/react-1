import {UPDATE_STATE} from "../actionTypes/adminNewsActionTypes";

const initialState = {
    modalOpen: false,
    selectedImage: "",
    generatedUrl: "",
    subMenus: [],
    news: [],
    selectedNews: {},
    selectedIdForDelete: null,
    deleteModalOpen: false,
    newsByMenu: [],
    oneNews: {}
};

export const adminNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STATE:
            return {...state, ...action.payload};
        default: return state;
    }
};