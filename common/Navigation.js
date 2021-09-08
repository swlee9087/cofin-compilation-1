import React from 'React'
import styled from 'styled-components'

const Navigation =()=>(<>    
<Nav>
<NavList>
    <NavItem>Home</NavItem>
    <NavItem>Photos</NavItem>
    <NavItem>Journal</NavItem>
    <NavItem>Guestbook</NavItem>
    <NavItem>Tags</NavItem>
    <NavItem>Contacts</NavItem>
</NavList>
</Nav>

</>)
export default Navigation

const Nav=styled.div`
width:100%;
height:30px;
border-bottom: 1px dotted #d1d8e4;
`
const NavList=styled.ul`
width:1080px;
display:flex;
margin:0 auto;
`

const NavItem=styled.li`
width:60px;
margin-left:18px;
margin-top:5px;
display:flex;
`