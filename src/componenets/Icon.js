import React from 'react'
import styled from 'styled-components'

let Button = styled.button`
  width: 43px;
  height: 43px;
  border-radius: 50%; 
  border:none;
  background:transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width:600){
    width: 35px;
    height: 35px;
  }
  &:hover {
    background-color: ${props=>!props.menuIcon&&"var(--gray2)"};
  }
`

let Image = styled.img`
  width:${props=>props.width || "18px"};
` 
const Icon = (props) => {
  return (
    <Button onClick={props.onClick} menuIcon={props.menuIcon}>
        <Image src={props.src} alt="" width={props.width}/>
    </Button>
  )
}

export default Icon