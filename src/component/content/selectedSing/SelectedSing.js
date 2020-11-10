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

    const date = new Date();
    const day = date.getDate()
    const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const months = monthsArr[date.getMonth()].substr(0, 3)
    const year = date.getFullYear();

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
                                onClick={() => takeDay(item.value)}
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
                            />
                        </div>
                        <div className="description">
                            <p><strong>{months} {day}, {year}</strong> - {[...item.descriptionGroup][horoscopeDaySelected].description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainPage;
