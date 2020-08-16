import React from 'react'
import logoTissot from '../assets/logo-tissot.png'
import HeaderNav from './HeaderNav'
import Searchbox from '../components/Searchbox'
import Account from './Account'

const Header = () => (
    <header className="mainHeader flex-items-center">
        <div className="sidebarHeader flex-items-center">
            <img src={logoTissot} alt="Edition Tissot" className="logo"/>
            <span className="appType">Documentation</span>
        </div>
        <HeaderNav />
        <Searchbox />
        <Account />
    </header>
);

export default Header;