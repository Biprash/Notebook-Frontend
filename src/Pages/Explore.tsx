import { ReactElement, useEffect, useState } from 'react'
import Slick from '../Components/Slick'
import server from '../server/server'

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
    const [explores, setExplores] = useState<Array<NoteList>>([])

    useEffect(() => {
        server.get('/explore')
        .then(res => {                        
            setExplores(res.data.data)            
        })
    }, [])
    return (
        <div className="container">
            {                
            explores && explores.map((explore, index) => {    
                return explore?.data ? <Slick key={index} data={explore}/> : null
            })}
        </div>
    )
}

export default Explore
