import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import Data from "./Data";
import { useState } from 'react';
import { nanoid } from 'nanoid'
import Search from './Search';

function App() {
const[notedata,setNoteData]=useState([
  {
    id: nanoid(),
    text: 'This is my first note!',
    date: '15/04/2021',
  },
  {
    id: nanoid(),
    text: 'This is my second note!',
    date: '21/04/2021',
  },
  {
    id: nanoid(),
    text: 'This is my third note!',
    date: '28/04/2021',
  },
  {
    id: nanoid(),
    text: 'This is my new note!',
    date: '30/04/2021',
  },
])

const[searchText,setSearchText]=useState('')

const[darkMode,setDarkMode]=useState(false);


const addNote=(text)=>{
   const date=new Date()
   const newNote={
    id: nanoid(),
			text: text,
    date: date.toLocaleDateString()
   }
   const newNotes=[...notedata,newNote]
   setNoteData(newNotes)
}

const deleteNote=(id)=>{
 const newNotes= notedata.filter((note)=>note.id!==id)
 setNoteData(newNotes)
}

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
          <div className="container">
     <Header 
     handleToggleMode={setDarkMode}
     />
    <Search 
    handleSearchNote={setSearchText}
    />
     <Data 
     noteData={notedata.filter((note)=>
      note.text.toLowerCase().includes(searchText)
      )} 
     handleAddNote={addNote}
     handleDeleteNote={deleteNote}
     />
     <Footer />
    </div>
    </div>
   
  );
}

export default App;
