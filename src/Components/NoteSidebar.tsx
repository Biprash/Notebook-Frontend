import React, { ReactElement } from 'react'

interface Props {
    
}

function NoteSidebar({}: Props): ReactElement {
    return (
        <div className="max-w-3xl w-64 py-2 px-4 flex flex-col border-r border-gray-300">
            <p className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 bg-white">Chapter 1</p>
            <p className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100">Chapter 2</p>
            <p className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100">Chapter 3</p>
            <p className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100">Chapter 4</p>
            <form method="post" className="flex flex-col my-2">
                <input className="px-2 py-1 outline-none focus:ring" type="text" name="page" />
                <input className="md:hidden w-1/4 my-2 px-2 py-1 rounded text-white bg-blue-500 hover:bg-blue-600" type="submit" value="Add" />
            </form>
        </div>
    )
}

export default NoteSidebar