import {horoscopeSingData} from "../../../constans";

const initialState = {
    horoscopeSingData,
    horoscopeSingSelected: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SING_DATA":
            return {
                ...state,
                horoscopeSingData
            }
        case "TAKE_SING_ID":
            return {
                ...state,
                horoscopeSingSelected: action.payload
            }
        default:
            return state;
    }
};