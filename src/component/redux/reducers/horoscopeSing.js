import {horoscopeSingData} from "../../../constans";

const initialState = {
    horoscopeSingData,
    horoscopeSingSelected: [],
    takeSingHoroscope: [],
    horoscopeDaySelected: 1,
    selectToDayMonth: ""
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
            let payloadDate = parseInt(`${action.payload.month}${action.payload.day}`);
            payloadDate = isNaN(payloadDate) ? 0 : payloadDate;
            return {
                ...state,
                selectToDayMonth: horoscopeSingData.filter(item =>
                    payloadDate >= parseInt(`${item.fromMonth}${item.fromDay}`) &&
                    payloadDate <= parseInt(`${item.untilMonth}${item.untilDay}`)
                ),
                horoscopeSingData: horoscopeSingData.map(item => {
                    return {
                        ...item,
                        classBlur: false
                    }
                })
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