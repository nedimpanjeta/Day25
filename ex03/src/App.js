// src/App.js
import React, { Component} from 'react';
import GetRequestErrorHandling from './GetRequestErrorHandling';

class App extends Component {
    render() {
        return (
            <div className="App">
                <GetRequestErrorHandling />
            </div>
        )
    }
}

export default App;
