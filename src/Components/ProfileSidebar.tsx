import { ReactElement } from 'react'
import {Link} from 'react-router-dom'
import Book from '../assets/images/books.jpg'
import email from '../assets/images/email.svg'
import hat from '../assets/images/hat.svg'



function ProfileSidebar(): ReactElement {
    return (

        // <div className="max-w-3xl w-64 py-2 px-4 pl-1 flex flex-col border-r border-gray-300">
        //     <div className="flex flex-row">
        //         <img className="w-24 h-24 bg-cover bg-no-repeat bg-center rounded-full" src={Book} alt="" />
        //         <div className="flex flex-col w-3/5 pl-2">
        //             <h3 className="font-bold capitalize">Biprash Gautam</h3>
        //             <p className="py-1 truncate">Kist College</p>
        //             <p className="truncate">biprashgautam@gmail.com</p>
        //             <div className="py-2">
        //                 <p className="text-sm">I am avaiable on:</p>
        //                 <div className="flex flex-row flex-wrap">
        //                     <span className="mr-1 p-1">@</span>
        //                     <span className="mr-1 p-1">@</span>
        //                     <span className="mr-1 p-1">@</span>
        //                     <span className="mr-1 p-1">@</span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <Link to="/note" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 bg-white">All Notes</Link>
        //     <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100">Forked Notes</Link>
        //     <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100">Bookmarks</Link>
        //     <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100">Groupings</Link>
        //     <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100">Settings</Link>
        // </div>

        <nav className="fixed inset-y-0 left-0 bg-gray-200 shadow-xl p-1 mt-12 w-100">  
               	<div className="flex h-40 w-full mt-2">
                    
					<div className="h-full w-1/3 ">
                     <img className="w-24 h-24 bg-cover bg-no-repeat bg-center rounded-3xl" src={Book} alt="" />
					</div>
					<div className=" h-full mx-3">
                        <h3 className="font-bold capitalize">Sanjiv Chaudhary</h3>
                       <div className="flex flex-row content-center "> <img src={hat}/><p className="pl-1 py-1 text-base truncate">Kist College</p></div>
                       <div className="flex flex-row content-center"> <img src={email}/><p className="pl-1 text-base truncate">biprashgautam@gmail.com</p></div>
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
                    <Link to="/note" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 bg-white block">All Notes</Link>
                    </li>
                    <li className="my-3">
                        <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 block">Forked Notes</Link>
                    </li>
                    <li className="my-3">
                        <Link to="/login" className="text-gray-700 py-1 px-2 my-1 rounded hover:bg-gray-100 block">Bookmarks</Link>
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
