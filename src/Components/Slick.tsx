import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import Book from '../assets/images/books.jpg'

interface Note {
    id: number
    title: string
    description?: string
    cover?: string
    published: Boolean
}

interface NoteList {
    title: string
    data?: Note[]
}

interface Props {
    data: NoteList
}

function Slick({data}: Props): ReactElement {
    
    return (
        <div>
            <h1 className="text-4xl font-bold my-6">{data.title}</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

                { data.data && data.data.map(item => {
                    return(
                        <Link to={{ 
                                pathname:`/note/${item.id}`,
                                state: { title: item.title, published: item.published, isPublic: true }
                            }} key={item.id} className="bg-white rounded w-64">
                            <img src={item.cover} alt="" className="rounded-t bg-cover bg-center bg-no-repeat" />
                            <div className="flex flex-col px-4 py-3">
                                <h2 className="font-semibold text-lg py-1 ">{item.title}</h2>
                                <p className="py-2">{item.description}</p>
                            </div>
                        </Link>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Slick
