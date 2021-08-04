import { ReactElement, useEffect, useState } from 'react'
import Slick from '../Components/Slick'
import server from '../server/server'
import '../assets/css/Style.css'



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
            <div className="flex justify-center">
                    <h1 className="font-sans font-semibold text-8xl mt-28 text-black-600" > Explore More Notes </h1> 
                    </div>
                {    
                  explores && explores.map((explore, index) => {    
                     return explore?.data ? <Slick key={index} data={explore}/> : null
                })}
            </div>
    )
}

export default Explore
