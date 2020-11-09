import {React, Link } from 'react'


export default function Header() {
    return (
        <div>
            <div>
                <h1>Logo</h1>
            </div>
            <nav>
                <Link to='/detailing'>Detailing</Link>
                <Link to='/aboutus'>About Us</Link>
                <Link to='/contactus'>Contact Us</Link>
            </nav>
        </div>
    )
}
