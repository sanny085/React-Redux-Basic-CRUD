import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button'; 
import { Alert, Form } from 'react-bootstrap';
import { Note } from '../types/note.model';
import { RootState , AppDispatch} from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { createNote, updateNote } from '../app/redux/noteSlice'
 
const CreateNotes : React.FC<any> = () => {
   
    const allNotes = useSelector((state: RootState) => state.notes);
    const dispatch = useDispatch<AppDispatch>();
  
    const [error, setError] = React.useState<string>("");
    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>(null);
    const [update, setUpdate] = React.useState<Note | null>(null);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value === "" || textRef.current?.value === "") {
            return setError("All fields are mandatory");
        }
        
        setError("");
        if(update?.update) {
            dispatch(updateNote({
            id: update.id,
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString(),
            update : false, 
            }))
        }
        else {
        dispatch(createNote({
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString(),
            update : false, 
            }));
        } 

        (titleRef.current as HTMLInputElement).value = "";
        (textRef.current as HTMLTextAreaElement).value = "";
    }


    useEffect( ()=>{
        allNotes.map((item)=> {
                if(item.update === true) { 
                    (titleRef.current as HTMLInputElement).value = item.title;
                    (textRef.current as HTMLTextAreaElement).value = item.text;
                    (colorRef.current as HTMLInputElement).value = item.color;
                    setUpdate(item); 
                }
        })

    },[allNotes])

    return (
    <>
    <h2>Create New Tasks</h2>
    {error && <Alert variant="danger">{error}</Alert>}
    <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e) }>
        <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title for the Note" ref={ titleRef }/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Text</Form.Label>
            <Form.Control placeholder="Enter your notes" as="textarea" rows={3} ref={ textRef }/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="colorInput">Background Color</Form.Label>
            <Form.Control type="color" id="colorInput" defaultValue="#dfdfdf" title="Choose your color" ref={ colorRef }/>
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
    </Form>
    </>
  );
};

export default CreateNotes;
