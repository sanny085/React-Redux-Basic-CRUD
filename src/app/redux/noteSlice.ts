import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Note } from '../../types/note.model'
  
const initialState : Note[] = [{
      id: (new Date).toString(),
      title: "Meetings",
      text: " daily meet",
      color: "#dfdfdf",
      date: (new Date).toString(),
      update : false, 
}];
    
 

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote: (state, action : PayloadAction<Note>)  => {
     return [...state, action.payload]
    },

    deleteNote: (state, action : PayloadAction<string>) => {
     const currentValue = state.filter((item : Note) => item.id !== action.payload)
     state = currentValue;
     return state;
    },

    editNote: (state, action : PayloadAction<string>) => {
      const findIndex = state.findIndex((item : Note) => item.id === action.payload)
      state[findIndex].update = !state[findIndex].update; 
      return state;
    },

    updateNote : (state, action : PayloadAction<Note>) => {
      const updateTask = state.filter((item : Note) =>
      item.id === action.payload.id
        ? Object.assign(item, action.payload)
        : item
      );
    state = updateTask;
    return state;
    },


    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})
 
export const { createNote, deleteNote, editNote, updateNote } = noteSlice.actions

export default noteSlice.reducer