import { ReactElement, useEffect, useState } from 'react'
import ProfileSidebar from '../Components/ProfileSidebar'
import server from '../server/server'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { userSelector } from '../redux/user/userSlice'
import { logout } from '../redux/user/creators'

import '../assets/css/Style.css'
import NoteCard from '../Components/NoteCard'

interface Note {
    id: number,
    title: string,
    description?: string,
    cover?: string
    published: Boolean
    is_bookmarked: Boolean
}

function RecentlyViewed(): ReactElement {
    const [notes, setNotes] = useState<Array<Note>>([])
    const {user} = useAppSelector(userSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        server.get('/user/recently-viewed')
        .then(res => {
            setNotes(res?.data.data)
        })
        .catch(( {response}) => {
            console.log(response);
            if (response.data.message === "Unauthenticated." && response.status === 401) {
                dispatch(logout())
            }
        })
    }, [])
    return (
        <>
            <ProfileSidebar selected="Recently Viewed" />

            <main className="ml-80 p-3 h-auto pt-16">
            <h1 className="font-semibold text-4xl my-8 text-black-600">Recently Viewed Notes</h1>
            {notes && notes.length !==0 ?
                <div className="item--cards">
                    {notes.map(note => {
                            return <NoteCard note={note} />
                    })}  
                </div>
                :
                <h1 className="font-semibold text-4xl mt-28 text-black-600">You have not recently viewed any notes.</h1>
            }
            </main>   
        </>
    )
}

export default RecentlyViewed
