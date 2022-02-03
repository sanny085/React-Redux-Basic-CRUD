import * as React from 'react';
import Notes from './Notes';
import { Note } from '../types/note.model';

import { RootState, AppDispatch } from '../app/store'

import { useSelector, useDispatch } from 'react-redux'
import { createNote, deleteNote } from '../app/redux/noteSlice'
 
const NotesList: React.FC<any> = () => {
    
    const allNotes = useSelector((state: RootState) => state.notes)
    const dispatch = useDispatch<AppDispatch>()

    console.log('all Notes', allNotes);
 
    const renderNotes = ():JSX.Element[] => {
        return allNotes.map(item => {
            return <Notes key={item.id} item={item}/>
        })
    }
    return (
        <>
            <h2 className="mt-3">Notes</h2>
            <div>
            {  renderNotes()  }
            </div>
        </>
  );
};

export default NotesList;
