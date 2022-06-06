import React from 'react';
import './App.css';
import GamingField from './components/Gaming Field';
import Counter from './components/Counter';


const App = () => {

    return (
        <div className="App">
            <h1>Minesweeper</h1>
            <GamingField />
            <Counter />
        </div>
    );
};

export default App;