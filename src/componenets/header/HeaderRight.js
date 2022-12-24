import React ,{useContext,useState} from 'react'
import InputBox from './InputBox'
import reloadIcon from "../../assets/images/reload.png"
import listIcon from "../../assets/images/list.png"
import settingIcon from "../../assets/images/settings.png"
import userIcon from "../../assets/images/user.png"
import searchIcon from "../../assets/images/search.png"
import Icon from "../Icon"
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setListStyle } from '../../store/redux-store'
import { screenContext } from '../../App'

let Options = styled.div`
  display: flex;
  align-items: center;
`

let Profile = styled.div`
  margin-left: ${props=>props.width<600 ? "0":"40px" };
`  
let Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content:space-between;
  flex-grow: 1;
  padding-left: 50px;

  @media (max-width:800px){
    justify-content: flex-end;
    padding: 0;
}
}
`
const HeaderRight = () => {
  let dispatch = useDispatch()
  let [width]= useContext(screenContext)
  const [displayInput, setDisplayInput] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)
  return (
    <Nav>
      {width>800 || displayInput ?<InputBox width={width} setDisplayInput={setDisplayInput} hasFocus={hasFocus} setHasFocus={setHasFocus}/>:""}
      <Options>
        {width<=800 &&
        <Icon src={searchIcon} onClick={()=>{
          setHasFocus(true)
          setDisplayInput(prev=>!prev)}}/>
        }
        <Icon src={reloadIcon} />
        <Icon src={listIcon}  onClick={()=>{dispatch(setListStyle())}}/>
        <Icon src={settingIcon} onClick={()=>{console.log("setting")}}/>
        <Profile width={width}>
          <Icon src={userIcon} alt="" width={"100%"}/>
        </Profile>
      </Options>
    </Nav>
  )
}

export default HeaderRight