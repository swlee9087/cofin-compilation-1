import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import VaccineResult from '../pages/VaccineResult'

const Next=()=>{
    return(<>
        <VButton><Link to = "Result">결과보기</Link></VButton>
    </>)
}
export default Next
const VButton = styled.button`
`