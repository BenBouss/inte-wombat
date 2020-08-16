import React from 'react'

import Header from '../components/Header'
import SidebarGlobale from '../components/SidebarGlobale'
import AppMain from '../components/AppMain'
import ThemsBlock from '../components/ThemsBlock'
import MajBlock from '../components/MajBlock'
import ModeleBlock from '../components/ModeleBlock'
import MobileMenu from '../components/MobileMenu'
import SommaireBlock from '../components/Sommaire'

const Homepage = () => {
    return (
        <div>
            <Header />
            <AppMain className={"home"}>
                <div className="row">
                    <div className="col-xl-offset-1 col-xl-5">
                        <div className="homeContent">
                            <h1>Mon espace CSE</h1>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                            <SommaireBlock />
                        </div>
                    </div>
                    <div className="col-xl-offset-1 col-xl-5 whiteBlock colContent">
                        gfhdgsfhjsd
                    </div>
                </div>
            </AppMain>
        </div>
    );
}

export default Homepage;