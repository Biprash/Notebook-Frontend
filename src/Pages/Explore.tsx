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
        <div className="container ">
            {/* <div className="item--cards"> */}
            <div className="mt-28 relative">
                <h1 className="text-black-600 text-center text-6xl text-gray-700 font-semibold" > Explore More Notes </h1> 
                <Link to="/all-notes" className="absolute right-0 top-5 py-3 px-8 uppercase bg-blue-500 rounded-lg hover:bg-blue-700 text-blue-50 text-gray-700 ">all Notes<i className="ml-4 fas fa-arrow-right"></i> </Link>
            </div>
                {    
                  explores && explores.map((explore, index) => {    
                     return explore?.data ? <Slick key={index} data={explore}/> : null
                })}
        </div>
    )
}

export default Explore
