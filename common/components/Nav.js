import React from 'react'
import { Link } from 'react-router-dom'

const Nav =() =><>
    <nav class="navi">
        <ul>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/join'>Join</Link></li>
        <li><Link to ='/login'>Login</Link></li>
        <li><Link to ='/schoolstatus'>School Status</Link></li>
        <li><Link to ='/register'>Course Register</Link></li>
        <li><Link to ='/profile'>Online Profile</Link></li>
        </ul>
    </nav>
</>

export default Nav;