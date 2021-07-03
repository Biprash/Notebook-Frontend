import { ReactElement } from 'react'
import Navbar from '../Components/Navbar'
import NoteSidebar from '../Components/NoteSidebar'
import NoteContent from '../Components/NoteContent'

interface Props {
    
}

function NoteDetail({}: Props): ReactElement {
    return (
        <>
            <Navbar />
            <div className="flex flex-col">
                <h1 className="font-bold text-3xl text-gray-800 mx-auto py-2">Title of the Note</h1>
                <div className="flex bg-gray-200">
                    <NoteSidebar />
                    <NoteContent />
                </div>
            </div>
        </>
    )
}

export default NoteDetail
