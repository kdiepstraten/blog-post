import React from 'react';
import './Navigation.css'
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul>
                <li><NavLink className={({isActive}) => isActive ? 'active' : 'default'}
                             to="/">Home</NavLink>
                </li>
                <li><NavLink className={({isActive}) => isActive ? 'active' : 'default'}
                             to="/new">Nieuwe Post </NavLink>
                </li>
                <li><NavLink className={({isActive}) => isActive ? 'active' : 'default'}
                             to="/blogpost">Alle Posts </NavLink>
                </li>
            </ul>
        </nav>
)
}
export default Navigation;