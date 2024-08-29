import React, { useState } from 'react';
import axios from 'axios';
import './QueryComponent.css'

const QueryComponent = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:5000/query', { query });
            // const res = await axios.post('https://digivaidya-api.onrender.com/query', { query });
            setResponse(res.data.response);
        } catch (error) {
            console.error('Error:', error);
            setResponse('Error: ' + error.message);
        }
    };

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter your query"
                />
                
                <button type="submit">Submit</button>
                
                
            </form>
            {response && <div className='response'>{response}</div>}
        </div>
    );
};

export default QueryComponent;
