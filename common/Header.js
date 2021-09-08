import React from 'react'
import styled from 'styled-components'
import img1 from './ursula-marvel.jpg'

const Header = () => (<>
<Container>
    <Element>
        <ShortCut>Login/Register</ShortCut>        
        <Logo/>
        <img src={img1} width="50%"/>
        <Search><h1>BlogBlog</h1></Search>
    </Element>
</Container>
</>)
export default Header;



const Container = styled.div`
align=center;
padding: 4em;
color:papayawhip;
border-bottom: 1px solid #d1d9e4;
`

const Element = styled.div`
margin: 0 auto;
width: 100%;
height: 100px;
display: flex;
flex-flow: row wrap;
`

const ShortCut = styled.div`
order:1;
width:100%;
height: 100px;
text-align: right;
background-color: palevioletred;
`

const Logo = styled.div`
order:2;
padding: 15%;
width: 500px;
`

const Search = styled.div`
order:3;
width: 100%;
color: #000;
text-align:center;
`