import { ChangeEvent, FormEvent, ReactElement, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';

import Img1 from '../assets/images/books.jpg';
import ProfileSidebar from '../Components/ProfileSidebar'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getUser, userSelector } from '../redux/user/userSlice';
import server from '../server/server';

function Setting(): ReactElement {
    const [error, setError] = useState('')    
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [profilePic, setProfilePic] = useState<File>()
    const [oldProfilePic, setOldProfilePic] = useState<string>('')
    const {user} = useAppSelector(userSelector)
    const dispatch = useAppDispatch()

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
                    dispatch(getUser(res.data.data))
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
        <div className="flex flex-col ml-[250px] mt-9 ">
           <div className="p-10 pr-8 rounded ">
              <h1 className="my-3 ml-6 text-2xl">Profile</h1>
              <p className="text-red-500">{error?error:null}</p>
              <form onSubmit={handleFormSubmit}>
               <div className="flex">
                   <div className="text-white">
                       <div className="">
                           <img className="w-32 h-24 rounded shadow-2xl" src={oldProfilePic ? oldProfilePic : Img1} alt="imgs"/>
                           <button className="absolute top-0 right-0 "></button>
                           <input onChange={handleFileChange} type="file" name="file" id="file" accept="image/png, image/jpeg, image/jpg" className="inputfile" />
                            <label htmlFor="file"><i className="text-lg text-gray-300 far fa-edit"></i>{ profilePic ? profilePic.name: 'Choose a photo'}</label>
                       </div>
                   </div>
                   <div className="">
                     <ul>
                         <li>
                            <input onChange={e => setName(e.target.value)} value={name} className="pl-2 h-[54px] my-1 ml-2 text-gray-800 border-2 border-gray-700 border-solid rounded" type="text" placeholder="Name"/>
                         </li>

                         <li>
                            <input onChange={e => setEmail(e.target.value)} value={email} className="pl-2 h-[54px] my-1 ml-2 text-gray-800 border-2 border-gray-700 border-solid rounded" type="email" placeholder="Email"/>
                         </li>
                     </ul>
                   </div>
               </div>
               <button className="px-6 py-2 mt-6 text-blue-100 bg-blue-500 rounded hover:bg-blue-700 ">Save</button>
               </form>
           </div>
     </div>
     </>
    )
}

export default Setting
