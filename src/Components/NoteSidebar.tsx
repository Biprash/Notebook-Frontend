import { Dispatch, ReactElement, SetStateAction, MouseEvent, useState } from 'react'
import { useLocation } from 'react-router-dom'
import server from '../server/server'
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
    const [updatingPage, setUpdatingPage] = useState<Page | null>(null)

    const handlePageDelete = (e: MouseEvent<HTMLButtonElement>, page: Page) => {
        if (window.confirm('All it\'s section and resources will also be deleted. \nAre you sure you want to delete?')) {
            server.delete(`/user/pages/${page.id}`)
            .then(res => {
                if (res.data?.data) {
                    var array = [...pages];
                    var index = array.indexOf(page)
                    if (index !== -1) {
                        array.splice(index, 1);
                        setPages(array);
                    }
                }
            })
            .catch(({response}) => {
                console.log(response.data?.message);            
            })
        }
    }

    const handlePageUpdate = (e: MouseEvent<HTMLButtonElement>, page: Page) => {
        setUpdatingPage(page)
        setShowPageForm(true)
    }

    const handleNewPageFormClick = (e: MouseEvent<HTMLButtonElement>) => {
        setUpdatingPage(null)
        setShowPageForm(true)
    }

    return (
        <>
            {showPageForm ? <PageForm setShowPageForm={setShowPageForm}  pages={pages} setPages={setPages} updatingPage={updatingPage} /> : null}
            <div className="fixed inset-y-0 left-0 flex flex-col bg-gray-200 shadow-xl p-1 mt-14 w-64 h-full">
                { pages && pages.map((page, index) => {
                    return (
                        <div key={index} className="flex">
                            <button key={page.id} 
                            onClick={() => {
                                setSelectedPage(page.id)
                                setCurrentPage(index)
                            }} 
                            className={`text-left text-gray-700 py-1 px-4 my-1 mx-2 ${!location.state?.isPublic ? 'w-9/12': 'w-full'} capitalize rounded-md border-solid border-2 border-gray-300 shadow-2xl hover:bg-gray-100 ${index === currentPage && 'bg-white'}`}>{page.title}</button>
                            {!location.state?.isPublic ? 
                            <>
                                <button onClick={(e) => handlePageUpdate(e, page)}><i className="hover:text-blue-700 mr-2 fas fa-pencil-alt"></i></button>                            
                                <button onClick={(e) => handlePageDelete(e, page)}><i className=" hover:text-red-700 fas fa-trash-alt"></i></button>
                            </>
                            : null}
                        </div>
                    )
                })}
                {!location.state?.isPublic ? 
                <button onClick={handleNewPageFormClick} className="bg-blue-500 text-white py-2 my-4 mx-2 rounded text-sm hover:bg-blue-600">Add Page</button>
                : null }
            </div>
        </>
    )
}

export default NoteSidebar
