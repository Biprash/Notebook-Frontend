import { ReactElement, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import NoteSidebar from '../Components/NoteSidebar'
import NoteContent from '../Components/NoteContent'
import server from '../server/server'
import { useParams } from 'react-router-dom'

interface RouteParams {
    id: string
}

interface Page {
    id: number
    title: string
}

function NoteDetail(): ReactElement {
    const { id } = useParams<RouteParams>()
    const [pages, setPages] = useState<Array<Page>>([])
    const [selectedPage, setSelectedPage] = useState<number>(1)
    

    useEffect(() => {
        server.get(`/user/pages/${id}/list`)
        .then(res => {
            console.log(res.data.data);
            setPages(res.data.data)
        })
    }, [])    
    
    return (
        <>
            <Navbar />
            <div className="flex flex-col">
                <h1 className="font-bold text-3xl text-gray-800 mx-auto py-2">Title of the Note</h1>
                <div className="flex bg-gray-200">
                    <NoteSidebar pageList={pages} selectedPage={selectedPage} setSelectedPage={setSelectedPage}  />
                    <NoteContent />
                </div>
            </div>
        </>
    )
}

export default NoteDetail
