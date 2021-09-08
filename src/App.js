import React from 'react'
import styled from 'styled-components'
import { Route, Redirect, Switch } from 'react-router-dom'

import {CofinHomepage, FreeBoardpage, Writepage, CofinHomeMenu} from 'interface/index'
import {MedPoint} from 'medPoint/index'
import {LocalMapPage, WorldMap} from 'map/index'
import {MessagePage} from 'message/index'
import {News} from 'news/index'
import {Login, Register, AppAlert, Unregister, UserInfo, UserLost} from 'user/index'
import {CheckUp, VaccineResult} from 'vaccine/index'


const App = () => (
<>
<Layout>
</Layout>

<AppBody>
<Switch>
<Route exact path='/' component = { CofinHomepage }/>
<Redirect from='/home' to = { '/' }/>

<Route exact path='/freeboardpage' component = { FreeBoardpage }/>
<Route exact path='/write' component = { Writepage }/>
<Route exact path='/localmap' component = { LocalMapPage }/>
<Route exact path='/worldmap' component = { WorldMap }/>
<Route exact path='/checkup' component = { CheckUp }/>
<Route exact path='/vaccineresult' component = { VaccineResult }/>
<Route exact path='/messagepage' component= { MessagePage }/>
<Route exact path='/news' component= { News }/>
<Route exact path='/login' component= { Login }/>
<Route exact path='/register' component= { Register }/>
<Route exact path='/appalert' component= { AppAlert }/>
<Route exact path='/unregister' component= { Unregister }/>
<Route exact path='/userinfo' component= { UserInfo }/>
<Route exact path='/userlost' component= { UserLost }/>
<Route exact path='/medpoint' component= { MedPoint }/>

</Switch>
</AppBody>
<FootLayout><CofinHomeMenu/></FootLayout>
</>
)

export default App;

const Layout = styled.div`
  margin: 0 auto;
  display: block;
  width: 100%;
  height: 20px;
  flex-flow: row wrap;
`
const AppBody = styled.div`
    display: inline-block;
    justify-content: center;
    width: 80%;
`
const FootLayout = styled.div`
    display: inline-block;
    width: 20%;
    position: fixed;
`