import React, { ReactElement, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Slick from '../Components/Slick'
import server from '../server/server'

interface Note {
    id: number
    title: string
    description?: string
    cover?: string
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
        <>
            <Navbar />
            <div className="container">
                {                
                explores && explores.map((explore, index) => {                                                                         
                    return <Slick key={index} data={explore}/>
                })}
            </div>
        </>
    )
}

export default Explore
