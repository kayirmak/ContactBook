import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    
        return (
            <div className="menu">
                <ul>
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/add">AddContact</NavLink></li>

                </ul>
            </div>
        );
    
}

export default NavBar;
