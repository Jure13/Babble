import { SET_PARK_ID, SET_RANDOM_NUMBER } from '../constants/actions';

export const setParkIdAction = (newId: number) => (dispatch: any) => {
    dispatch({
        type: SET_PARK_ID,
        payload: newId,
    })
}
export const setRandomNumberAction = (newNumber: number) => (dispatch: any) => {
    dispatch({
        type: SET_RANDOM_NUMBER,
        payload: newNumber,
    })
}

