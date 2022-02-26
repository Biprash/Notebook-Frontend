import { ReactElement, useEffect, useState } from 'react'
import ProfileSidebar from '../Components/ProfileSidebar'
import server from '../server/server'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { userSelector } from '../redux/user/userSlice'
import { logout } from '../redux/user/creators'


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

            <main className="h-auto p-3 pt-16 ml-[260px] px-6">
            <h1 className="my-8 text-4xl font-semibold text-black-600">Recently Viewed Notes</h1>
            {notes && notes.length !==0 ?
                <div className="flex flex-wrap w-full">
                    {notes.map(note => {
                            return <NoteCard note={note} />
                    })}  
                </div>
                :
                <h1 className="text-4xl font-semibold mt-28 text-black-600">You have not recently viewed any notes.</h1>
            }
            </main>   
        </>
    )
}

export default RecentlyViewed
