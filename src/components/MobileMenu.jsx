import React from 'react'
import { NavLink } from 'react-router-dom'

const MobileMenu = () => {
    return (
        <nav className="mobileMenu">
            <ul className="flex-items-center">
                <li className="menuHome">
                    <NavLink exact to="/" className="flex-items-center">Accueil</NavLink>
                </li>
                <li className="menuModeles">
                    <NavLink to="/modeles" className="flex-items-center">Modèles</NavLink>
                </li>
                <li className="menuSummary">
                    <a className="flex-items-center">Sommaire</a>
                </li>
                <li className="menuSearch">
                    <a className="flex-items-center">Recherche</a>
                </li>
                <li className="menuAccount">
                    <a className="flex-items-center">Compte</a>
                </li>
            </ul>
        </nav>
    );
}
export default MobileMenu;