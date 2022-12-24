import React from 'react'
import bellIcon from "../assets/images/bell.png"
import bulbIcon from "../assets/images/idea.png"
import pencilIcon from "../assets/images/pencil.png"
import archiveIcon from "../assets/images/archive.png"
import deleteIcon from "../assets/images/delete.png"
import SidebarItem from "./SidebarItem"
import { useSelector } from 'react-redux'
import styled from 'styled-components'

let StyledSidebar = styled.aside`
  height: 100vh;
  padding:${props=>!props.isOpen?"5px":"5px 0"}
`

const Sidebar = (props) => {
  let isOpen = useSelector(state=>state.menu.isOpen)
  return (
    <StyledSidebar isOpen={isOpen}  >
      <SidebarItem icon={bulbIcon} title="Notes" onClick={props.setMainScreen}/>
      <SidebarItem icon={bellIcon} title="Reminder" onClick={props.setMainScreen}/>
      <SidebarItem icon={pencilIcon} title="Edit labels" onClick={props.setMainScreen}/>
      <SidebarItem icon={archiveIcon} title="Archive" onClick={props.setMainScreen}/>
      <SidebarItem icon={deleteIcon} title="Trash" onClick={props.setMainScreen}/>
    </StyledSidebar>
  )
}

export default Sidebar