let initialState = {
    user: {}
};

const SET_USER = 'SET_USER'

export function setUser(user){
    return {
        type: SET_USER,
        payload: user
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case SET_USER:
            return {user: action.payload}
        default:
            return state
    }
}