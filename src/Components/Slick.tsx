import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Style.css'
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
        <div className=" border-dashed border-2 border-gray-300 py-10 px-6 w-full pb-52 mt-6 rounded-t-2xl">
            <h1 className="text-4xl capitalize mb-6 text-gray-700 ">{data.title}</h1>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full h-36">
                    { data.data && data.data.map(item => {
                    return(
                        <Link to={{ 
                                    pathname:`/note/${item.id}`,
                                    state: { title: item.title, published: item.published, isPublic: true }
                                    }} key={item.id} className= "block bg-white rounded-2xl  py-2 shadow-lg ">             
                                <div className="exploreCard">
                                    <h2 className="text-center font-bold  pb-2 px-2 text-gray-700 text-l h-18 capitalize">{item.title}</h2>
                                    <div className="w-full">
                                    <img  src={item.cover} alt="No image" className=" h-40 rounded-2xl border w-full opacity-80" />
                                    </div> 
                                    <div className="h-24"> <p className="truncate text-center pl-2 text-gray-600 overflow-auto "><br/>{item.description}</p>
                                   
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
