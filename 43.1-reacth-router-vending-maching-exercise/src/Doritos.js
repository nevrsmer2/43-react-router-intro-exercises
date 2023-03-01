import React from 'react';
import { Link } from "react-router-dom";


const Doritos = () => {
    return (
        <>
            <img style={{ height: '325px', width: '325px' }}
                src="https://mobileimages.lowes.com/product/converted/028400/028400097659.jpg"
                alt="Doritos potato chips."
            />
            <p>Return to <Link to="/">home</Link> page</p>
        </>
    );
};

export default Doritos;