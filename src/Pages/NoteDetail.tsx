import { MouseEvent, ReactElement, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import NoteSidebar from '../Components/NoteSidebar'
import NoteContent from '../Components/NoteContent'
import server from '../server/server'
import { useLocation, useParams } from 'react-router-dom'

interface LocationState {
    title: string
    published: Boolean
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
    const [notePublished, setNotePublished] = useState<Boolean>(location.state?.published)
    
    const handleNotePublish = (e: MouseEvent<HTMLButtonElement>) => {
        // reload garda kam gardaina TODO ...
        server.get(`/user/notes/${noteId}/publish`)
        .then(res => {
            console.log(res.data, 'publish');
            
            if (res.data.message === "Note published Successfully") {
                setNotePublished(true)
            } else if(res.data.message === "Note saved as Draft Successfully") {
                setNotePublished(false)
            } 
        })
    }

    useEffect(() => {
        server.get(`${location.state?.isPublic ? '': '/user'}/pages/${noteId}/list`)
            .then(res => {
                console.log(res.data.data, 'pages');
                // selectedPage works temporarily loads second
                setSelectedPage(res.data?.data[0]?.id)
                setPages(res.data.data)
            })      
    }, [])    
    
    return (
        <>
            <Navbar />
            <div className="flex flex-col">
                <div className="container flex flex-column">
                    <h1 className="font-bold text-3xl text-gray-800 mx-auto py-2">{location.state?.title}</h1>
                    <button onClick={handleNotePublish} className={`text-white px-8 my-2 rounded ${notePublished?'bg-red-500 hover:bg-red-500':'bg-blue-500 hover:bg-blue-600'}`}>{notePublished? 'Unpublish Note' : 'Publish Note'}</button>
                </div>
                <div className="flex bg-gray-200">
                    <NoteSidebar pages={pages} setPages={setPages} setSelectedPage={setSelectedPage}  />
                    <NoteContent selectedPage={selectedPage} />
                </div>
            </div>
        </>
    )
}

export default NoteDetail
