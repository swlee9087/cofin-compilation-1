import React from "react"
// import logo from '../images/virus.png';
import styled from "styled-components";

const CofinHomeMenu = () => (
<>
    <div>
        {/* <form>
            <Button type="submit" class="subm">
                <Img src={logo} width="80" height="80"></Img>
            </Button>
        </form>  */}
        
        <Body>
            <Ul id='navi' type='none'>
                <Li class='group'>
                    <LogDiv class='title'><label>로그인</label></LogDiv>
                    <Ultyp type='none' class="sub">
                        <Lisub><a href="Login">로그인</a></Lisub>
                        <Lisub><a href="Register">회원가입</a></Lisub>
                    </Ultyp>
                </Li>
                <Li class='group'>
                    <MapDiv class="title">지도</MapDiv>
                    <Ultyp type='none' class="sub">
                        <Lisub><a href="LocalMap">국내지도</a></Lisub>
                        <Lisub><a href="WorldMap">세계지도</a></Lisub>
                    </Ultyp>
                </Li>
                <Li class='group'>
                    <NewsDiv class="title">실시간 업데이트</NewsDiv>
                    <Ultyp type='none' class="sub">
                        <Lisub><a href="News">뉴스</a></Lisub>
                        <Lisub><a href="MessagePage">알림문자</a></Lisub>
                    </Ultyp>
                </Li>
                <Li class='group'>
                    <VacDiv class="title">백신</VacDiv>
                    <Ultyp type='none' class="sub">
                        <Lisub><a href="CheckUp">백신 check</a></Lisub>
                        <Lisub><a href="VaccineResult">check 결과</a></Lisub>
                    </Ultyp>
                </Li>
                <Li class='group'>
                    <BrdDiv class="title">게시판</BrdDiv>
                    <Ultyp type='none' class="sub">
                        <Lisub><a href="FreeBoardpage">자유게시판</a></Lisub>
                        {/* <Lisub><a href="#">신고게시판</a></Lisub> */}
                        <Lisub><a href="write">글쓰기</a></Lisub>
                    </Ultyp>
                </Li>
                <Li class='group'>
                    <OpDiv class="title">설정</OpDiv>
                    <Ultyp type='none' class="sub">
                        <Lisub><a href="AppAlert">알림</a></Lisub>
                        <Lisub><a href="Unregister">탈퇴</a></Lisub>
                        <Lisub><a href="UserInfo">마이페이지</a></Lisub>
                    </Ultyp>
                </Li>
            </Ul>
        </Body>
    </div>
</> 
)


export default CofinHomeMenu

const Button = styled.button`
    border-radius:385px
`

const Img = styled.img`
    border-radius:inherit
`

const LogDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: LightSkyBlue;
`
const MapDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: SkyBlue;
`
const VacDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: RoyalBlue;
`
const NewsDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: CornflowerBlue;
`
const BrdDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: DodgerBlue;
`
const OpDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: blue;
`

const Body = styled.div`
    float: right;
    margin:20px auto;
    padding: 0;
    font-family:"맑은 고딕";
    font-size:0.9em;
`

const Ul = styled.ul`
    width: 200px;
    text-indent: 10px;
`

const Ultyp = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
`

const Li = styled.li `
    margin=bottom:3px
`

const Lisub = styled.li`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    background-color: #f4f4f4;
`

const A = styled.a`
    display: block;
    width: 100%;
    height:100%;
    text-decoration:none;
    color:#000;
`
