import React from 'react';
import { Link } from 'react-router-dom';


/* Component for rendering routes that are clickable images of each item in the VendingMaching component */
const VendingMachine = () => {
    return (
        <>
            <div>
                <img style={{ width: '700px', height: '700px' }}
                    src="https://media.gettyimages.com/id/104304039/photo/pastry-in-a-vending-machine.jpg?s=2048x2048&w=gi&k=20&c=dhp_5jS-x2CpvaE5ulePlGRhSVpvygW6XY9vpu6snOA="
                    alt="A vending machine"
                />
            </div>
            <div className="Snacks">

                <Link to="/doritos"><img style={{ height: '150px', width: '150px' }}
                    src="https://mobileimages.lowes.com/product/converted/028400/028400097659.jpg"
                    alt="Doritos potato chips."
                /></Link>

                <Link to="/kitkat"><img style={{ height: '125px', width: '175px' }}
                    src="https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw44d745df/images/hi-res/hsy-002290_1.png?sw=700&sh=700&sm=fit"
                    alt="Kit Kat candy bar"
                /></Link>

                <Link to="/oatmealcookie"><img style={{ height: '125px', width: '175px' }}
                    src="https://i5.walmartimages.com/asr/24a7ecfb-9a09-4b20-bec0-93cc0cbb0caa_1.41370179192db26cd74905ec6fe3387a.jpeg"
                    alt="OatmealCookie"
                /></Link>

                <Link to="/snickers"><img style={{ height: '150px', width: '150px' }}
                    src="https://i5.peapod.com/c/RQ/RQLBU.jpg"
                    alt="Snickers candy bar."
                /></Link>
            </div>
        </>
    );
};

export default VendingMachine;







