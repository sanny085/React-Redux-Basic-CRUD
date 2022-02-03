import * as React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Note } from '../types/note.model';

import { RootState , AppDispatch} from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNote, editNote } from '../app/redux/noteSlice'
 
interface INotesProps {
    item: Note, 
}

const Notes: React.FC<INotesProps> = ({item}) => {
    const allNotes = useSelector((state: RootState) => state.notes)
    const dispatch = useDispatch<AppDispatch>()
    
    console.log("notes list", allNotes);
    
    return (
       <div className="mb-3">
            <Card style={{backgroundColor: item.color}}>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                    <Card.Subtitle className="text-muted">{ item.date}</Card.Subtitle>
                    {
                        console.log("Deleted Index : ", item.id)
                    }
                    <Button className="mt-3" variant="danger" onClick={() => dispatch(deleteNote(item.id))}>Delete</Button>
                    <Button className="mt-3 mx-1" variant="warning" onClick={()=> dispatch(editNote(item.id))}>edit</Button> 
                </Card.Body>
            </Card>
       </div> 
  );
};

export default Notes;
