import React from 'react'
import { NavLink } from 'react-router-dom'
import Sommaire from '../data/sommaire_v2.json'

const SidebarPart = (props) => {
    return (
        <ul className="partItems">
            {props.sidebarDocSom.map((parties, i) => 
            <li key={i}>
                <NavLink to={`/thematique/${Sommaire[props.sidebarDocRef].docRef}/${parties.path}`} className="flex-items-center">
                    <img className="logoThem" src={require(`../${parties.partIcon}`)} alt={parties.partie}  />
                    <div>{parties.partie}</div>    
                </NavLink>
            </li>
        )}
        </ul>
    )
}

export default SidebarPart;