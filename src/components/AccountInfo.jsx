import React from 'react'

const AccountInfo = () => {
    return (
        <div className="accountInfo">
            <div className="accountTitle">
                <span className="accountIcon flex-items-center">BB</span>
                <span>Benoît Bousselot</span>
                <span>bbousselot@editions-tissot.fr</span>
            </div>
            <div className="accountHelp">
                <h4>Contacts & Aides</h4>
                <div className="servClient">Service client : <a href="tel:0450640808">04 50 64 08 08</a></div>
                <div className="contactUs">Nous contacter</div>
                <div className="faq">FAQ</div>
            </div>
            <div className="accountProfile">
                <h4>Profil</h4>
                <div className="accountSettings">Mon compte</div>
                <div className="accountSpace">Mes abonnements</div>
                <div className="accountSignout">Déconnexion</div>
            </div>
        </div>
    );
}

export default AccountInfo;