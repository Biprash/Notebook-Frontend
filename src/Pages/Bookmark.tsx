import { ReactElement, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import NoteForm from '../Components/Forms/NoteForm'
import NoteList from '../Components/NoteList'
import ProfileSidebar from '../Components/ProfileSidebar'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { logout } from '../redux/user/creators'
import { userSelector } from '../redux/user/userSlice'
import server from '../server/server'

interface Note {
    id: number,
    title: string,
    description?: string,
    cover?: string
    published: Boolean
    is_bookmarked: Boolean
}

function Bookmark(): ReactElement {
    const [notes, setNotes] = useState<Array<Note>>([])
    const [updatingNote, setUpdatingNote] = useState<Note | null>(null)
    const [showNewNoteForm, setShowNewNoteForm] = useState<boolean>(false)
    const {user} = useAppSelector(userSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        server.get('/user/bookmarks')
        .then(({data}) => {
            setNotes(data?.data)
        })
        .catch(({response}) => {
            console.log(response);
            if (response.data.message === "Unauthenticated." && response.status === 401) {
                dispatch(logout())
            }
        })
    }, [])

    if (!user) {
        return <Redirect to='/login' />
    }

    return (
        <>
            {showNewNoteForm ? <NoteForm setShowNewNoteForm={setShowNewNoteForm} notes={notes} setNotes={setNotes} updatingNote={updatingNote} />: null}
            
            <ProfileSidebar selected="Bookmarks" />
            <main className="ml-64 p-3 h-auto">
                <h1 className="font-bold text-3xl text-gray-800 py-2">Bookmarked Notes</h1>
                <div className="item--cards">
                    {notes && notes.map(note => {
                            return <NoteList key={note.id} notes={notes} setNotes={setNotes} setUpdatingNote={setUpdatingNote} setShowNewNoteForm={setShowNewNoteForm} note={note} />
                        })}  
                </div>
            </main>
        </>
    )
}

export default Bookmark
