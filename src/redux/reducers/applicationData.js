import * as type from "../types";

const initialState = {
    subApp: [],
    childApp: [],
    loading: false,
    application_status: false,
    language: 'en',
    language_status: false,
}

export default function applicationData(state = initialState, action) {
    console.log("--reducer", action);
    switch (action.type) {
        case type.GET_SUB_APP_SUCCESS:
            return {
                ...state,
                loading: false,
                subApp: action.subApp
            }
        case type.GET_SUB_APP_REQUESTED:
            return {
                ...state,
                subApp: action.subApp
            }
        case type.SET_APPLICATION_DRP_STATUS:
            return {
                ...state,
                application_status: action.application_status,
            }
        case type.SET_LANGUAGE:
            return {
                ...state,
                language: action.language
            }
        case type.SET_LANGUAGE_DRP_STATUS:
            return {
                ...state,
                language_status: action.language_status,
            }
        default:
            return state;
    }
}