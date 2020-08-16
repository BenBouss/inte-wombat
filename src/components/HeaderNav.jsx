import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MainNav extends Component {
    render() {
        return (
            <nav className="headerNav">
                <ul className="flex-items-center">
                    <li className="menuHome">
                        <NavLink exact to="/" className="flex-items-center">Accueil</NavLink>
                    </li>
                    <li className="menuModeles">
                        <NavLink to="/modeles" className="flex-items-center">Index des modèles</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default MainNav;
