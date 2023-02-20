import React,{useContext} from 'react'
import Icon from "./Icon"
import { useSelector ,useDispatch} from 'react-redux'
import {activateMenu } from '../store/redux-store'
import styled from 'styled-components'
import { screenContext } from '../App'

let StyledSidebarItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius:${props=>props.isOpen?"0 30px 30px 0":"30px"};
  padding:${props=>props.isOpen&&"0 17.5px"};
  background-color:${props=>props.activeMenu===props.title&&"#feefcd"};
  &:hover {
    background-color: ${props=>props.activeMenu===props.title?"#feefcd":"var(--gray2)"};
  }
`
let Title = styled.h3`
  margin-left: 20px;
  margin-right: 100px;
  line-height: 1rem;
  font-weight: 400;
  font-size: 16px;
  width: 100%;
`

const SidebarItem = (props) => {
  let [width]= useContext(screenContext)
  let dispatch = useDispatch()
  let isOpen = useSelector(state=>state.menu.isOpen)
  let activeMenu = useSelector(state=>state.menu.activeMenu)
  console.log(isOpen)
  return (
    <StyledSidebarItem title={props.title} activeMenu={activeMenu} isOpen={isOpen} 
      onClick={()=>{
        props.onClick&&props.onClick(props.title)
        dispatch(activateMenu(props.title))
      }}>
      <Icon src={props.icon} menuIcon={true}/>
      {isOpen&&<Title>{props.title}</Title>}
    </StyledSidebarItem>
  )
}

export default SidebarItem