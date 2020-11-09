import {horoscopeSingData} from "../../../constans";

const initialState = {
    horoscopeSingData,
    horoscopeSingSelected: [],
    takeSingHoroscope: [],
    horoscopeDaySelected: 1
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
        case "TAKE_DAY_TABS":
            return {
                ...state,
                horoscopeDaySelected: action.payload
            }
        case "FIND_ZODIAC_SIGN":
            console.log("day - ", action.payload.day);
            console.log("month - ", action.payload.month);
            console.log(horoscopeSingData);
            return {
                ...state
            }
        case "TAKE_SING_HOROSCOPE":
            return {
                ...state,
                takeSingHoroscope: action.payload
            }
        case "CLEAR_LOCAL_STORAGE":
            return {
                ...state,
                takeSingHoroscope: action.payload
            }
        default:
            return state;
    }
};