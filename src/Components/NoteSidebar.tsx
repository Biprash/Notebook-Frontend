import React, { ChangeEvent, Dispatch, FormEvent, ReactElement, SetStateAction, useState } from 'react'
import server from '../server/server'

interface Page {
    id: number
    title: string
}

interface Props {
    pageList: Page[]
    selectedPage: number
    setSelectedPage: Dispatch<SetStateAction<number>>
}

function NoteSidebar({pageList, selectedPage, setSelectedPage}: Props): ReactElement {
    const [page, setPage] = useState<string>('')

    const handlePageChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPage(e.target.value)
    }

    const handlePageSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // server.post('/user/pages', {
        //     title: page.trim(),
        //     note_id: selectedPage
        // })
        // .then(res => {
        //     pageList = [...pageList, res.data.data]
        //     setPage('')
        //     console.log(res.data.data, pageList, ';d');
            
        // })
    }
    return (
        <div className="max-w-3xl w-64 py-2 px-4 flex flex-col border-r border-gray-300">
            { pageList && pageList.map(page => {
                return <button key={page.id} onClick={() => setSelectedPage(page.id)} className={`text-left text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 ${page.id == selectedPage && 'bg-white'}`}>{page.title}</button>
            })}
            <form onSubmit={handlePageSubmit} method="post" className="flex flex-col my-2">
                <input value={page} onChange={handlePageChange} className="px-2 py-1 outline-none focus:ring" type="text" name="page" placeholder="New Page" />
                <input className="md:hidden w-1/4 my-2 px-2 py-1 rounded text-white bg-blue-500 hover:bg-blue-600" type="submit" value="Add" />
            </form>
        </div>
    )
}

export default NoteSidebar
