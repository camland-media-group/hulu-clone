import React, { useState } from 'react'
import requests from './api/requests';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/Results';
import './styles/app.scss';

const App = () => {
    const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)

    return (
        <div className="app">
            <Header />
            <Nav 
                setSelectedOption={setSelectedOption} 
            />
            <Results
                selectedOption={selectedOption} 
            />
            <Footer />
        </div>
    )
}

export default App
