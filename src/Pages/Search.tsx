import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import server from '../server/server'

interface Note {
    id: number
    title: string
    description?: string
    cover?: string
    published: Boolean
}

interface Props {
    search: string
    setSearch: Dispatch<SetStateAction<string>>
}

function Search({search, setSearch}: Props): ReactElement {    
    const location = useLocation()
    const [previousPath, setPreviousPath] = useState<string>('')
    const [noteList, setNoteList] = useState<Array<Note>>([])

    useEffect(() => {
        if ( previousPath && (previousPath !== location.pathname)) {
            setSearch('')
        }
        setPreviousPath(location.pathname)
        
    }, [location])

    useEffect(() => {
        console.log('me');
        
        server.get(`/user/search?q=${search}`,)
        .then((res) => {
            console.log(res.data.data.data, 'search');
            if (res.data?.data?.data) {
                setNoteList(res.data.data.data)
            }
        })
    }, [search])
    return (
        <div className="container">
            <h1 className="text-2xl font-bold my-6">Search Result for '{search}'</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                { noteList.length !== 0 && noteList.map(note => {
                    return(
                        <Link to={{ 
                                pathname:`/note/${note.id}`,
                                state: { title: note.title, published: note.published, isPublic: true }
                            }} key={note.id} className="bg-white rounded w-64">
                            <img src={note.cover} alt="" className="rounded-t bg-cover bg-center bg-no-repeat" />
                            <div className="flex flex-col px-4 py-3">
                                <h2 className="font-semibold text-lg py-1 ">{note.title}</h2>
                                <p className="py-2">{note.description}</p>
                            </div>
                        </Link>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Search
