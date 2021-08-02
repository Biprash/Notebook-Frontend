import { ChangeEvent, Dispatch, FormEvent, MouseEvent, ReactElement, SetStateAction, useEffect, useState } from 'react'
import server from '../../server/server'

interface Note {
    id: number,
    title: string,
    description?: string,
    cover?: string,
    published: Boolean
}

interface Props {
    notes: Note[]
    updatingNote: Note | null
    setNotes: Dispatch<SetStateAction<Note[]>>
    setShowNewNoteForm: Dispatch<SetStateAction<boolean>>
}

function NoteForm({notes, updatingNote, setNotes, setShowNewNoteForm}: Props): ReactElement {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [cover, setCover] = useState<File>()
    useEffect(() => {        
        if (updatingNote) {
            setTitle(updatingNote.title)
            if (updatingNote.description) {
                setDescription(updatingNote.description)
            }
        }
    }, [updatingNote])
    
    const getValidatedData = () => {
        
        if (title) {
            const formData = new FormData()
            formData.append('title', title.trim())
            if (description) 
                formData.append('description', description.trim())
            if (cover) 
                formData.append('cover', cover, cover.name)
            return formData
        } else return false
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            setCover(undefined)
            return
        }
        setCover(e.target.files[0])
        console.log(e.target.files[0]);
        
    }

    const handleNoteFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('currently working');
        const formData = getValidatedData()
        console.log(formData, title.trim());
        
        
        if (formData) {
            if (updatingNote) {
                formData.append('_method', 'PUT');
                server.post(process.env.REACT_APP_BASE_PATH + `/user/notes/${updatingNote.id}`, formData)
                .then(res => {
                    if (res.data?.data) {
                        const data = res.data.data
                        const index = notes.findIndex(note => note.id === data.id),
                            newNotes = [...notes] // important to create a copy, otherwise you'll modify state outside of setState call
                        newNotes[index] = data;                
                        setNotes(newNotes);
                        setShowNewNoteForm(false)
                    }
                })
            } else {
                server.post(process.env.REACT_APP_BASE_PATH + '/user/notes', formData)
                .then(res => {
                    console.log(res.data, 'note');
                    if (res.data.data) {
                        setNotes([...notes, res.data.data])
                        setShowNewNoteForm(false)
                    }
                })
            }
        }
    }
    return (
        <div className="fixed z-10 top-0 left-0 w-full h-full p-8 sm:p-20 pb-10 bg-gray-300 bg-opacity-50 overflow-auto">
            <div className="w-9/12 md:w-3/5 xl:w-2/5 m-auto p-6 bg-gray-100 rounded-lg shadow-md">
                <button onClick={() => setShowNewNoteForm(false)} className="float-right font-semibold text-lg bg-gray-300 hover:bg-red-600 hover:text-white px-3 pb-1 rounded-3xl">x</button>
                <h2 className="text-2xl font-semibold pb-2">{updatingNote ? 'Update' : 'Create New'} Note</h2>
                <form onSubmit={handleNoteFormSubmit} className="flex flex-col" >
                    <label className="py-2" htmlFor="title">Title</label>
                    <input value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} className="py-1 px-2 outline-none" type="text" name="title" required autoFocus />
                    
                    <label className="py-2" htmlFor="description">Description</label>
                    <input value={description} onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} className="py-1 px-2 outline-none" type="text" name="description" />
                    
                    <label className="py-2" htmlFor="cover">Cover</label>
                    <input onChange={handleFileChange} className="py-1 px-2" type="file" name="cover" />

                    <input className="mx-auto rounded w-4/12 py-2 my-3 bg-blue-500 text-white hover:bg-blue-600" type="submit" value={updatingNote ? 'Update': 'Create'} />
                </form>
            </div>
        </div>
    )
}

export default NoteForm
