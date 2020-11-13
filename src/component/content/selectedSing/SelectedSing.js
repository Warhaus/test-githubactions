import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import Select from 'react-select';
import {selectState, tabGroup} from "../../../constans";
import {NavLink} from "react-router-dom";

function MainPage() {
    const dispatch = useDispatch();
    const horoscopeSingSelected = useSelector(state => state.horoscopeSing.horoscopeSingSelected)
    const horoscopeSingData = useSelector(state => state.horoscopeSing.horoscopeSingData)
    const horoscopeDaySelected = useSelector(state => state.horoscopeSing.horoscopeDaySelected)
    const horoscopeSingHoroscope = useSelector(state => state.horoscopeSing.takeSingHoroscope)
    const stateWhatDay = useSelector(state => state.horoscopeSing.stateWhatDay)
    const stateWhatDayLast = useSelector(state => state.horoscopeSing.stateWhatDayLast)

    const takeDay = (value) => {
        dispatch({type: "TAKE_DAY_TABS", payload: value})
    }

    const takeSingHoroscope = (singHoroscope) => {
        dispatch({type: "TAKE_SING_HOROSCOPE", payload: singHoroscope.value})
    }

    const clearLocalStorage = () => {
        localStorage.clear();
        dispatch({type: "CLEAR_LOCAL_STORAGE", payload: []})
    }

    const addDateInfo = (id) => {
        dispatch({type: "TAKE_ID_DAY", payload: id})
    }

    const date = new Date();
    const day = date.getDate();
    const year = date.getFullYear();
    const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthsArr[date.getMonth()].substr(0, 3)

    return (
        <div className="wrap-bg">
            <div className="bg"><img src="/img/daily-banner-bg.png" alt=""/>
                <div className="back" onClick={clearLocalStorage}><NavLink to="/">Back to home</NavLink></div>
            </div>
            <div className="tab-group">
                <div className="tab">
                    <ul>
                        {tabGroup.map(item =>
                            <li
                                key={item.id}
                                className={parseInt(horoscopeDaySelected) === item.id ? "active" : ""}
                                onClick={() => {
                                    takeDay(item.value);
                                    addDateInfo(item.id)
                                }}
                            >
                                {item.name}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            {horoscopeSingData.filter(item => horoscopeSingHoroscope.length === 0 ? item.id === horoscopeSingSelected : item.id === horoscopeSingHoroscope).map(item =>
                <div className="container" key={item.id}>
                    <div className="group-zodiac-selected">
                        <div className="name">
                            <p>{item.name} Horoscope</p>
                            <Select
                                onChange={takeSingHoroscope}
                                options={selectState}
                                placeholder="Select sing"
                            />
                        </div>
                        <div className="description">
                            <p>
                                {stateWhatDay.length === 0
                                    ?
                                    <strong>
                                        {month + " " + day + ", " + year}
                                    </strong>
                                    :
                                    <strong>
                                        {stateWhatDay.month + " " + stateWhatDay.day + `${parseInt(horoscopeDaySelected) === 4 || parseInt(horoscopeDaySelected) === 5 ? " " : ", "}` + `${parseInt(horoscopeDaySelected) === 4 || 5 ? stateWhatDay.year : " "}`}
                                        {parseInt(horoscopeDaySelected) === 3 ? `${" - " + stateWhatDay.month + " " + stateWhatDayLast.day + ", " + stateWhatDay.year}` : ""}
                                    </strong>} - {[...item.descriptionGroup][horoscopeDaySelected].description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainPage;
