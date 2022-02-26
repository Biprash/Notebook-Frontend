import { MouseEvent, ReactElement, useEffect, useState } from 'react'
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
    const [selectedPage, setSelectedPage] = useState<number>(0)
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
        if (pages.length === 1)
        {
            console.log(pages[0].id);
            
            setSelectedPage(pages[0].id)
        }
    }, [pages])

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
        <div>
            <div className="flex flex-col mt-16 ml-64">
                <div className="flex px-6 border-b border-gray-200">
                    <h1 className="py-2 mx-auto mb-2 text-3xl font-bold text-gray-800 uppercase underline-effect">{location.state?.title}</h1>
                    {!location.state?.isPublic ? 
                    <button onClick={handleNotePublish} className= {`text-white cursor-pointer px-8 my-2 rounded ${notePublished?'bg-red-500 hover:bg-red-500':'bg-blue-500 hover:bg-blue-900'}`}>{notePublished? 'Unpublish Note' : 'Publish Note'}</button>
                    : null }
                </div>
                <div className="flex">
                    <NoteSidebar pages={pages} setPages={setPages} setSelectedPage={setSelectedPage}  />
                    <NoteContent selectedPage={selectedPage} />
                </div>
            </div>
        </div>
  
    )
}

export default NoteDetail
