import React,{useContext} from 'react'
import keep_logo from "../../assets/images/keep_logo.png"
import Icon from '../Icon'
import { useDispatch } from 'react-redux'
import {toggleMenu} from "../../store/redux-store"
import styled from 'styled-components'
import ham from "../../assets/images/menu.png"
import { screenContext } from '../../App'


let LeftHeader= styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`
let Img = styled.img`
  transform:scale(0.75)
`
let Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
  color: var(--gray4);
  text-transform: capitalize;
`

const HeaderLeft = (props) => {
  let dispatch = useDispatch()
  let [width]= useContext(screenContext)
  return (
    <LeftHeader>
        {width>700&&<Icon onClick={()=>{dispatch(toggleMenu())}} src={ham}/>}
        <Img src={keep_logo} alt="" />
        {width>600&&<Title>keep</Title>}
    </LeftHeader>
  )
}

export default HeaderLeft