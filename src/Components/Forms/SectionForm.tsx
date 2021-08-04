import { ChangeEvent, Dispatch, FormEvent, ReactElement, SetStateAction, useState } from 'react'
import server from '../../server/server'

interface Section {
    id: number
    title: string
}

interface Props {
    pageId: number
    sections: Section[]
    setSections: Dispatch<SetStateAction<Section[]>>
    setShowSectionForm: Dispatch<SetStateAction<boolean>>
}

function SectionForm({pageId, sections, setSections, setShowSectionForm}: Props): ReactElement {
    const [title, setTitle] = useState<string>('')
    console.log(pageId, 'frm');

    const [error, setError] = useState<string>('')

    const handleSectionFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log(pageId, 'sub');
        e.preventDefault()
        console.log('currently working');
        if (title && pageId) {
            server.post(process.env.REACT_APP_BASE_PATH + '/user/sections', { page_id: pageId, title: title})
            .then(res => {
                console.log(res.data?.data, 'section from data');
                if (res.data?.data) {
                    setSections([...sections, res.data.data])
                    setShowSectionForm(false)
                }
            })
            .catch(error=>{
                if(error.response.status === 422){
                    setError(error.response?.message)
                }
            })
        }
        
    }
    return (
        <div className="fixed z-10 top-0 left-0 w-full h-full p-8 sm:p-20 pb-10 bg-gray-300 bg-opacity-50 overflow-auto">
            <div className="w-9/12 md:w-3/5 xl:w-2/5 m-auto p-6 bg-gray-100 rounded-lg shadow-md">
                <button onClick={() => setShowSectionForm(false)} className="float-right font-semibold text-lg bg-gray-300 hover:bg-red-600 hover:text-white px-3 pb-1 rounded-3xl">x</button>
                <h2 className="text-2xl font-semibold pb-2">Create New Section</h2>
                <form onSubmit={handleSectionFormSubmit} className="flex flex-col" >
                    <label className="py-2" htmlFor="title">Title</label>
                    <p className="text-red-500">{error?error:null}</p>
                    <input value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} className="py-1 px-2 outline-none" type="text" name="title" required autoFocus />
                    
                    <input className="mx-auto rounded w-4/12 py-2 my-3 bg-blue-500 text-white hover:bg-blue-600" type="submit" value="Create" />
                </form>
            </div>
        </div>
    )
}

export default SectionForm
