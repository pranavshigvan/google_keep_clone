import React from 'react'
import Icon from '../Icon'
import searchIcon from "../../assets/images/search.png"
import closeIcon from "../../assets/images/close.png"
import backArrow from "../../assets/images/back.png"
import styled from 'styled-components'

let StyledInputBox = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 600px;
  justify-self: flex-start;
  padding: 0 5px;
  border-radius: 5px;
  justify-content: space-between;
  background-color: #eff4f4;
  @media (max-width:800px){
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
`
let Input = styled.input`
  border: none;
  outline: none;
  padding: 0 10px;
  font-size: 18px;
  flex-grow: 1;
  background-color: transparent;
  color: var(--gray4);
  @media (max-width:800px){
    width: 250px;
  }
`
const InputBox = (props) => {
  return (
    <StyledInputBox>
        {!props.hasFocus && <Icon  src={searchIcon} style={{width:"35px",height:"35px"}}/>}
        {props.hasFocus && <Icon src={backArrow} style={{width:"35px",height:"35px"}} onClick={()=>{props.setDisplayInput(false)}}/>}
        <Input type="text" placeholder='Search'  onFocus={()=>props.setHasFocus(true)} onBlur={()=>{
          props.setDisplayInput(false)
          props.setHasFocus(false)}}/>
        {props.hasFocus && <Icon src={closeIcon} style={{width:"35px",height:"35px"}} onClick={()=>{props.setDisplayInput(false)}}/>}
    </StyledInputBox>
  )
}

export default InputBox