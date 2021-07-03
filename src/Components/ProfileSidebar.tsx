import { ReactElement } from 'react'
import {Link} from 'react-router-dom'
import Book from '../assets/images/books.jpg'

interface Props {
    
}

function ProfileSidebar({}: Props): ReactElement {
    return (
        <div className="max-w-3xl w-64 py-2 px-4 pl-1 flex flex-col border-r border-gray-300">
            <div className="flex flex-row">
                <img className="w-24 h-24 bg-cover bg-no-repeat bg-center rounded-full" src={Book} alt="" />
                <div className="flex flex-col w-3/5 pl-2">
                    <h3 className="font-bold capitalize">Biprash Gautam</h3>
                    <p className="py-1 truncate">Kist College</p>
                    <p className="truncate">biprashgautam@gmail.com</p>
                    <div className="py-2">
                        <p className="text-sm">I am avaiable on:</p>
                        <div className="flex flex-row flex-wrap">
                            <span className="mr-1 p-1">@</span>
                            <span className="mr-1 p-1">@</span>
                            <span className="mr-1 p-1">@</span>
                            <span className="mr-1 p-1">@</span>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 bg-white">All Notes</Link>
            <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100">Forked Notes</Link>
            <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100">Bookmarks</Link>
            <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100">Groupings</Link>
            <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100">Settings</Link>
        </div>
    )
}

export default ProfileSidebar
