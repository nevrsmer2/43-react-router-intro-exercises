import React from 'react';
import { Link } from 'react-router-dom';

const OatmealCookie = () => {
    return (
        <>
            <img style={{ height: '325px', width: '375px' }}
                src="https://i5.walmartimages.com/asr/24a7ecfb-9a09-4b20-bec0-93cc0cbb0caa_1.41370179192db26cd74905ec6fe3387a.jpeg"
                alt="OatmealCookie"
            />
            <p>Return to <Link to="/">home</Link> page</p>
        </>
    );
};

export default OatmealCookie;



