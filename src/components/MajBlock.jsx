import React, { Component } from 'react'
import Maj from '../data/maj.json'
import ListUC from '../components/ListUC'

const MajBlock = () => {
    return (
        <div className="lastMaj col-xl-12">
            <div className="majTitle">
                <h2>Les dernières mises à jour</h2>
            </div>
            <div className="borderBlock">
                <ListUC list={Maj}/>
            </div>
        </div>
    );
}

export default MajBlock;