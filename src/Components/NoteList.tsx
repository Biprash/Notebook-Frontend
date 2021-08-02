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
        <>
             <article className="note--cards">
                <div className="max-w-full">
                <Link to={{ 
                        pathname:`/note/${note.id}`,
                        state: { title: note.title, published:note.published }
                    }}>
                        <img src={note.cover} alt="" className="rounded h-36 w-full" />
                        <h3 className="text-center text-lg capitalize text-gray-800 font-bold my-2">{note.title}</h3>
                    <p className=" text-sm text-gray-500 capitalize  mb-8 h-14 overflow-auto text-center" > {note.description} </p>
                    
                </Link>
                </div>
                <div className="card--title">
                   <hr></hr>
                    <div className="flex justify-around mt-1 ">
                        <Link to="#"> <i className="fas fa-trash-alt"></i></Link>
                        <Link to="#"><i className="fas fa-pencil-alt"></i></Link>
                    </div>
                </div>
            </article>   
        </>
    )
}

export default NoteList
