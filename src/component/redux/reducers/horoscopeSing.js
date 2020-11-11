import {horoscopeSingData} from "../../../constans";

const initialState = {
    horoscopeSingData,
    horoscopeSingSelected: [],
    takeSingHoroscope: [],
    horoscopeDaySelected: 1,
    selectToDayMonth: "",
    stateValidDefine: true
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
            let month = parseInt(action.payload.month);
            let day = parseInt(action.payload.day);
            month = isNaN(month) ? 0 : month;
            day = isNaN(day) ? 0 : day;
            return {
                ...state,
                horoscopeSingData: horoscopeSingData.map(item => {
                    return {...item, classBlur: false}
                }),
                selectToDayMonth: horoscopeSingData.filter(item => {
                    let cmpMonth = month === 1 && parseInt(item.untilMonth) === 13 ? 13 : month;
                    return (
                        ((cmpMonth === parseInt(item.untilMonth) && day <= parseInt(item.untilDay)) || cmpMonth < parseInt(item.untilMonth)) &&
                        ((cmpMonth === parseInt(item.fromMonth) && day >= parseInt(item.fromDay)) || cmpMonth > parseInt(item.fromMonth))
                    )
                }),

            }
        case "RESET_LOCAL_STORAGE":
            return {
                ...state,
                horoscopeSingData: horoscopeSingData.map(item => {
                    return {...item, classBlur: true}
                }),
                selectToDayMonth: ""
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