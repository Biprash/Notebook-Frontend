import { Dispatch, ReactElement, SetStateAction, useState } from 'react'
import PageForm from './Forms/PageForm'

interface Page {
    id: number
    title: string
}

interface Props {
    pages: Page[]
    setPages: Dispatch<SetStateAction<Page[]>>
    setSelectedPage: Dispatch<SetStateAction<number>>
}

function NoteSidebar({pages, setPages, setSelectedPage}: Props): ReactElement {
    const [showPageForm, setShowPageForm] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(0)
    return (
        <>
            {showPageForm ? <PageForm setShowPageForm={setShowPageForm}  pages={pages} setPages={setPages} /> : null}
            <div className="max-w-3xl w-64 py-2 px-4 flex flex-col border-r border-gray-300">
                { pages && pages.map((page, index) => {
                    return <button key={page.id} 
                    onClick={() => {
                        setSelectedPage(page.id)
                        setCurrentPage(index)
                    }} 
                    className={`text-left text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 ${index === currentPage && 'bg-white'}`}>{page.title}</button>
                })}
                <button onClick={() => setShowPageForm(true)} className="bg-blue-500 text-white py-1 text-sm hover:bg-blue-600">Add Page</button>
            </div>
        </>
    )
}

export default NoteSidebar
