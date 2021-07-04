import React, { Dispatch, ReactElement, SetStateAction } from 'react'

interface Page {
    id: number
    title: string
}

interface Props {
    pageList: Page[]
    setSelectedPage: Dispatch<SetStateAction<number>>
}

function NoteSidebar({pageList, setSelectedPage}: Props): ReactElement {
    return (
        <div className="max-w-3xl w-64 py-2 px-4 flex flex-col border-r border-gray-300">
            {pageList.map(page => {
                return <button key={page.id} onClick={() => setSelectedPage(page.id)} className="text-left text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 bg-white">{page.title}</button>
            })}
            <form method="post" className="flex flex-col my-2">
                <input className="px-2 py-1 outline-none focus:ring" type="text" name="page" placeholder="New Page" />
                <input className="md:hidden w-1/4 my-2 px-2 py-1 rounded text-white bg-blue-500 hover:bg-blue-600" type="submit" value="Add" />
            </form>
        </div>
    )
}

export default NoteSidebar
