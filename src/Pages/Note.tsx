import React, { ReactElement, useEffect, useState, MouseEvent } from 'react'
import { Redirect } from 'react-router-dom'
import NoteForm from '../Components/Forms/NoteForm'
import Navbar from '../Components/Navbar'
import NoteList from '../Components/NoteList'
import ProfileSidebar from '../Components/ProfileSidebar'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { logout } from '../redux/user/creators'
import { userSelector } from '../redux/user/userSlice'
import server from '../server/server'

import '../assets/css/Style.css'

interface Note {
    id: number,
    title: string,
    description?: string,
    cover?: string
    published: Boolean
}

function Note(): ReactElement {
    const [notes, setNotes] = useState<Array<Note>>([])
    const [showNewNoteForm, setShowNewNoteForm] = useState<boolean>(false)
    const {user} = useAppSelector(userSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        server.get('/user/notes')
        .then(res => {
            setNotes(res?.data.data)
        })
        .catch(({response}) => {
            console.log(response);
            if (response.data.message === "Unauthenticated." && response.status === 401) {
                dispatch(logout())
            }
        })
    }, [])

    const handleNewNoteFormClick = (e: MouseEvent<HTMLButtonElement>) => {
        setShowNewNoteForm(true)
    }
    if (!user) {
        return <Redirect to='/login' />
    }

    return (
        <>
            {showNewNoteForm ? <NoteForm setShowNewNoteForm={setShowNewNoteForm} notes={notes} setNotes={setNotes} />: null}
            <Navbar />
            {/* <ProfileSidebar /> */}

            {/* <div className="item--cards">
                <div className="flex">
                    <button onClick={handleNewNoteFormClick} className="bg-white rounded w-40 m-2 max-h-52 flex flex-col justify-center items-center">
                        <div className="w-10"><svg viewBox="0 0 101 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.9091 73.7143H30.4148C30.1104 73.7143 29.8184 73.8347 29.6032 74.049C29.388 74.2634 29.267 74.554 29.267 74.8571V81.7143C29.267 82.0174 29.388 82.3081 29.6032 82.5224C29.8184 82.7367 30.1104 82.8571 30.4148 82.8571H45.9091V98.2857C45.9091 98.5888 46.03 98.8795 46.2453 99.0938C46.4605 99.3082 46.7524 99.4286 47.0568 99.4286H53.9432C54.2476 99.4286 54.5395 99.3082 54.7547 99.0938C54.97 98.8795 55.0909 98.5888 55.0909 98.2857V82.8571H70.5852C70.8896 82.8571 71.1815 82.7367 71.3968 82.5224C71.612 82.3081 71.733 82.0174 71.733 81.7143V74.8571C71.733 74.554 71.612 74.2634 71.3968 74.049C71.1815 73.8347 70.8896 73.7143 70.5852 73.7143H55.0909V58.2857C55.0909 57.9826 54.97 57.6919 54.7547 57.4776C54.5395 57.2633 54.2476 57.1429 53.9432 57.1429H47.0568C46.7524 57.1429 46.4605 57.2633 46.2453 57.4776C46.03 57.6919 45.9091 57.9826 45.9091 58.2857V73.7143ZM99.6514 32.1C100.512 32.9571 101 34.1143 101 35.3286V123.429C101 125.957 98.9484 128 96.4091 128H4.59091C2.05156 128 0 125.957 0 123.429V4.57143C0 2.04286 2.05156 0 4.59091 0H65.5209C66.7403 0 67.9168 0.485715 68.7776 1.34286L99.6514 32.1ZM90.4122 37.4286L63.4119 10.5429V37.4286H90.4122Z" fill="black"/>
                        </svg></div>
                        <p className="text-sm text-center mt-4">Add Note</p>
                    </button>
                    
                    {notes && notes.map(note => {
                        return <NoteList key={note.id} note={note} />
                    })}  

                </div>              
            </div> */}

            <div>
            <button onClick={handleNewNoteFormClick} className=" rounded w-40 m-2 h-28 max-h-30 flex flex-col justify-center items-center">
                        <div className="w-10"><svg viewBox="0 0 101 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.9091 73.7143H30.4148C30.1104 73.7143 29.8184 73.8347 29.6032 74.049C29.388 74.2634 29.267 74.554 29.267 74.8571V81.7143C29.267 82.0174 29.388 82.3081 29.6032 82.5224C29.8184 82.7367 30.1104 82.8571 30.4148 82.8571H45.9091V98.2857C45.9091 98.5888 46.03 98.8795 46.2453 99.0938C46.4605 99.3082 46.7524 99.4286 47.0568 99.4286H53.9432C54.2476 99.4286 54.5395 99.3082 54.7547 99.0938C54.97 98.8795 55.0909 98.5888 55.0909 98.2857V82.8571H70.5852C70.8896 82.8571 71.1815 82.7367 71.3968 82.5224C71.612 82.3081 71.733 82.0174 71.733 81.7143V74.8571C71.733 74.554 71.612 74.2634 71.3968 74.049C71.1815 73.8347 70.8896 73.7143 70.5852 73.7143H55.0909V58.2857C55.0909 57.9826 54.97 57.6919 54.7547 57.4776C54.5395 57.2633 54.2476 57.1429 53.9432 57.1429H47.0568C46.7524 57.1429 46.4605 57.2633 46.2453 57.4776C46.03 57.6919 45.9091 57.9826 45.9091 58.2857V73.7143ZM99.6514 32.1C100.512 32.9571 101 34.1143 101 35.3286V123.429C101 125.957 98.9484 128 96.4091 128H4.59091C2.05156 128 0 125.957 0 123.429V4.57143C0 2.04286 2.05156 0 4.59091 0H65.5209C66.7403 0 67.9168 0.485715 68.7776 1.34286L99.6514 32.1ZM90.4122 37.4286L63.4119 10.5429V37.4286H90.4122Z" fill="black"/>
                        </svg></div>
                        <p className="text-sm text-center mt-4">Add Note</p>
            </button>
            <div className="item--cards">
                   {notes && notes.map(note => {
                        return <NoteList key={note.id} note={note} />
                    })}  
            </div>
            </div>
          

        </>
    )
}

export default Note
