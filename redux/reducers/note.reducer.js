import actions from "../actions";

const initialState = {
    notes: [
        {title: 'a'},
        {title: 'b'},
        {title: 'c'}
    ]
}


export default (state = initialState, { type, payload }) => {
    switch (type) {

    case '':
        return { ...state }

    default:
        return state
    }
}
