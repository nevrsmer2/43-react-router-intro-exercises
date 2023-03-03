import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const INITIAL_STATE = {
    name: "",
    color: ""
};

const ColorForm = ({ addColor }) => {
    const [formData, setFormData] = useState(INITIAL_STATE)
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ ...formData })
        setFormData(INITIAL_STATE)
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color Name: </label>

            <input
                id="name"
                type="text"
                placeholder="Color Name: "
                name="name"
                value={formData.name}
                onChange={handleChange}
            >
            </input>

            <label htmlFor="color">Color: </label>
            <input
                id="color"
                type="color"
                placeholder="Color: "
                name="color"
                value={formData.color}
                onChange={handleChange}
            >
            </input>
            <br></br>
            <button>Add Color</button>
        </form>
    );
};

export default ColorForm;