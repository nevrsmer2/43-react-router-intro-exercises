import React from 'react';
import { Link } from 'react-router-dom';

const KitKat = () => {
    return (
        <>
            <img style={{ height: '325px', width: '375px' }}
                src="https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw44d745df/images/hi-res/hsy-002290_1.png?sw=700&sh=700&sm=fit"
                alt="Kit Kat candy bar"
            />
            <p>Return to <Link to="/">home</Link> page</p>
        </>
    );
};

export default KitKat;


