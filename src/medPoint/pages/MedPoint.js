import React from 'react'
// import styled from "styled-components"
// import {useTable, useSortBy} from "react-table"
// import InfiniteScroll from "react-infinite-scroll-component"
// import MedPoint20210905 from 'med/components/MedPoint20210905'
// import AddressList from './sw/medPoint/components/AddressList'

const MedPoint = () => {
    
    return(
    <div>
    <text align="center"><h1>지역별 선별 신료소 정보</h1></text>
    <table style={style}>
    <tr style={{height: "20px"}}>현재 위치: </tr>
    <tr style={{height: "20px"}}>
        <td style={{width:"5%", border:"1px solid black"}}>시도</td>
        <td style={{width:"10%", border:"1px solid black"}}>기관명</td>
        <td style={{width:"20%", border:"1px solid black"}}>상세 주소</td>
        <td style={{width:"10%", border:"1px solid black"}}>전화 번호</td>
        <td style={{width:"10%", border:"1px solid black"}}>운영 시간</td>
        <td style={{width:"10%", border:"1px solid black"}}>관할보건소</td>
        
    </tr>
    <tr>
        <td colspan="6" style={{border:"1px solid black"}}>선별 진료소 리스트 - 사용자 위치에 가까운 거리순으로 나열</td>
    </tr>
    {/* <tr>
        <td></td>
    </tr> */}
    </table>
</div>
)}
export default MedPoint


// page shows static list of med points in selected area, then opens map when clicked on. 
// min 6 cols { 지역별 / 동읍면 / 상세 주소 / 전화번호 / 진료시간 / 주차가능여부 }
// div into two major td's: one of the list, other of map or enlarged details
// list should be editable as csv or the like. 
// or 무한 스크롤

const style={
    width:"1200px",
    height:"800px",
    margin:"0 auto", 
    align:"center",
    border:"1px solid black",
    padding: "1.5em 0 1.5em 0"
}