import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import {groupDayData, groupMonthData} from "../../../constans";
import Select from "react-select";

function MainPage() {
    const dispatch = useDispatch();
    const horoscopeSingData = useSelector(state => state.horoscopeSing.horoscopeSingData);
    const selectToDayMonth = useSelector(state => state.horoscopeSing.selectToDayMonth);

    const [stateZodiac, setStateZodiac] = useState({day: "", month: ""});

    if (selectToDayMonth[0] !== undefined) {
        horoscopeSingData.map(item => {
            if (item.id === selectToDayMonth[0].id) {
                item.classBlur = true;
            }
        })
    }

    const takeId = (id) => {
        dispatch({type: "TAKE_SING_ID", payload: id})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: "FIND_ZODIAC_SIGN", payload: stateZodiac})
    }

    const resetLocalStorage = () => {
        dispatch({type: "RESET_LOCAL_STORAGE"})
        setStateZodiac({day: "", month: ""})
    }

    return (
        <div className="main">
            <div className="container">
                <div className="group-zodiac">
                    {horoscopeSingData.map(item =>
                        <div className={`${"item-zodiac"} ${item.classBlur === false ? "blur" : "strike"}`}
                             key={item.id} onClick={() => takeId(item.id)}>
                            <NavLink to={item.link}>
                                <div className="img"><img src={item.img} alt=""/></div>
                                <div className="name">{item.name}</div>
                                <div className="date">{item.date}</div>
                            </NavLink>
                        </div>
                    )}
                </div>
                <h1>Find out your zodiac sign:</h1>
                <div className="group-select">
                    <form onSubmit={handleSubmit}>
                        <div className="group-select-wrap">
                            <Select
                                onChange={(stateZodiac) => {
                                    setStateZodiac(prev => {
                                        return {...prev, day: stateZodiac.label}
                                    })
                                }}
                                placeholder="Day"
                                options={groupDayData}
                            />
                            <Select
                                onChange={(stateZodiac) => {
                                    setStateZodiac(prev => {
                                        return {...prev, month: stateZodiac.value}
                                    })
                                }}
                                placeholder="Month"
                                options={groupMonthData}
                            />
                            <button
                                className={`${"define"} ${stateZodiac.day.length >= 1 && stateZodiac.month.length >= 1 ? "" : "disabled"}`}>Define
                            </button>
                        </div>
                    </form>
                    <button className="resetStore" onClick={resetLocalStorage}>Reset Store</button>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
