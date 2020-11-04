import React from 'react';
import {useSelector} from "react-redux";

function MainPage() {
    const horoscopeSingSelected = useSelector(state => state.horoscopeSing.horoscopeSingSelected)
    const horoscopeSingData = useSelector(state => state.horoscopeSing.horoscopeSingData)

    return (
        <div className="container">
            {horoscopeSingData.filter(item => item.id === horoscopeSingSelected).map(item =>
                <div className="group-zodiac-selected" key={item.id}>
                    <div className="name"><p>{item.name}</p></div>
                    <div className="description">{item.description}</div>
                </div>
            )}
        </div>
    );
}

export default MainPage;
