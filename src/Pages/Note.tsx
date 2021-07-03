import React, { ReactElement } from 'react'
import Navbar from '../Components/Navbar'
import NoteList from '../Components/NoteList'
import ProfileSidebar from '../Components/ProfileSidebar'

interface Props {
    
}

function Note({}: Props): ReactElement {
    return (
        <>
            <Navbar />
            <div className="flex bg-gray-200">
                <ProfileSidebar />
                <NoteList />
            </div>
        </>
    )
}

export default Note
