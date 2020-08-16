import React, { Component } from 'react'
import ThemsList from './ThemsList'
import Account from './Account'

class SidebarNv0 extends Component {
    render(){
        return(
            <div className="sidebar">
                <div className="sidebarMenu">
                    <div className="heading-3">Sommaire</div>
                    <nav>
                        <ThemsList />
                    </nav>
                </div>
                <div className="summaryButton">
                    <div>Sommaire</div>
                </div>
                <Account />
            </div>
        );
    }
}

export default SidebarNv0;