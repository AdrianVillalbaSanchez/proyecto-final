import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    GET_PROFILES
} from '../actions/types';

const initialState = {
    profile: null,
    profiles: [],
    events: [],
    loading: true,
    errors: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            };

        case GET_PROFILES:
            return {
                ...state,
                profiles: payload,
                loading: false
            };
        case PROFILE_ERROR:
            return {
                ...state,
                errors: payload,
                loading: false
            };

        case CLEAR_PROFILE: {
            return {
                ...state,
                profile: null,
                loading: false
            };
        }

        default:
            return state;
    }
}