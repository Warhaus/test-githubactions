import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {tabGroup} from "../../../constans";

function MainPage() {
    const dispatch = useDispatch();
    const horoscopeSingSelected = useSelector(state => state.horoscopeSing.horoscopeSingSelected)
    const horoscopeSingData = useSelector(state => state.horoscopeSing.horoscopeSingData)
    const horoscopeDaySelected = useSelector(state => state.horoscopeSing.horoscopeDaySelected)

    console.log(horoscopeSingSelected)
    console.log(horoscopeSingData)
    console.log(horoscopeDaySelected)
    const takeDay = (value) => {
        dispatch({type: "TAKE_DAY", payload: value})
    }

    const date = new Date();
    const day = date.getDate()
    const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const months = monthsArr[date.getMonth()].substr(0, 3)
    const year = date.getFullYear();

    return (
        <div className="wrap-bg">
            <div className="bg"><img src="/img/daily-banner-bg.png" alt=""/></div>
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
            {horoscopeSingData.filter(item => item.id === horoscopeSingSelected).map(item =>
                <div className="container" key={item.id}>
                    <div className="group-zodiac-selected">
                        <div className="name"><p>{item.name} Horoscope</p></div>
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
