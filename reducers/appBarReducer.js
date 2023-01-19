const INITIAL_STATE = {title: 'Bank.ly'}

function appBarReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_TITLE":
            return {...state, title: action.data}
        default:
            return state
    }
}

export default appBarReducer