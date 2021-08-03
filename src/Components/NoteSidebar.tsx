import { Dispatch, ReactElement, SetStateAction, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageForm from './Forms/PageForm'

interface LocationState {
    isPublic?: Boolean | undefined
}

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
    let location = useLocation<LocationState>()
    const [showPageForm, setShowPageForm] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(0)
    return (
        <>
            {showPageForm ? <PageForm setShowPageForm={setShowPageForm}  pages={pages} setPages={setPages} /> : null}
            <div className="fixed inset-y-0 left-0 flex flex-col bg-gray-200 shadow-xl p-1 mt-14 w-64 h-full">
                { pages && pages.map((page, index) => {
                    return (
                        <div key={index} className="flex">
                            <button key={page.id} 
                            onClick={() => {
                                setSelectedPage(page.id)
                                setCurrentPage(index)
                            }} 
                            className={`text-left text-gray-700 py-1 px-4 my-1 mx-2 w-9/12 capitalize rounded hover:bg-gray-100 ${index === currentPage && 'bg-white'}`}>{page.title}</button>
                            <button><i className="mr-2 fas fa-trash-alt"></i></button>
                            <button><i className="fas fa-pencil-alt"></i></button>                            
                        </div>
                    )
                })}
                {!location.state?.isPublic ? 
                <button onClick={() => setShowPageForm(true)} className="bg-blue-500 text-white py-2 my-4 mx-2 rounded text-sm hover:bg-blue-600">Add Page</button>
                : null }
            </div>
        </>
    )
}

export default NoteSidebar
