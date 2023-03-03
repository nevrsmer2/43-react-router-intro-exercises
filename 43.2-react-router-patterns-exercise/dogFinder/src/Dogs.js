import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dogList from './dogList';
import './Dogs.css';

const Dogs = () => {
    const INITIAL_VALUE = dogList;
    const [dogs, setDogs] = useState(INITIAL_VALUE);
    return (
        <>
            {dogs.map(({ id, name, src }) =>
                <div className="Dogs" key={id}>
                    <Link to={`/dog/${id}`} >
                        <img style={{ height: '200px', width: '300px' }}
                            src={src}
                        />
                    </Link>
                    <br></br>
                    <h3>{name}</h3>
                </div>
            )}
        </>
    );
};

export default Dogs;