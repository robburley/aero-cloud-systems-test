const initialState = []

const actions = {
    'ADD_HOTEL': addHotel,
};

function addHotel(state, action) {
    return [...state, action.payload]
}

export default {
    initialState,
    actions
}