import React from 'react';
import { useParams } from 'react-router-dom';

const Color = ({ colors }) => {
    const { name } = useParams();

    const getColor = () => {
        const color = colors.find((color) => {
            return color.name === name
        })
        return color.color
    };

    return (
        <div
            className="color_page"
            style={{ backgroundColor: `${getColor()}` }}>
        </div>
    );
};

export default Color;

