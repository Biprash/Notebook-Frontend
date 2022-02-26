import { ReactElement } from 'react'
import {Link} from 'react-router-dom'
import Book from '../assets/images/books.jpg'
import email from '../assets/images/email.svg'
import hat from '../assets/images/hat.svg'
import { useAppSelector } from '../redux/hooks'
import { userSelector } from '../redux/user/userSlice'

interface Props {
    selected?: "All Notes" | "Bookmarks" | "Recently Viewed" | "Setting"
}

function ProfileSidebar({selected}: Props): ReactElement {
    const {user} = useAppSelector(userSelector)
    console.log(user?.profile_pic? user?.profile_pic: 'ldskafl', user, user?.profile_pic);
    
    return (
        <nav className="fixed inset-y-0 left-0 p-1 bg-gray-200 shadow-xl mt-14 pt-[20px]">  
               	<div className="flex w-full mt-2 mb-10">
					<div className="w-1/3 h-full ">
                         <img className="w-20 h-20 bg-center bg-no-repeat bg-cover rounded" src={user?.profile_pic ? user.profile_pic : Book} alt="" />
                    </div>
					<div className="h-full mx-3 ">
                        <h3 className="font-bold capitalize">{user?.name}</h3>
                        <div className="flex flex-row "> <img src={hat} alt="hat"/><p className="py-1 pl-1 text-base truncate">Kist College</p></div>
                        <div className="flex flex-row content-center text-blue-500 cursor-pointer"> <img src={email} alt="email"/><p className="pl-1 text-base truncate">{user?.email}</p></div>
					</div>
				</div>
                <ul className="">
                    <li className="">
                    <Link to="/note" className={`text-gray-700 cursor-pointer py-[10px] px-2 my-1 rounded underline-effect hover:bg-gray-100 block  w-full  ${ selected === 'All Notes' ? 'bg-white border-b-2 border-solid border-gray-400' : null}`}>All Notes</Link>
                    </li>
                    <li className="">
                        <Link to="/recently viewed" className={`text-gray-700 cursor-pointer py-[10px] px-2 my-1 rounded underline-effect hover:bg-gray-100 w-full ${ selected === 'Recently Viewed' ? 'bg-white border-b-2 border-solid border-gray-400' : null}`}>Recently Viewed</Link>
                    </li>
                    <li className="">
                        <Link to="/bookmarks" className={`text-gray-700 cursor-pointer py-[10px] px-2 my-1 rounded hover:bg-gray-100 block underline-effect w-full ${ selected === 'Bookmarks' ? 'bg-white border-b-2 border-solid border-gray-400' : null}`}>Bookmarks</Link>
                    </li>
                    <li className="">
                    <Link to="/setting" className={`text-gray-700 py-[10px] cursor-pointer px-2 my-1 rounded hover:bg-gray-100 block underline-effect w-full ${ selected === 'Setting' ? 'bg-white border-b-2 border-solid border-gray-300' : null}`}>Settings</Link>
                    </li>
                </ul>

        </nav>
    )
}

export default ProfileSidebar
