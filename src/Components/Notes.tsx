import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Style.css'

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
}

function Notes({note}: Props): ReactElement {
    return (
        <>
            <article className="note--cards">
                <div className="max-w-full">
                <Link to={{ 
                        pathname:`/note/${note.id}`,
                        state: { title: note.title, published:note.published, isPublic: note.published }
                    }}>
                        <h3 className="text-center h-16 text-lg capitalize text-gray-800 font-bold my-2 ">{note.title}</h3>
                        <img src={note.cover} alt="" className="w-full h-40 object-cover " />  
                    <p className=" text-sm text-gray-600 italic capitalize  my-6 h-16 overflow-auto text-center " > {note.description} </p>
                    
                </Link>
                </div>
            </article>   
        </>
    )
}

export default Notes
