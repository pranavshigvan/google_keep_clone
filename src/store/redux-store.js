import { configureStore, createSlice} from "@reduxjs/toolkit";

let menuSlice = createSlice({
    name:"menu",
    initialState:{isOpen:true,activeMenu:"Notes"},
    reducers:{
        toggleMenu:(state)=>{
            state.isOpen = !state.isOpen
        },
        activateMenu:(state,action)=>{
            state.activeMenu = action.payload
        }
    }
})

let listViewSlice = createSlice({
    name:"listStyle",
    initialState:{isList:false},
    reducers:{
        setListStyle:(state)=>{
            console.log("hello1")
            state.isList=!state.isList
        }
    }
})


let noteSlice= createSlice({
    name:"notes",
    initialState:{
        notes:JSON.parse(localStorage.getItem("notes"))|| [],
        deletedNotes:JSON.parse(localStorage.getItem("deleted-notes")) || [],
        archiveNotes: JSON.parse(localStorage.getItem("archive-notes")) || []
},
    reducers:{
        addNote:(state,action)=>{
            state.notes.unshift(action.payload)
            localStorage.setItem("notes",JSON.stringify(state.notes))
        },
        removeNote:(state,action)=>{
            console.log(action.payload.type)
            if(action.payload.type==="deleted"){
                state.deletedNotes=state.deletedNotes.filter(item=>item.id!==action.payload.id)
                localStorage.setItem("deleted-notes",JSON.stringify(state.deletedNotes))
            }
            else{
                state.notes=state.notes.filter(item=>item.id!==action.payload.id)
                localStorage.setItem("notes",JSON.stringify(state.notes))
            }
               
        },
        addToDeleted:(state,action)=>{
            state.deletedNotes.push(action.payload)
            localStorage.setItem("deleted-notes",JSON.stringify(state.deletedNotes))
        },
        addToArchive:(state,action)=>{
            state.archiveNotes.push(action.payload)
            localStorage.setItem("archive-notes",JSON.stringify(state.archiveNotes))
        }
    }
})
export const {toggleMenu,activateMenu} = menuSlice.actions
export const {addNote,removeNote,addToDeleted,addToArchive}= noteSlice.actions
export const {setListStyle} = listViewSlice.actions
const store = configureStore({
    reducer:{
        menu:menuSlice.reducer,
        notes:noteSlice.reducer,
        listStyle:listViewSlice.reducer
    }
})
export default store