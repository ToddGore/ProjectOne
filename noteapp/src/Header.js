import React from 'react';
import logo from './SomNote.png';
import './App.css';

import './NotesList.css';

const Header = () => {
    return (

        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Notes-Pro</h1>
        </header>

    )
}




export default Header;