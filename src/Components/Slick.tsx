import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

// import HorizontalScroll from 'react-scroll-horizontal'


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
        <div className="w-full px-6 py-10 mt-6 border border-gray-300 rounded pb-52">
            <h1 className="mb-6 text-4xl text-gray-700 capitalize ">{data.title}</h1>
                <div className="flex flex-wrap">
                    { data.data && data.data.map(item => {
                    return(
                        <Link to={{ 
                                    pathname:`/note/${item.id}`,
                                    state: { title: item.title, published: item.published, isPublic: true }
                                    }} key={item.id} className= "inline-block w-[300px] custom-note--cards py-4 bg-white shadow-lg rounded">             
                                <div className="px-2">
                                    <h2 className="px-2 pb-2 font-bold text-center text-gray-700 capitalize text-l h-18">{item.title}</h2>
                                    <div className="w-full">
                                    <img  src={item.cover} alt="No background" className="w-full h-40 border rounded opacity-80" />
                                    </div> 
                                    <div className="h-24"> <p className="pl-2 overflow-auto text-center text-gray-600 truncate "><br/>{item.description}</p>
                                   
                                    </div> 
                                </div>
                            </Link> 
                            
                       )
                      })}
                </div>
        </div>
    )
}

export default Slick
