import actions from "../actions";

const initialState = {
    notes: []
}


export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actions.ActionTypes.SAVE_NEW_NOTE:
        return { ...state, notes: [ ...state.notes, { title: payload }] }

    default:
        return state
    }
}
