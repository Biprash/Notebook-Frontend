import { ReactElement } from 'react'
import {Link} from 'react-router-dom'
import Book from '../assets/images/books.jpg'

interface Props {
    selected?: "All Notes" | "Bookmarks"
}

function ProfileSidebar({selected}: Props): ReactElement {
    return (
        <nav className="fixed inset-y-0 left-0 bg-gray-200 shadow-xl rounded-r-xl p-1 mt-12 w-64">  
               	<div className="flex h-40 w-full ">
					<div className="h-full w-1/2">
                     <img className="w-24 h-24 bg-cover bg-no-repeat bg-center rounded-full" src={Book} alt="" />
					</div>
					<div className=" h-full w-1/2">
                        <h3 className="font-bold capitalize">Sanjiv Chaudhary</h3>
                        <p className="py-1 text-base truncate">Kist College</p>
                        <p className="text-base truncate">biprashgautam@gmail.com</p>
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
                <ul className="mt-6">
                    <li className="my-3">
                    <Link to="/note" className={`text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 ${ selected == 'All Notes' ? 'bg-white' : null}`}>All Notes</Link>
                    </li>
                    <li className="my-3">
                        <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100">Forked Notes</Link>
                    </li>
                    <li className="my-3">
                        <Link to="/bookmarks" className={`text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 ${ selected == 'Bookmarks' ? 'bg-white' : null}`}>Bookmarks</Link>
                    </li>
                    <li className="my-3">
                      <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100">Groupings</Link>
                    </li>
                    <li className="my-3">
                    <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100">Settings</Link>
                    </li>
                </ul>

        </nav>
    )
}

export default ProfileSidebar
