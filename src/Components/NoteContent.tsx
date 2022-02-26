import { ReactElement, MouseEvent, useEffect, useState } from 'react'
import { useLocation ,Link} from 'react-router-dom'
import server from '../server/server'
import ResourceForm from './Forms/ResourceForm'
import SectionForm from './Forms/SectionForm'

interface LocationState {
    isPublic?: Boolean | undefined
}

interface Section {
    id: number
    title: string
}

interface Resource {
    id: number
    title: string
    link: string
    description?: string
}

interface Props {
    selectedPage: number
}

function NoteContent({selectedPage}: Props): ReactElement {
    let location = useLocation<LocationState>()
    
    const [showSectionForm, setShowSectionForm] = useState<boolean>(false)
    const [showResourceForm, setShowResourceForm] = useState<boolean>(false)
    const [sections, setSections] = useState<Array<Section>>([])
    const [resources, setResources] = useState<Array<Resource>>([])
    const [selectedSection, setSelectedSection] = useState<number>(0)
    const [currentSection, setCurrentSection] = useState<number>(0)
    const [updatingResource, setUpdatingResource] = useState<Resource | null>(null)

    const handleResourceUpdate = (e: MouseEvent<HTMLButtonElement>, resource: Resource) => {
        setUpdatingResource(resource)
        setShowResourceForm(true)
    }

    const handleResourceDelete = (e: MouseEvent<HTMLButtonElement>, resource: Resource) => {
        server.delete(`/user/resources/${resource.id}`)
            .then(res => {
                if (res.data?.data) {
                    var array = [...resources];
                    var index = array.indexOf(resource)
                    if (index !== -1) {
                        array.splice(index, 1);
                        setResources(array);
                    }
                }
            })
            .catch(({response}) => {
                console.log(response.data?.message);            
            })
    }
    const handleNewResourceFormClick = (e: MouseEvent<HTMLButtonElement>) => {
        setUpdatingResource(null)
        setShowResourceForm(true)
    }
    
    useEffect(() => {
        if (sections.length === 1)
        {
            console.log(sections[0].id);
            
            setSelectedSection(sections[0].id)
        }
    }, [sections])

    useEffect(() => {     
        if (selectedPage !== 0) {
        server.get(`${location.state?.isPublic ? '': '/user'}/sections/${selectedPage}/list`)
                .then(res => {
                    console.log(res.data.data, 'sec');
                    setSections(res.data.data)
                    // not the full proof method
                    if (res.data.data[0]?.id) {
                        setSelectedSection(res.data.data[0]?.id)
                    } else {
                        setSelectedSection(0)
                    }
                    setCurrentSection(0)
                })
        }
    }, [selectedPage])

    useEffect(() => {
        if (selectedSection && selectedSection !== 0) {
            server.get(`${location.state?.isPublic ? '': '/user'}/resources/${selectedSection}/list`)
                .then(res => {
                    console.log(res.data.data, 'res');
                    setResources(res.data.data)
                })
        } else {
            setResources([])
        }
    }, [selectedSection])

    return (
        <>
            {showSectionForm ? <SectionForm pageId={selectedPage} sections={sections} setSections={setSections} setShowSectionForm={setShowSectionForm} /> : null}
            {showResourceForm ? <ResourceForm sectionId={selectedSection} resources={resources} setResources={setResources} setShowResourceForm={setShowResourceForm} updatingResource={updatingResource} /> : null}

            <div className="flex flex-col flex-1">
                <div className="flex flex-row flex-wrap px-4 py-4 border-b border-gray-200">
                    {sections.map((section, index) => {
                        return <button key={section.id} 
                        onClick={() => {
                            setCurrentSection(index)
                            setSelectedSection(section.id)
                        }} 
                        className={`text-left text-sm px-8 capitalize py-2 bg-gray-200 rounded-t-xl ${index === currentSection ? '!bg-gray-400 text-gray-900' : ''}`}>{section.title}</button>
                    })}
                    {!location.state?.isPublic && selectedPage && selectedPage !== 0 ? 
                    <button onClick={() => setShowSectionForm(true)} className="w-[60px] font-bold text-center text-gray-900 bg-gray-200 hover:bg-gray-400 rounded-t-xl">+</button>
                    : null }
                </div>
                <div className="grid grid-cols-1 px-4 py-6 border-gray-300 ">
                    <div>
                        {!location.state?.isPublic && selectedSection !== 0 ? 
                        <button onClick={handleNewResourceFormClick} className="justify-center mb-2 space-y-2">
                            <svg width="44" viewBox="0 0 101 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M45.9091 73.7143H30.4148C30.1104 73.7143 29.8184 73.8347 29.6032 74.049C29.388 74.2634 29.267 74.554 29.267 74.8571V81.7143C29.267 82.0174 29.388 82.3081 29.6032 82.5224C29.8184 82.7367 30.1104 82.8571 30.4148 82.8571H45.9091V98.2857C45.9091 98.5888 46.03 98.8795 46.2453 99.0938C46.4605 99.3082 46.7524 99.4286 47.0568 99.4286H53.9432C54.2476 99.4286 54.5395 99.3082 54.7547 99.0938C54.97 98.8795 55.0909 98.5888 55.0909 98.2857V82.8571H70.5852C70.8896 82.8571 71.1815 82.7367 71.3968 82.5224C71.612 82.3081 71.733 82.0174 71.733 81.7143V74.8571C71.733 74.554 71.612 74.2634 71.3968 74.049C71.1815 73.8347 70.8896 73.7143 70.5852 73.7143H55.0909V58.2857C55.0909 57.9826 54.97 57.6919 54.7547 57.4776C54.5395 57.2633 54.2476 57.1429 53.9432 57.1429H47.0568C46.7524 57.1429 46.4605 57.2633 46.2453 57.4776C46.03 57.6919 45.9091 57.9826 45.9091 58.2857V73.7143ZM99.6514 32.1C100.512 32.9571 101 34.1143 101 35.3286V123.429C101 125.957 98.9484 128 96.4091 128H4.59091C2.05156 128 0 125.957 0 123.429V4.57143C0 2.04286 2.05156 0 4.59091 0H65.5209C66.7403 0 67.9168 0.485715 68.7776 1.34286L99.6514 32.1ZM90.4122 37.4286L63.4119 10.5429V37.4286H90.4122Z" fill="black"/>
                            </svg>
                            <p className="text-sm text-center">Add Resource</p>
                        </button>
                        : null } 
                    </div>
        
                    <div className="flex flex-wrap w-full gap-6 pt-6">
                        {resources.map((resource, index) => {
                            return (
                                <div key={resource.id} className="custom-note--cards w-[300px] rounded">
                                    <Link to={{pathname: resource.link}} target={"_blank"} className="flex flex-col items-center mb-2 border-b-2 border-blue-200">
                                        <h2 className="h-12 px-1 my-4 text-xl font-semibold capitalize border-b-2 border-blue-200 text-gray-7000">{resource.title}</h2>
                                        <div className="h-46 w-ful ">
                                        <p className="px-2 overflow-auto text-sm italic text-gray-700 capitalize h-44">{resource.description}</p>
                                        </div>  
                                    </Link>
                                    {!location.state?.isPublic ? 
                                    <div className="flex justify-around my-2">
                                        <button className="" onClick={e => handleResourceUpdate(e, resource)}><i className="text-gray-700 hover:text-blue-800 fas fa-pencil-alt "></i></button>
                                        <button className="" onClick={e => handleResourceDelete(e, resource)}><i className="text-gray-700 hover:text-red-900 fas fa-trash-alt"></i></button>
                                    </div>
                                    : null }
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteContent
