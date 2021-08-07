import { ReactElement } from 'react'
import {Link} from 'react-router-dom'
import Book from '../assets/images/books.jpg'
import email from '../assets/images/email.svg'
import hat from '../assets/images/hat.svg'
import { useAppSelector } from '../redux/hooks'
import { userSelector } from '../redux/user/userSlice'

interface Props {
    selected?: "All Notes" | "Bookmarks" | "Setting"
}

function ProfileSidebar({selected}: Props): ReactElement {
    const {user} = useAppSelector(userSelector)
    console.log(user?.profile_pic? user?.profile_pic: 'ldskafl', user, user?.profile_pic);
    
    return (
        <nav className="fixed inset-y-0 left-0 bg-gray-200 shadow-xl p-1 mt-14 w-100">  
               	<div className="flex h-40 w-full mt-2">
                    
					<div className="h-full w-1/3 ">
                     <img className="w-24 h-24 bg-cover bg-no-repeat bg-center rounded-3xl" src={user?.profile_pic ? user.profile_pic : Book} alt="" />
					
                    </div>
					<div className=" h-full mx-3">
                        <h3 className="font-bold capitalize">{user?.name}</h3>
                       <div className="flex flex-row content-center "> <img src={hat} alt="hat"/><p className="pl-1 py-1 text-base truncate">Kist College</p></div>
                       <div className="flex flex-row content-center"> <img src={email} alt="email"/><p className="pl-1 text-base truncate">{user?.email}</p></div>
					</div>
				</div>
                <ul className="mt-6 mx-3">
                    <li className="my-3">
                    <Link to="/note" className={`text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 block underline-effect w-full  ${ selected === 'All Notes' ? 'bg-white border-b-2 border-solid border-gray-300' : null}`}>All Notes</Link>
                    </li>
                    <li className="my-3">
                        <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 block underline-effect w-full">Forked Notes</Link>
                    </li>
                    <li className="my-3">
                        <Link to="/bookmarks" className={`text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 block underline-effect w-full ${ selected === 'Bookmarks' ? 'bg-white border-b-2 border-solid border-gray-300' : null}`}>Bookmarks</Link>
                    </li>
                    <li className="my-3">
                      <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 block underline-effect w-full">Groupings</Link>
                    </li>
                    <li className="my-3">
                    <Link to="/setting" className={`text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 block underline-effect w-full ${ selected === 'Setting' ? 'bg-white border-b-2 border-solid border-gray-300' : null}`}>Settings</Link>
                    </li>
                </ul>

        </nav>
    )
}

export default ProfileSidebar
