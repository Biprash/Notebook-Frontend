import { ReactElement, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import NoteSidebar from '../Components/NoteSidebar'
import NoteContent from '../Components/NoteContent'
import server from '../server/server'
import { useLocation, useParams } from 'react-router-dom'

interface LocationState {
    isPublic?: Boolean
  }

interface RouteParams {
    id: string
}

interface Page {
    id: number
    title: string
}

function NoteDetail(): ReactElement {
    let location = useLocation<LocationState>()
    const { id } = useParams<RouteParams>()
    const [pages, setPages] = useState<Array<Page>>([])
    const [selectedPage, setSelectedPage] = useState<number>(1)
    

    useEffect(() => {
        if (location.state?.isPublic) {            
            server.get(`/pages/${id}/list`)
            .then(res => {
                console.log(res.data.data);
                setPages(res.data.data)
            })
        } else {
            server.get(`/user/pages/${id}/list`)
            .then(res => {
                console.log(res.data.data);
                setPages(res.data.data)
            })
        }        
    }, [])    
    
    return (
        <>
            <Navbar />
            <div className="flex flex-col">
                <h1 className="font-bold text-3xl text-gray-800 mx-auto py-2">Title of the Note</h1>
                <div className="flex bg-gray-200">
                    <NoteSidebar pageList={pages} selectedPage={selectedPage} setSelectedPage={setSelectedPage}  />
                    <NoteContent selectedPage={selectedPage} />
                </div>
            </div>
        </>
    )
}

export default NoteDetail
