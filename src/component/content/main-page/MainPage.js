import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

function MainPage() {
    const dispatch = useDispatch();
    const horoscopeSingData = useSelector(state => state.horoscopeSing.horoscopeSingData)

    const takeId = (id) => {
        dispatch({type: "TAKE_SING_ID", payload: id})
    }

    return (
        <div className="main">
            <div className="container">
                <div className="group-zodiac">
                    {horoscopeSingData.map(item =>
                        <div className="item-zodiac" key={item.id} onClick={() => takeId(item.id)}>
                            <NavLink to={item.link}>
                                <div className="img"><img src={item.img} alt=""/></div>
                                <div className="name">{item.name}</div>
                                <div className="date">{item.date}</div>
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MainPage;
