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
        <div className="mt-15 border-dashed border-2 border-gray-300 py-10 px-6 w-full rounded-t-2xl my-6">
            <h1 className="text-4xl font-bold my-6 capitalize  ">{data.title}</h1>

            {/* <div className="explore"> */}

            {/* <HorizontalScroll> */}
            {/* <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5"> */}

                <div className=" grid grid-cols-5 gap-8">
                    { data.data && data.data.map(item => {
                    // console.log(item.cover);
                    return(
                        <Link to={{ 
                                    pathname:`/note/${item.id}`,
                                    state: { title: item.title, published: item.published, isPublic: true }
                                    }} key={item.id} className= "border-2 bg-red-200 w-56">
                                                
                                <div className="l ">
                            
                                    <h2 className="font-bold capitalize text-lg py-1 mx-auto ">{item.title}</h2>
                                    <div>
                                    <img  src={item.cover} alt="" className="rounded h-32 mt-4 w-full bg-cover bg-center bg-no-repeat" />
                                    </div> 
                                    <div className=""> <p className="py-2 overflow-auto "><br/>{item.description}</p></div> 
                                </div>
                            </Link> 
                       )
                      })}
                        {/* </div> */}   
                </div>
                {/* </HorizontalScroll> */}
        </div>
        // </div>
    )
}

export default Slick
