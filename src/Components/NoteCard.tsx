import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

interface Note {
    id: number,
    title: string,
    description?: string,
    cover?: string
    published: Boolean
    is_bookmarked: Boolean
}

interface Props {
    note: Note
}

function NoteCard({note}: Props): ReactElement {
    return (
        <>
             <article className="w-[300px] custom-note--cards rounded">
                <div className="max-w-full">
                <Link to={{ 
                        pathname:`/note/${note.id}`,
                        state: { title: note.title, published:note.published }
                    }}>
                        <h3 className="h-16 my-2 text-lg font-bold text-center text-gray-800 capitalize">{note.title}</h3>
                        <img src={note.cover} alt="" className="object-cover w-full h-40" />
                      
                    <p className="h-16 my-6 overflow-auto text-sm text-center text-gray-500 capitalize " > {note.description} </p>
                    
                </Link>
                </div>
            </article>   
        </>
    )
}

export default NoteCard
