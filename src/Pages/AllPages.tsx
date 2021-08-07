import axios from 'axios'
import { ReactElement, useEffect, useState, MouseEvent } from 'react'
import '../assets/css/Style.css'
import Notes from '../Components/Notes'
import server from '../server/server'

interface Note {
    id: number;
    title: string;
    description?: string;
    cover?: string;
    published: Boolean;
    is_bookmarked: Boolean
}

interface Link {
    url: string
    label: string
    active: boolean
}

function AllPages(): ReactElement {
    const [notes, setNotes] = useState<Array<Note>>([])
    const [links, setLinks] = useState<Array<Link>>([])

    const handlePagination = (e: MouseEvent<HTMLButtonElement>, link: Link) => {
        if (link.url) {
            axios.get(link.url)
            .then(res => {
                if (res.data?.data) {
                    console.log(res.data);
                    
                    setNotes(res.data.data)
                }
                if (res.data?.meta?.links) {
                    setLinks(res.data.meta.links)
                }
            })
        }
    }

    useEffect(() => {
        server.get('/all-notes')
        .then(res => {
            if (res.data?.data) {
                console.log(res.data);
                
                setNotes(res.data.data)
            }
            if (res.data?.meta?.links) {
                setLinks(res.data.meta.links)
            }
        })
    }, [])

    return (
        <div className="container mt-20 ">
            <div className="">
                <h1 className="text-center text-3xl uppercase font-bold text-gray-600" > All Notes </h1> 
            </div>
                <div className="grid grid-cols-2">
            
                {    
                  notes && notes.map((note, index) => {    
                     return note ? <Notes key={index} note={note}/> : null
                })}
                  </div>

              <div className="bg-gray-500">
                        {links && links.map((link, index) => {
                            return <button className={`some-class ${link.active ? 'active' : null}`} key={index} onClick={e => handlePagination(e, link)}>{link.label}</button>
                        })}
              </div>
        </div>
    )
}

export default AllPages
