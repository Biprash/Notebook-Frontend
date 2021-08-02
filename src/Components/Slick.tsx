import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Style.css'

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
        <div className="mt-72 ">
            <h1 className="text-4xl font-bold my-6 ">{data.title}</h1>

            {/* <div className="explore"> */}

            
            {/* <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5"> */}

                <div className=" flex w-60 h-80 min-w-full space-x-4 max-w-60 rounded-md haver:hover:shadow-2xl  ">
                { data.data && data.data.map(item => {
                
                // console.log(item.cover);
                return(
                    <Link to={{ 
                                pathname:`/note/${item.id}`,
                                state: { title: item.title, published: item.published, isPublic: true }
                                 }} key={item.id} className="bg-white rounded w-64">
                                             
                             <div className="flex flex-col px-4 py-3   ">
                        
                                <h2 className="font-bold capitalize text-lg py-1  ">{item.title}</h2>
                                <div>
                                 <img  src={item.cover} alt="" className="rounded h-32 w-full bg-cover bg-center bg-no-repeat" />
                                 </div> 
                                <div className=""> <p className="py-2"> <strong className="capitalize font-sans">illustrate:</strong><br/>{item.description}</p></div> 
                                 </div>
                        </Link> 
                )
            })}
                {/* </div> */}


                
            </div>
        </div>
        // </div>
    )
}

export default Slick
