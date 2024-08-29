import React from 'react';
import QueryComponent from './Components/QueryComponent';

const App = () => {
    return (
        <div className='Main'>
            <div className="App">
                <h1>DigiVaidya</h1>
                <div className='warning'>
                    <p>Hi! I am DigiVaidya, your AI-powered ayurvedic consultant. Go ahead and type in your issues below. I will try my best to help you out!</p>
                </div>
                
                <QueryComponent />
            </div>
        </div>
        
    );
};

export default App;
