import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <div className='justify-content-center collapse navbar-collapse'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/users'>Users</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/task'>Tasks</Link>
                        </li>   
                        <li className='nav-item'>
                            <Link className='nav-link' to='/details'>details</Link>
                        </li>                 
                    </ul>
                </div>
            </div>
        </nav>
    )
}
