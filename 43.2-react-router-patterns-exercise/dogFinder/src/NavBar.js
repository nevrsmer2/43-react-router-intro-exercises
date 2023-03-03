import React from "react";
import { NavLink } from "react-router-dom";
import dogList from "./dogList";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink to="/">
                Home
            </NavLink>
            {dogList.map(dog =>
                <span key={dog.id}>
                    <NavLink to={`/dog/${dog.id}`}>
                        {dog.name}
                    </NavLink>
                </span>)
            }
        </nav>
    );
};

export default NavBar;