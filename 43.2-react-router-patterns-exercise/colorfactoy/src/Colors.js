import React from 'react';
import { Link } from 'react-router-dom';

const Colors = ({ colors }) => {
    return (
        <div className="colors_container">

            <p><Link to={`/colors/new`}>Add a Color</Link></p>
            <div>
                {colors.map(({ name }) =>
                    <Link to={`/color/${name}`}>
                        <p>{name}</p>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Colors;