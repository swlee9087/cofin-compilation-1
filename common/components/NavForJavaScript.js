import React from 'react'
import { Link } from 'react-router-dom'

const NavForJavaScript =() =><>
    <nav class="navi">
        <ol>
        <li><Link to ='/basic'> Basic</Link></li>
        <li><Link to ='/arrowfn'> Arrow Funtion</Link></li>
        <li><Link to ='/arguments'> Arguments</Link></li>
        <li><Link to ='/templit'> Template Literal</Link></li>
        <li><Link to ='/litmethod'> Literal Method</Link></li>
        <li><Link to ='/destruct'> Destructuring</Link></li>
        <li><Link to ='/loop'> Loop</Link></li>
        <li><Link to ='/arrmethod'> Array Method</Link></li>
        <li><Link to ='/spoprestparam'> Spread Operator Rest Param</Link></li>
        <li><Link to ='/objlit'> Object Literal</Link></li>
        <li><Link to ='/symbol'> Symbol</Link></li>
        <li><Link to ='/class'> Class</Link></li>
        <li><Link to ='/promise'> Promise</Link></li>
        <li><Link to ='/generator'> Generator</Link></li>
        <li><Link to ='/proxy'> Proxy</Link></li>
        <li><Link to ='/setmap'> Set Map</Link></li>
        <li><Link to ='/array'> Array</Link></li>
        <li><Link to ='/es2017'> Es2017</Link></li>
        <li><Link to ='/asyncawait'> Async Await</Link></li>
        <li><Link to ='/es2018'> Es2018</Link></li>
        <li><Link to ='/es2019'> Es2019</Link></li>
        <li><Link to ='/es2020'> Es2020</Link></li>
        <li><Link to ='/typescript'> TypeScript</Link></li>
        </ol>
    </nav>
</>

export default NavForJavaScript;