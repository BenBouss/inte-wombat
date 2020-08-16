import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import Sommaire from '../data/sommaire_v2.json'

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -84; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const Sidebar = (props) => {
    return (
        <ul className="partItems">
            {props.sidebarDocSom.map((parties, i) => 
            <li key={i}>
                <NavLink to={`/thematique/${Sommaire[props.sidebarDocRef].docRef}/${parties.path}`} className="flex-items-center">
                    <img className="logoThem" src={require(`../${parties.partIcon}`)} alt={parties.partie}  />
                    <div>{parties.partie}</div>    
                </NavLink>
                <ul className="chapItems">
                    {parties.chapitres.map((chapitres, i) => 
                    <li key={i}>
                        <Link smooth to={`#chapter-`+(i+1)} scroll={el => scrollWithOffset(el)}>{chapitres.chapTitle}</Link>
                    </li>
                    )}
                </ul>
            </li>
        )}
        </ul>
    )
}

export default Sidebar;