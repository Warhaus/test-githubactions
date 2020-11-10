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
            //console.log(`${action.payload.month}${action.payload.day}`)
            return {
                ...state,
                horoscopeSingData: horoscopeSingData.map(item => {
                    return {...item, classBlur: false}
                }),
                selectToDayMonth: horoscopeSingData.filter(item =>
                    payloadDate >= parseInt(`${(item.fromMonth)}${(item.fromDay)}`) &&
                    payloadDate <= parseInt(`${(item.untilMonth)}${(item.untilDay)}`)
                    //payloadDate <= parseInt(console.log("один - ", `${(item.fromMonth)}${(item.fromDay)}`)) &&
                    //payloadDate >= parseInt(console.log("два - ", `${(item.untilMonth)}${(item.untilDay)}`))

                    // action.payload.day <= item.untilDay &&
                    // action.payload.month <= item.untilMonth &&
                    // action.payload.month >= item.fromMonth &&
                    // ((action.payload.day >= item.fromDay && action.payload.month === item.fromMonth) || true)
                )

                // catalog.map(item => {
                //     if (item.id === id) {
                //         item.idBasket = false;
                //     }
                //     return item;
                // })
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