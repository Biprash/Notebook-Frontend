import { ReactElement } from 'react'
import {Link} from 'react-router-dom'
import Book from '../assets/images/books.jpg'
import email from '../assets/images/email.svg'
import hat from '../assets/images/hat.svg'
import { useAppSelector } from '../redux/hooks'
import { userSelector } from '../redux/user/userSlice'

interface Props {
    selected?: "All Notes" | "Bookmarks"
}

function ProfileSidebar({selected}: Props): ReactElement {
    const {user} = useAppSelector(userSelector)
    return (
        <nav className="fixed inset-y-0 left-0 bg-gray-200 shadow-xl p-1 mt-14 w-100">  
               	<div className="flex h-40 w-full mt-2">
                    
					<div className="h-full w-1/3 ">
                     <img className="w-24 h-24 bg-cover bg-no-repeat bg-center rounded-3xl" src={Book} alt="" />
					
                    </div>
					<div className=" h-full mx-3">
                        <h3 className="font-bold capitalize">{user?.name}</h3>
                       <div className="flex flex-row content-center "> <img src={hat} alt="hat"/><p className="pl-1 py-1 text-base truncate">Kist College</p></div>
                       <div className="flex flex-row content-center"> <img src={email} alt="email"/><p className="pl-1 text-base truncate">{user?.email}</p></div>
                        <div className="py-2">
                            <p className="text-base">I am avaiable on:</p>
                            <div className="flex justify-between py-2">
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-linkedin"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
					</div>
				</div>
                <ul className="mt-6 mx-3">
                    <li className="my-3">
                    <Link to="/note" className={`text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 block ${ selected == 'All Notes' ? 'bg-white' : null}`}>All Notes</Link>
                    </li>
                    <li className="my-3">
                        <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 block">Forked Notes</Link>
                    </li>
                    <li className="my-3">
                        <Link to="/bookmarks" className={`text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 block ${ selected == 'Bookmarks' ? 'bg-white' : null}`}>Bookmarks</Link>
                    </li>
                    <li className="my-3">
                      <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 block">Groupings</Link>
                    </li>
                    <li className="my-3">
                    <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 block">Settings</Link>
                    </li>
                </ul>

        </nav>
    )
}

export default ProfileSidebar
