import { SET_PARK_ID, SET_RANDOM_NUMBER } from '../constants/actions';

const initialState = {
    parkId: 0,
    randomNumber: 0,
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PARK_ID:
            return {
                ...state,
                parkId: action.payload,
            }
        case SET_RANDOM_NUMBER:
            return {
                ...state,
                randomNumber: action.payload,
            }
        default:
            return state;
    }
}