import React, { ReactElement, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Slick from '../Components/Slick'
import server from '../server/server'

interface Props {
}

interface Note {
    title: string
    description?: string
    cover?: string
}

interface NoteList {
    title: string;
    data?: Note[];
}

function Explore({ }: Props): ReactElement {
    const [explores, setExplores] = useState<Array<NoteList>>([])

    useEffect(() => {
        server.get('/api/explore')
        .then(res => {        
            console.log(res.data.data);
                
            setExplores(res.data.data)            
        })
    }, [])
    return (
        <>
            <Navbar />
            <div className="container">
                {                
                explores && explores.map(explore => {
                    console.log(explore,'ex');
                                                                         
                    return <Slick data={explore}/>
                })}
            </div>
        </>
    )
}

export default Explore
