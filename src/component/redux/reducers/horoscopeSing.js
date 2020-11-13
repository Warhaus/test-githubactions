import {horoscopeSingData} from "../../../constans";

const initialState = {
    horoscopeSingData,
    horoscopeSingSelected: [],
    takeSingHoroscope: [],
    horoscopeDaySelected: 1,
    selectToDayMonth: "",
    stateValidDefine: true,
    stateWhatDay: [],
    stateWhatDayLast: [],
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
        case "TAKE_ID_DAY":
            const date = new Date();
            const weekDateFirst = (date.getDate() + 1) - date.getDay();
            const weekDateFirstLast = weekDateFirst + 6;
            const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const months = monthsArr[date.getMonth()].substr(0, 3)
            const monthss = monthsArr[date.getMonth()]

            if (action.payload === 0) {
                const days = date.getDate() - 1;
                const year = date.getFullYear();
                return {
                    ...state,
                    stateWhatDay: {day: days, month: months, year: year}
                }
            }
            if (action.payload === 1) {
                const days = date.getDate();
                const year = date.getFullYear();
                return {
                    ...state,
                    stateWhatDay: {day: days, month: months, year: year}
                }
            }
            if (action.payload === 2) {
                const days = date.getDate() + 1;
                const year = date.getFullYear();
                return {
                    ...state,
                    stateWhatDay: {day: days, month: months, year: year}
                }
            }
            if (action.payload === 3) {
                const year = date.getFullYear();
                return {
                    ...state,
                    stateWhatDay: {day: weekDateFirst, month: months, year: year},
                    stateWhatDayLast: {day: weekDateFirstLast, month: months, year: year}
                }
            }
            if (action.payload === 4) {
                return {
                    ...state,
                    stateWhatDay: {day: "", month: monthss, year: ""}
                }
            }
            if (action.payload === 5) {
                const year = date.getFullYear();
                return {
                    ...state,
                    stateWhatDay: {day: "", month: "", year: year}
                }
            }
            break;
        default:
            return state;
    }
};