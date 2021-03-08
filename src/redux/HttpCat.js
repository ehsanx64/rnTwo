const SET_MYCAT_NAME = 'SET_MYCAT_NAME';

let initialState = {
    myCat: {
        name: 'Benny'
    }
}

export const HttpCatReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_MYCAT_NAME:
        let myCat = state.myCat;
        myCat = { ...myCat, ...{
            name: action.payload
        }};
        let res = { ...state, ...{ myCat }};
        return res;
        break;
    default:
        return state;
    }
}


export const setMyCatName = (name) => ({ 
    type: SET_MYCAT_NAME,
    payload: name 
});