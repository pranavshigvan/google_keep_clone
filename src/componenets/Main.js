import React ,{useState}from 'react'
import { useSelector } from 'react-redux'
import Sidebar from './Sidebar'
import AddNotes from './AddNotes'
import Note from './Note'
import styled from 'styled-components'

let StyledMain = styled.main`
  display: flex;
  height: calc( 100vh - 60px);
  overflow: hidden;
`
let NotesContainer = styled.div`
  padding: 25px 0;
  overflow-y: scroll;
  height: 100%;
`

let Notes = styled.div`
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
let Title = styled.h1`
  padding: 10px 15px;
  text-align:center;
  color:var(--gray4)
`
const Main = () => {
  let notes = useSelector(state=>state.notes)
  const [mainScreen, setMainScreen] = useState("Notes")
  return (
    <StyledMain>
        <Sidebar setMainScreen={setMainScreen}/>
        <section style={{flexGrow:"1"}}>
          {(()=>{
            switch (mainScreen) {
              case "Notes":
                return <NotesContainer >
                  <AddNotes />
                  <Notes>
                    {console.log(notes.notes)}
                    {notes.notes.map(note=><Note type="notes"  title={note.title} text={note.note} id={note.id} key={note.id}/>)}
                  </Notes>
                </NotesContainer>
              case "Trash":
                return <NotesContainer>
                  <Title>Deletd Notes</Title>
                  <Notes>
                    {notes.deletedNotes.map(note=><Note type="deleted" title={note.title} text={note.note} id={note.id} key={note.id}/>)}
                  </Notes>
                </NotesContainer>
              case "Archive":
                return <NotesContainer>
                  <Title>Archived Notes</Title>
                  <Notes>
                    {notes.archiveNotes.map(note=><Note type="archive" title={note.title} text={note.note} id={note.id} key={note.id}/>)}
                  </Notes>
                </NotesContainer>
              default:
                break;
            }
          })()}
          {/* {mainScreen==="Notes" && <NotesContainer >
            <AddNotes />
            <Notes>
              {notes.map(note=><Note title={note.title} text={note.note} id={note.id} key={note.id}/>)}
            </Notes>
          </NotesContainer>} */}
        </section>
    </StyledMain> 
  )
}

export default Main