import React from 'react'
import Contact from './Footer/Contact'
import Links from './Footer/Links'
import { useLocation } from 'react-router-dom'

function Footer() {
    const location = useLocation();
    return (
        <div>
            {location.pathname.split('/')[1] !== "project" && <Contact />}
            <Links />
        </div>
    )
}

export default Footer