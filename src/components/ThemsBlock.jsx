import React, { Component } from 'react'
import Sommaire from '../data/sommaire.json'
import { Link } from 'react-router-dom'

const ThemesBlock = () => {
    return (
        <div className="row themesList">
            <div className="col-xs-12">
                <h2>Thèmes</h2>
            </div>
            {Sommaire.map((them, i) => 
            <div className="col-xs-12 col-md-6 col-xl-4 col-xxl-4" key={i}>
                <Link to={`/theme/${them.Path}`} className="themInfo borderBlock" key={i}>
                    <img className="logoThem" src={require(`../${them.ThemIcon}`)} alt={them.Thematique}  />
                    <h3>{them.Thematique}</h3>
                    <div className="nbUC">{them.NbUC +" Documents"}</div>
                </Link>
            </div>
            )}
        </div>
    );
}
export default ThemesBlock;