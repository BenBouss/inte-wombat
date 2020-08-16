import React from 'react'
import { Link } from 'react-router-dom'
import Modele from '../data/maj.json'
import ListUC from './ListUC'

const ModeleBlock = () => {
    return (
        <div className="indexMod col-xl-12">
            <div className="modTitle flex-items-center">
                <h2>Index des modèles</h2>
                <button className="seeAll"><Link to="/modeles">Voir tout</Link></button>
            </div>
            <div className="borderBlock">
                <ListUC list={Modele}/>
            </div>
        </div>
    );
}

export default ModeleBlock;