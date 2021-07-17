import { ChangeEvent, Dispatch, FormEvent, ReactElement, SetStateAction, useState } from 'react'
import server from '../../server/server';

interface Props {
    setShowPageForm: Dispatch<SetStateAction<boolean>>
}

function PageForm({setShowPageForm}: Props): ReactElement {
    const [title, setTitle] = useState('')

    const handlePageFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('currently working');
        if (title) {
            // server.post(process.env.REACT_APP_BASE_PATH + '/user/pages', { note_id: 'get note id', title: title})
            // .then(res => {
            //     console.log('page has beed created but left to append');
            // })
        }
    }
    return (
        <div className="fixed z-10 top-0 left-0 w-full h-full p-20 pb-10 bg-gray-300 bg-opacity-50 overflow-auto">
            <div className="w-9/12 md:w-3/5 xl:w-2/5 m-auto p-6 bg-gray-100 rounded-lg shadow-md">
                <button onClick={() => setShowPageForm(false)} className="float-right font-semibold text-lg bg-gray-300 hover:bg-red-600 hover:text-white px-3 pb-1 rounded-3xl">x</button>
                <h2 className="text-2xl font-semibold pb-2">Create New Page</h2>
                <form onSubmit={handlePageFormSubmit} className="flex flex-col" >
                    <label className="py-2" htmlFor="title">Title</label>
                    <input value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} className="py-1 px-2 outline-none" type="text" name="title" />
                    
                    <input className="mx-auto rounded w-4/12 py-2 my-3 bg-blue-500 text-white hover:bg-blue-600" type="submit" value="Create" />
                </form>
            </div>
        </div>
    )
}

export default PageForm
