import React,{useState} from 'react'
import archiveIcon from "../assets/images/archive.png"
import deleteIcon from "../assets/images/delete.png"
import checkIcon from "../assets/images/check.png"
import { removeNote,addToDeleted,addToArchive} from '../store/redux-store'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

let StyledNote =styled.div`
  padding: 7px;
  overflow: hidden;
`

let NoteContainer = styled.div`
  max-height: 350px;
  margin-right: -50px;
  padding: 15px;
  padding-right: 50px;
  text-align: left;
  overflow-y: scroll;
  height: 100%;
` 

let Checkbox = styled.div`
width: 20px;
height: 20px;
position: absolute;
top: 0;
left: 0;
transform: translate(-40%,-40%);
border: 1px solid black;
border-radius: 50%;
background-color: white;
display: none;
padding: 3px;

> img {
  width: 80%;
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
}
`

let Title = styled.h3`
margin-bottom: 20px;
color: black;
font-size: 18px;
`

let Text= styled.p`
color: var(--gray4);
font-size: 16px;
overflow-wrap: break-word;
`

let Option = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
padding: 5px;
display: flex;
justify-content: flex-end;
align-items: center;
background-color: white;
overflow: hidden;
display: none;
border-radius: 0 0 10px 10px;
> img {
  width: 20px;
  margin: 0 10px;
  opacity: 0.7;
  cursor: pointer;
}
`

let Parent = styled.div`
  width: 230px;
  border: 1px solid ${props=>props.selected?"black":"var(--gray3)"};
  border-radius: 10px;
  background-color: white;
  position: relative;
  align-self: flex-start;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 10px 0 var(--gray3);
  }
  &:hover  ${Option} {
    display: flex;
  }
  &:hover ${Checkbox} {
    display: block;
  }
`
const Note = (props) => {
  const [selected, setSelected] = useState(false)
  let dispatch = useDispatch()
  return (
    <StyledNote>
      <Parent selected={selected} >
        <Checkbox onClick={()=>{setSelected(prev=>!prev)}} style={{display:selected&&"block"}}>
          {selected&&<img  src={checkIcon} alt="" />}
        </Checkbox>
      <NoteContainer>
        <Title >{props.title}</Title>
        <Text >{props.text}</Text>
      </NoteContainer>
      <Option>
        <img src={archiveIcon} alt="" onClick={(event)=>{
          event.stopPropagation()
          dispatch(removeNote({id:props.id}))
          dispatch(addToArchive({id:props.id,title:props.title,note:props.text}))}}/>
        <img src={deleteIcon} alt="" onClick={(event)=>{
          event.stopPropagation()
          dispatch(removeNote({id:props.id,type:props.type}))
          console.log("hello")
          if (props.type==="notes") {
           dispatch(addToDeleted({id:props.id,title:props.title,note:props.text}))
          }
          }}/>
      </Option>

    </Parent>
    </StyledNote>
  )
}

export default Note