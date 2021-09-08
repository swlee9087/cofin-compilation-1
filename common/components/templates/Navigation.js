import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

const Navigation = () => (
<Nav>
    <NavList>
        <NavItem><Link to='/home'> 홈 </Link></NavItem>
        <NavItem><Link to='/course-register'> 객실 소개 </Link></NavItem>
        <NavItem><Link to='/online-profile'> 온라인 프로필 </Link></NavItem>
        <NavItem><Link to='/login'> 로그인 </Link></NavItem>
        <NavItem><Link to='/join'> 회원가입 </Link></NavItem>
        <NavItem><Link to='/school-status'> 학교 현황 </Link></NavItem>
    </NavList>
</Nav>
)


export default Navigation

const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d1dBe4;
`

const NavList = styled.ul`
    margin: 0 auto;
    width: 1080px;
    display: flex;
`

const NavItem = styled.li`
    width: 150px;
    margin-left: 18px;
    margin-top: 5px;
    display: flex;
`