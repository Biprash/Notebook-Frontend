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
        <div className="container mt-20">
            <h1 className="text-2xl font-bold my-6 text-gray-800">Search Result for : <span className="ml-1 italic text-gray-600 ">{search}</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-2 lg:grid-cols-3 xl:grid-cols-4  border-dashed border-2 border-gray-400 p-6 rounded-lg">
                { noteList.length !== 0 && noteList.map(note => {
                    return(
                        <Link to={{ 
                                pathname:`/note/${note.id}`,
                                state: { title: note.title, published: note.published, isPublic: true }
                            }} key={note.id} className="bg-white rounded-xl">
                            <img src={note.cover} alt="" className="rounded-t bg-cover bg-center bg-no-repeat" />
                            <div className="flex flex-col px-4 py-1 shadow-2xl border-solid border-2 border-gray-200 rounded-xl hover:opacity-60 delay-50">
                                <h2 className="font-semibold text-lg text-center uppercase py-0 pt-1 text-gray-800">{note.title}</h2>
                                <p className="py-2 truncate overflow-hidden capitalize text-gray-800">{note.description}</p>
                            </div>
                        </Link>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Search
