import React from 'react';
import { Link } from 'react-router-dom';

const Snickers = () => {
    return (
        <>
            <img style={{ height: '350px', width: '350px' }}
                src="https://i5.peapod.com/c/RQ/RQLBU.jpg"
                alt="Snickers candy bar."
            />
            <p>Return to <Link to="/">home</Link> page</p>
        </>
    );
};

export default Snickers;