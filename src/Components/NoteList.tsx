import { Dispatch, MouseEvent, ReactElement, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import server from '../server/server'

interface Note {
    id: number;
    title: string;
    description?: string;
    cover?: string;
    published: Boolean;
}

interface Props {
    note: Note
    notes: Note[]
    setNotes: Dispatch<SetStateAction<Note[]>>
    setUpdatingNote: Dispatch<SetStateAction<Note | null>>
    setShowNewNoteForm: Dispatch<SetStateAction<boolean>>
}

function NoteList({note, notes, setNotes, setUpdatingNote, setShowNewNoteForm}: Props): ReactElement {

    const handleNoteDelete = (e: MouseEvent<HTMLButtonElement>, note: Note) => {
        server.delete(`/user/notes/${note.id}`)
        .then(res => {
            if (res.data?.data) {
                var array = [...notes];
                var index = array.indexOf(note)
                if (index !== -1) {
                    array.splice(index, 1);
                    setNotes(array);
                }
            }
        })
        .catch(({response}) => {
            console.log(response.data?.message);            
        })
    }

    const handleNoteUpdate = (e: MouseEvent<HTMLButtonElement>, note: Note) => {
        setUpdatingNote(note)
        setShowNewNoteForm(true)
    }

    return (
        <>
             <article className="note--cards">
                <div className="max-w-full">
                <Link to={{ 
                        pathname:`/note/${note.id}`,
                        state: { title: note.title, published:note.published }
                    }}>
                        <img src={note.cover} alt="" className="rounded w-full h-40" />
                        <h3 className="text-center text-lg capitalize text-gray-800 font-bold my-2">{note.title}</h3>
                    <p className=" text-sm text-gray-500 capitalize  mb-8 h-14 overflow-auto text-center" > {note.description} </p>
                    
                </Link>
                </div>
                <div className="card--title">
                   <hr></hr>
                    <div className="flex justify-around">
                        <button onClick={e => handleNoteDelete(e, note)} className="w-1/2 py-2 hover:bg-gray-200"><i className="fas fa-trash-alt"></i></button>
                        <button onClick={e => handleNoteUpdate(e, note)} className="w-1/2 py-2 hover:bg-gray-200"><i className="fas fa-pencil-alt"></i></button>
                    </div>
                </div>
            </article>   
        </>
    )
}

export default NoteList
