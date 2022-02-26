import { ReactElement, useEffect, useState } from 'react'
import Slick from '../Components/Slick'
import server from '../server/server'

import {Link} from 'react-router-dom'

interface Note {
    id: number
    title: string
    description?: string
    cover?: string
    published: Boolean
}

interface NoteList {
    title: string;
    data?: Note[];
}

function Explore(): ReactElement {
    // const [notes, setNotes] = useState<Array<Note>>([])

    const [explores, setExplores] = useState<Array<NoteList>>([])

    useEffect(() => {
        server.get('/explore')
        .then(res => {                        
            setExplores(res.data.data)            
        })
    }, [])
    return (
        <div className="px-6 mb-10">
            {/* <div className="item--cards"> */}
            <div className="relative mt-28">
                <h1 className="text-6xl font-semibold text-center text-gray-700 text-black-600" > Explore More Notes </h1> 
                <Link to="/all-notes" className="absolute right-0 px-8 py-3 text-white uppercase bg-blue-500 rounded-lg cursor-pointer top-5 hover:bg-blue-700 ">all Notes<i className="ml-4 fas fa-arrow-right"></i> </Link>
            </div>
                {    
                  explores && explores.map((explore, index) => {    
                     return explore?.data ? <Slick key={index} data={explore}/> : null
                })}
        </div>
    )
}

export default Explore
