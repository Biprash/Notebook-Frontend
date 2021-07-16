import { ChangeEvent, Dispatch, FormEvent, ReactElement, SetStateAction, useState } from 'react'

interface Props {
    setShowResourceForm: Dispatch<SetStateAction<boolean>>
}

function ResourceForm({setShowResourceForm}: Props): ReactElement {
    const [title, setTitle] = useState<string>('')
    const [link, setLink] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const handleNoteFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('In progress to create resource form');
    }
    return (
        <div className="fixed z-10 top-0 left-0 w-full h-full p-20 pb-10 bg-gray-300 bg-opacity-50 overflow-auto">
            <div className="w-9/12 md:w-2/5 m-auto p-6 bg-gray-100 rounded-lg shadow-md">
                <button onClick={() => setShowResourceForm(false)} className="float-right font-semibold text-lg bg-gray-300 hover:bg-red-600 hover:text-white px-3 pb-1 rounded-3xl">x</button>
                <h2 className="text-2xl font-semibold pb-2">Create New Note</h2>
                <form onSubmit={handleNoteFormSubmit} className="flex flex-col" >
                    <label className="py-2" htmlFor="title">Title</label>
                    <input onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} className="py-1 px-2 outline-none" type="text" name="title" />
                    
                    <label className="py-2" htmlFor="link">Link</label>
                    <input onChange={(e: ChangeEvent<HTMLInputElement>) => setLink(e.target.value)} className="py-1 px-2 outline-none" type="text" name="link" />
                    
                    <label className="py-2" htmlFor="description">Description</label>
                    <input onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} className="py-1 px-2 outline-none" type="text" name="description" />
                    
                    <input className="mx-auto rounded w-4/12 py-2 my-3 bg-blue-500 text-white hover:bg-blue-600" type="submit" value="Create" />
                </form>
            </div>
        </div>
    )
}

export default ResourceForm
