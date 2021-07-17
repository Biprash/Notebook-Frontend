import { ReactElement, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import NoteSidebar from '../Components/NoteSidebar'
import NoteContent from '../Components/NoteContent'
import server from '../server/server'
import { useLocation, useParams } from 'react-router-dom'

interface LocationState {
    isPublic?: Boolean | undefined
  }

interface RouteParams {
    noteId: string
}

interface Page {
    id: number
    title: string
}

function NoteDetail(): ReactElement {
    let location = useLocation<LocationState>()
    const { noteId } = useParams<RouteParams>()
    const [pages, setPages] = useState<Array<Page>>([])
    const [selectedPage, setSelectedPage] = useState<number>(1)
    

    useEffect(() => {
        if (location.state?.isPublic) {
            // Public
            server.get(`/pages/${noteId}/list`)
            .then(res => {
                console.log(res.data.data, 'pages public');
                // selectedPage works temporarily loads second
                setSelectedPage(res.data?.data[0]?.id)
                setPages(res.data.data)
            })
        } else {
            // Private
            server.get(`/user/pages/${noteId}/list`)
            .then(res => {
                console.log(res.data.data, 'pages private');
                setSelectedPage(res.data?.data[0]?.id)
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
