const initialState = {
    stars: 5,
    facilities: []
};

const actions = {
    'UPDATE_STARS': updateStars,
    'TOGGLE_FACILITIES': toggleFacilities,
};


function updateStars(state, action) {
    return {
        ...state,
        stars: action.payload,
    }
}

function toggleFacilities(state, action) {
    if (state.facilities.includes(action.payload)) {
        return {
            ...state,
            facilities: state.facilities.filter((f) => {
                return f !== action.payload
            })
        }
    } else {
        state.facilities.push(action.payload)

        return {
            ...state,
            facilities: state.facilities
        }
    }


}

export default {
    initialState,
    actions
}