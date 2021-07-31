import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

interface Note {
    id: number;
    title: string;
    description?: string;
    cover?: string;
    published: Boolean;
}

interface Props {
    note: Note
}

function NoteList({note}: Props): ReactElement {
    return (
        <Link to={{ 
            pathname:`/note/${note.id}`,
            state: { title: note.title, published:note.published }
        }} className="bg-white rounded w-40 m-2 max-h-52">
            <img src={note.cover} alt="" className="rounded-t bg-cover bg-center bg-no-repeat" />
            <div className="flex flex-col px-4 py-2">
                <h2 className="font-semibold text-lg py-1">{note.title}</h2>
                <p className="py-1">{note.description}</p>
            </div>
        </Link>
    )
}

export default NoteList
