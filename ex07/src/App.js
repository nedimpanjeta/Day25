// src/App.js
import React, { Component} from 'react';
import PostRequestErrorHandling from "./PostRequestErrorHandling"

class App extends Component {
    render() {
        return (
            <div className="App">
                <PostRequestErrorHandling />
            </div>
        )
    }
}

export default App;