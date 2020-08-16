import React from 'react'
import { NavLink } from 'react-router-dom'
import Sommaire from '../data/sommaire.json'

const ThemsList = () => {
    return (
        <ul className="themsList">
            {Sommaire.map((them, i) =>
            <li key={i}>
                <NavLink to={`/theme/${them.Path}`} className="flex-items-center">
                    <img className="logoThem" src={require(`../${them.ThemIcon}`)} alt={them.Thematique}  />
                    <div>{them.Thematique}</div>
                </NavLink>
            </li>
            )}
        </ul>
    );
}

export default ThemsList;