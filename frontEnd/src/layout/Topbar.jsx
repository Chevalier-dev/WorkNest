import React from 'react'
import { NavLink } from 'react-router-dom'

const Topbar = () => {
    return (
        <> <header>
            <h3>WorkNest</h3>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/faq">FAQ</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </nav>
        </header>
        </>
    )
}

export default Topbar