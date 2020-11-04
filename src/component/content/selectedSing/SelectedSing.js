import React from 'react';
import {useSelector} from "react-redux";

function MainPage() {
    const horoscopeSingSelected = useSelector(state => state.horoscopeSing.horoscopeSingSelected)
    const horoscopeSingData = useSelector(state => state.horoscopeSing.horoscopeSingData)




    const date = new Date();
    const day = date.getDay()
    const monthsArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const months = monthsArr[date.getMonth()].substr(0, 3)
    const year = date.getFullYear();

    return (
        <div className="wrap-bg">
            <div className="bg"><img src="/img/daily-banner-bg.png" alt=""/></div>
            {horoscopeSingData.filter(item => item.id === horoscopeSingSelected).map(item =>
                <div className="container" key={item.id}>
                    <div className="group-zodiac-selected">
                        <div className="name"><p>{item.name} Horoscope</p></div>
                        <div className="description"><p><strong>{months} {day}, {year}</strong> - {item.description}</p></div>
                    </div>
                </div>
            )}
        </div>

    );
}

export default MainPage;
