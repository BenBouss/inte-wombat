import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Sommaire2 from '../data/sommaire_v2.json'


class SommaireBlock extends Component {
    render(){
        return(
            <div className="aboHome">
                {Sommaire2.map((doc, i) =>
                <div className={"summaryDoc " + doc.docRef} key={i}>
                    <h2>{doc.documentation}</h2>
                    <ul className="whiteBlock">
                        {doc.parties.map((parties, i) =>
                        <li key={i}>
                            <NavLink to={`/thematique/${doc.docRef}/${parties.path}`} className="flex-items-center">
                                <img className="logoThem" src={require(`../${parties.partIcon}`)} alt={parties.partie}  />
                                <div>{parties.partie}</div>
                            </NavLink>
                        </li>
                        )}
                    </ul>
                </div>                
                )}
            </div>
        );
    }
}

export default SommaireBlock;