import React from 'react'
import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/Results';
import './styles/app.scss';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Nav />
            <Results />
        </div>
    )
}

export default App
