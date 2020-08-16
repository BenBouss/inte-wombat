import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import Sommaire from '../data/sommaire_v2.json'
import SidebarPart from './SidebarPart'
import SidebarPartChap from './SidebarPartChap'

const Sidebar = (props) => {
    let ListItems;
    props.sidebarDocSom.some(el => {
        if(el.hasOwnProperty('chapitres')) {
            ListItems = <SidebarPartChap {...props}/>
        } else {
            ListItems = <SidebarPart {...props}/>
        }
    })
    console.log(props)
    return (
        <div className="colSommaire">
            <div className="currentDoc whiteBlock">{Sommaire[props.sidebarDocRef].documentation}</div>
            {ListItems}
            {/* <ul>
                {props.sidebarDocSom.map((parties, i) => 
                <li key={i}>
                    <NavLink to={`/thematique/${Sommaire[props.sidebarDocRef].docRef}/${parties.path}`} className="flex-items-center">
                        <img className="logoThem" src={require(`../${parties.partIcon}`)} alt={parties.partie}  />
                        <div>{parties.partie}</div>    
                    </NavLink>
                    <ul>
                        {parties.chapitres.map((chapitres, i) => 
                        <li key={i}>
                            <Link smooth to={`#chapter-`+(i+1)} scroll={el => scrollWithOffset(el)}>{chapitres.chapTitle}</Link>
                        </li>
                        )}
                    </ul>
                </li>
            )}
            </ul> */}

        </div>
    )
}

export default Sidebar;