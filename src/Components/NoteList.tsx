import { Dispatch, MouseEvent, ReactElement, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import server from '../server/server'

interface Note {
    id: number;
    title: string;
    description?: string;
    cover?: string;
    published: Boolean;
    is_bookmarked: Boolean
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

    const handleNoteBookmark = (e: MouseEvent<HTMLButtonElement>, note: Note) => {
        server.get(process.env.REACT_APP_BASE_PATH + `/user/bookmarks/${note.id}`)
        .then(({data}) => {
            console.log(data, note.is_bookmarked, 'bookmark modify');
            
            if (data?.message === `Added Bookmark '${note.title}' Successfully` || data?.message === `Removed Bookmark '${note.title}' Successfully`) {
                
                note.is_bookmarked = !note.is_bookmarked
                const index = notes.findIndex(arrayNote => arrayNote.id === note.id),
                    newNotes = [...notes] // important to create a copy, otherwise you'll modify state outside of setState call
                newNotes[index] = note;                
                setNotes(newNotes);
            }
        })
    }

    return (
        <>
             <article className="note--cards hover:shadow-2xl  hover:border-gray-400 border-4">
                <div className="max-w-full">
                <Link to={{ 
                        pathname:`/note/${note.id}`,
                        state: { title: note.title, published:note.published }
                    }}>
                        <h3 className="text-center h-16 text-lg capitalize text-gray-800 font-bold my-2 ">{note.title}</h3>
                        <img src={note.cover} alt="" className="w-full h-40 object-cover " />
                      
                    <p className=" text-sm text-gray-600 italic capitalize  my-6 h-16 overflow-auto text-center " > {note.description} </p>
                    
                </Link>
                </div>
                <div className="card--title">
                   <hr></hr>
                    <div className="flex justify-around">
                        <button onClick={e => handleNoteDelete(e, note)} className="w-1/2 py-2 hover:bg-gray-200"><i className="fas fa-trash-alt"></i></button>
                        <button onClick={e => handleNoteUpdate(e, note)} className="w-1/2 py-2 hover:bg-gray-200"><i className="fas fa-pencil-alt"></i></button>
                        <button onClick={e => handleNoteBookmark(e, note)} className="w-1/2 py-2 hover:bg-gray-200">{ note.is_bookmarked ? <i className="fas fa-bookmark"></i> : <i className="far fa-bookmark"></i> }
                       
                        </button>
                    </div>
                </div>
            </article>   
        </>
    )
}

export default NoteList
