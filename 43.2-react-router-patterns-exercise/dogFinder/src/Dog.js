import React from 'react';
import { useParams } from 'react-router-dom';
import './Dog.css';
import dogList from './dogList';

const Dog = () => {
    const { id } = useParams();

    return (
        <>
            {dogList.map(dog => {
                return dog.id === id ? (
                    <div key={dog.id}>
                        <img src={dog.src} />
                        <h1 >Name: {dog.name}</h1>
                        <h3>Age: {dog.age}</h3>
                        <h3>Facts:  </h3>
                        <ul>
                            {dog.facts.map(fact => <li>{fact}</li>)}
                        </ul>
                    </div>)
                    : ""
            }
            )}
        </>
    );
};

export default Dog;