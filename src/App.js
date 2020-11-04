import React from 'react';
import './App.css';
import MainPage from "./component/content/main-page/MainPage";
import SelectedSing from "./component/content/selectedSing/SelectedSing";
import {Switch, Route} from "react-router-dom";

function App() {
    return (
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route path="/sign/" component={SelectedSing}/>
        </Switch>
    );
}

export default App;
