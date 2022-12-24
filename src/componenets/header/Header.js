import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import styled from 'styled-components'

let StyledHeader = styled.header`
  padding: 5px 15px 5px 5px ;
  border-bottom: 1px solid var(--gray3);
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`
const Header = (props) => { 
  return (
    <StyledHeader>
        <HeaderLeft setActive={props.setActive}/>
        <HeaderRight />
    </StyledHeader>
  )
}

export default Header