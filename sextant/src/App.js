import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner bannerText="Alvin Reji" />
                <Exhibit name="Hello!"></Exhibit>
                <Exhibit name="Nice to meet you!"></Exhibit>
            </div>
        );
    }
}

export default App;
