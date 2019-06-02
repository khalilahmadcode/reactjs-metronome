import React from 'react';
import ReactDOM from 'react-dom';
import Metronome from './Metronome'; 


const App = () => {
    return <Metronome />

}

ReactDOM.render(
    <App />, 
    document.querySelector("#root")
); 