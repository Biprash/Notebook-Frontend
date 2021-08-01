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
        <article className="item--card">
                <h2 className="text-center font-bold text-lg capitalize text-gray-700 my-3">title</h2>
                <div className="card--image bg-red-200 h-32 w-full max-w-full">
                <Link to={{ 
            pathname:`/note/${note.id}`,
            state: { title: note.title, published:note.published }
        }} className="bg-white rounded w-40 m-2 max-h-52">
            {/* <img src={note.cover} alt="" className="rounded-t h-32 bg-no-repeat" /> */}
        </Link>
                </div>
                <div className="card--title">
                    <h3 className="text-center text-lg capitalize text-gray-700 my-2">title</h3>
                    <p className=" text-sm text-gray-500 capitalize text-left mb-8 h-16 overflow-auto" > description  </p>
                    <hr></hr>
                    <div className="flex justify-around mt-1 ">
                        <Link to="#"> delete <i className="fas fa-trash-alt"></i></Link>
                        <Link to="#"> edit <i className="fas fa-pen-nib"></i></Link>
                    </div>
                </div>
            </article>
        </>
    )
}

export default NoteList
