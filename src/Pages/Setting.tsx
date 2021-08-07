import { ChangeEvent, FormEvent, ReactElement, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import '../assets/css/Style.css'
import Img1 from '../assets/images/books.jpg';
import ProfileSidebar from '../Components/ProfileSidebar'
import { useAppSelector } from '../redux/hooks';
import { userSelector } from '../redux/user/userSlice';
import server from '../server/server';

function Setting(): ReactElement {
    const [error, setError] = useState('')    
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [profilePic, setProfilePic] = useState<File>()
    const [oldProfilePic, setOldProfilePic] = useState<string>('')
    const {user} = useAppSelector(userSelector)

    const getValidatedData = () => {
        
        if (name && email) {
            const formData = new FormData()
            formData.append('name', name.trim())
            formData.append('email', email.trim())
            if (profilePic) 
                formData.append('profile_pic', profilePic, profilePic.name)
            
            return formData
        } else return false
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            setProfilePic(undefined)
            return
        }
        setProfilePic(e.target.files[0])
        console.log(e.target.files[0]);
    }

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('currently working');
        const formData = getValidatedData()
        
        
        if (formData) {
            formData.append('_method', 'PUT');
            server.post(process.env.REACT_APP_BASE_PATH + '/user/profile', formData)
            .then(res => {
                if (res.data?.data) {
                    attachData(res.data?.data)
                    // const data = res.data.data
                    // const index = notes.findIndex(note => note.id === data.id),
                    //     newNotes = [...notes] // important to create a copy, otherwise you'll modify state outside of setState call
                    // newNotes[index] = data;                
                    // setNotes(newNotes);
                    // setShowNewNoteForm(false)
                }
            })
            .catch(error => {
                if (error.response.status === 422) {
                    setError(error?.response.data?.message)
                }
            })
        }
    }

    const attachData = (data:any) => {
        setName(data.name)
        setEmail(data.email)
        if (data?.profile_pic) 
            setOldProfilePic(data.profile_pic)
    }

    useEffect(() => {
        server.get(process.env.REACT_APP_BASE_PATH + '/user/profile')
        .then(res => {
            console.log(res.data?.data);
            
            attachData(res.data?.data)
        })
    }, [])

    if (!user) {        
        return <Redirect to='/login' />
    }

    return (
    <>
    <ProfileSidebar selected="Setting" />
        <div className="mt-16 flex flex-col justify-center items-center ">
           <div className=" p-10 border-2 border-dashed border-gray-300 rounded pr-8 ">
              <h1 className="text-2xl ml-6 my-3">Profile</h1>
              <p className="text-red-500">{error?error:null}</p>
              <form onSubmit={handleFormSubmit}>
               <div className="flex">
                   <div className="text-white">
                       <div className="w-52 h-28 ml-auto mr-10 relative">
                           <img className="rounded-lg w-full shadow-2xl" src={oldProfilePic ? oldProfilePic : Img1} alt="imgs"/>
                           <button className="absolute top-0 right-0 "></button>
                           <input onChange={handleFileChange} type="file" name="file" id="file" accept="image/png, image/gif, image/jpeg, image/jpg" className="inputfile" />
                            <label htmlFor="file"><i className="text-gray-300 text-lg far fa-edit"></i>{ profilePic ? profilePic.name: 'Choose a photo'}</label>
                       </div>
                   </div>
                   <div className="w-1/4 ">
                     <ul>
                         <li>
                            <input onChange={e => setName(e.target.value)} value={name} className="my-1 ml-2 rounded border-solid border-2 border-gray-700 text-gray-800 pl-2" type="text" placeholder="Name"/>
                         </li>

                         <li>
                            <input onChange={e => setEmail(e.target.value)} value={email} className="my-1 ml-2 rounded border-solid border-2 border-gray-700 text-gray-800 pl-2" type="email" placeholder="Email"/>
                         </li>
                     </ul>
                   </div>
               </div>
               <button className="py-2 px-5 bg-blue-500 text-blue-100 hover:bg-blue-700 mt-24 rounded-md ">Save</button>
               </form>
           </div>
     </div>
     </>
    )
}

export default Setting
