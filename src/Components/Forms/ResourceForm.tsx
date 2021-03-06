import { ChangeEvent, Dispatch, FormEvent, ReactElement, SetStateAction, useEffect, useState } from 'react'
import server from '../../server/server'

interface Resource {
    id: number
    title: string
    link: string
    description?: string
}

interface Props {
    sectionId: number
    resources: Resource[]
    updatingResource: Resource | null
    setResources: Dispatch<SetStateAction<Resource[]>>
    setShowResourceForm: Dispatch<SetStateAction<boolean>>
}

function ResourceForm({sectionId, resources, updatingResource, setResources, setShowResourceForm}: Props): ReactElement {
    const [title, setTitle] = useState<string>('')
    const [link, setLink] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const [error, setError] = useState<string>('')

    const getValidatedData = () => {
        if (title) {
            return {
                section_id: sectionId,
                title: title,
                link: link,
                description: description
            }
        } else return false
    }

    const handleResourceFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('currently working');
        const formData = getValidatedData()
        
        if(formData) {
            if (updatingResource) {
                server.put(process.env.REACT_APP_BASE_PATH + `/user/resources/${updatingResource.id}`, formData)
                .then(res => {
                    if (res.data?.data) {
                        const data = res.data.data
                        const index = resources.findIndex(resource => resource.id === data.id),
                            newNotes = [...resources] // important to create a copy, otherwise you'll modify state outside of setState call
                        newNotes[index] = data;                
                        setResources(newNotes);
                        setShowResourceForm(false)
                    }
                })
                .catch(
                    error=>{
                        if(error.response.status === 422 ){
                            setError(error?.response.data?.message)
                        }
                    }
                )
            } else {
                server.post(process.env.REACT_APP_BASE_PATH + '/user/resources', formData)
                .then(res => {
                    console.log(res.data?.data, 'response form');
                    if (res.data?.data) {
                        setResources([...resources, res.data.data])
                        setShowResourceForm(false)
                    }
                })
                .catch(
                    error=>{
                        if(error.response.status === 422){
                            setError(error?.response.data?.message)
                        }
                    }
                )
            }
        }
    }

    useEffect(() => {        
        if (updatingResource) {
            setTitle(updatingResource.title)
            if (updatingResource?.link) {
                setLink(updatingResource.link)
            }
            if (updatingResource?.description) {
                setDescription(updatingResource.description)
            }
        }
    }, [updatingResource])

    return (
        <div className="fixed z-10 top-0 left-0 w-full h-full p-8 sm:p-20 pb-10 bg-gray-300 bg-opacity-50 overflow-auto">
            <div className="w-9/12 md:w-3/5 xl:w-2/5 m-auto p-6 bg-gray-100 rounded-lg shadow-md">
                <button onClick={() => setShowResourceForm(false)} className="float-right font-semibold text-lg bg-gray-300 hover:bg-red-600 hover:text-white px-3 pb-1 rounded-3xl">x</button>
                <h2 className="text-2xl font-semibold pb-2">{updatingResource ? 'Update' : 'Create New'} Resource</h2>
               
                <form onSubmit={handleResourceFormSubmit} className="flex flex-col" >
                    <label className="py-2" htmlFor="title">Title</label>
                     <p className="text-red-500">{error?error:null}</p>
                    <input value={title} onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} className="py-1 px-2 outline-none" type="text" name="title" required autoFocus />
                    <label className="py-2" htmlFor="link">Link</label>
                    <input value={link} onChange={(e: ChangeEvent<HTMLInputElement>) => setLink(e.target.value)} className="py-1 px-2 outline-none" type="text" name="link" />
                    <label className="py-2" htmlFor="description">Description</label>
                    <input value={description} onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} className="py-1 px-2 outline-none" type="text" name="description" />
                    <input className="mx-auto rounded w-4/12 py-2 my-3 bg-blue-500 text-white hover:bg-blue-600" type="submit" value={updatingResource ? 'Update' : 'Create'} />
                </form>
            </div>
        </div>
    )
}

export default ResourceForm
