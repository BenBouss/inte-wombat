import React from 'react'
import Header from '../components/Header'
import SidebarThem from '../components/SidebarThem'
import AppMain from '../components/AppMain'
import DynamicScrollToTop from '../components/DynamicScrollToTop'
import Sommaire from '../data/sommaire_v2.json'
import ListUC from '../components/ListUC'
import ListChapUC from '../components/ListChapUC'
import MobileMenu from '../components/MobileMenu'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Sidebar from '../components/Sidebar'


const PartiePage = () => {
    // const {
    //     params: { partPath }
    // } = match;
    const {partPath} = useParams()
    const {docuRef} = useParams()
    const docReference = Sommaire.findIndex( i => i.docRef === docuRef)
    const docSommaire = Sommaire[docReference].parties
    const partie = docSommaire.find(({ path }) => path === partPath )

    let sidebarList = {
        sidebarDocRef: docReference,
        sidebarDocSom: docSommaire
    }

    let isChapitres;
    docSommaire.some(el => {
        if(el.hasOwnProperty('chapitres')) {
            isChapitres = 
                <ListChapUC list={partie.chapitres}/>
        } else {
            isChapitres = 
                <div className="row blockUC">
                    <div className="col-xl-9">
                        <ListUC list={partie.uc}/>
                    </div>  
                </div>
        }
    })

    return (
        <div>
            <Header />
            <AppMain classname={"documentation"}>
                <Sidebar {...sidebarList}/>
                <div className="whiteBlock colContent">
                    <div className="docTitle">{Sommaire[docReference].documentation}</div>   
                    <h1>{partie.partie}</h1>
                    {isChapitres}
                </div>
            </AppMain>
            <DynamicScrollToTop />
        </div>
    );
}

export default PartiePage;