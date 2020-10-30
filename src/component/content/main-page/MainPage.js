import React, {useState} from 'react';
import Select from "react-select";
import {horoscopeSing, selectState} from "../../../constans";

function MainPage() {
    const [stateSelect, setStateSelect] = useState({selectedOption: null});
    console.log(stateSelect);

    function handleChange (selectedOption) {
        setStateSelect(selectedOption)
    }

    return (
        <div className="main">
            <div className="wrap">
                <div className="group-zodiac">
                    {horoscopeSing.map(item =>
                        <div className="item-zodiac" key={item.id}>
                            <div className="img"><img src={item.img} alt=""/></div>
                            <div className="name">{item.name}</div>
                            <div className="date">{item.date}</div>
                        </div>
                    )}
                </div>
            </div>
            <Select
                placeholder="Who's your sign..?"
                onChange={handleChange}
                options={selectState}
            />
            <Select
                placeholder="Who's your sign..?"
                onChange={handleChange}
                options={selectState}
            />
        </div>
    );
}

export default MainPage;
