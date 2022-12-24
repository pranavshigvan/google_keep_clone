import React,{useState} from 'react'
import checkbox from "../assets/images/checkbox.png"
import { addNote } from '../store/redux-store'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

let StyledAddNotes =styled.div`
width: 80%;
max-width: 550px;
padding: 10px 15px;
border-radius: 5px;
box-shadow: 2px 2px 10px 0px var(--gray3);   
margin: 0 auto;

img {
  width: 20px;
}
`
let InnerContainer2 = styled.div`
padding-bottom: 20px ;
`
let InnerContainer =styled.div`
display: flex;
justify-content: space-between;
cursor: pointer;
`
let TextArea =styled.textarea`
display: block;
width: 100%;
padding: 10px 0;
color: var(--gray4);
font-weight: 500;
border: none;
outline: none;
background-color: transparent;
`

let TitleInput = styled(TextArea)`
font-weight: 600;
font-size: 16px;
`

let Button = styled.button`
float: right;
padding: 3px 10px;
font-size: 15px;
border: none;
background-color: transparent;
cursor: pointer;
font-weight: 500;
border: 1px solid var(--gray3);
border-radius: 5px;
margin-left: 10px;
`
const AddNotes = () => {
    const [showInput, setShowInput] = useState(false)
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    const [row, setRow] = useState(2)
    let dispatch = useDispatch()
    let ref=React.createRef()

  return (
    <StyledAddNotes >
        {showInput ? 
        <InnerContainer2>
              <TitleInput as="input" ref={ref} type="text" placeholder='Title'  onChange={(e)=>{
              setTitle(e.target.value)
            }}/>
            <TextArea placeholder="Take a note..." rows={row} onKeyDown={(e)=>{
              if(e.key ==="Enter"){
                setRow(prev=>prev+1)
              }
            }} onChange={(e)=>{
              setNote(e.target.value)
            }}/>
            <Button onClick={()=>{
              setRow(2)
              setShowInput(false)}}>Close</Button>
            <Button onClick={()=>{
              if (title!==""&&note!=="") {
                dispatch(addNote({id:Math.random(),title,note})) 
              setRow(2)             
              setShowInput(false)}
              }}>Add</Button>
        </InnerContainer2>:
        <InnerContainer onClick={()=>{
          setShowInput(true)}}>
            <p style={{overflowWrap:"no-wrap"}}>Take a note..</p>
            <img src={checkbox} alt="" />
        </InnerContainer>}
    </StyledAddNotes>
  )
}

export default AddNotes