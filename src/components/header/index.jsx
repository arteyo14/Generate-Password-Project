import React from "react";
import './header.scss';

const Header = ({ pass }) => {
    return (
        <header className="header">
            <span className="header__title">Password Generator</span>
            <div className="header__content">
                <span className="header__output">{pass ? pass : 'Choose a least one optional'}</span>
                <button type="submit" onClick={() => { navigator.clipboard.writeText(pass) }}>Copy</button>
            </div>
        </header>
    )
}

export default Header;