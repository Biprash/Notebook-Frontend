import { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/Style.css'

 import Img1 from '../assets/images/books.jpg';
import ProfileSidebar from '../Components/ProfileSidebar'
function Setting(): ReactElement {
    return (
    <>
    <ProfileSidebar/>
        <div className="mt-16 flex flex-col justify-center items-center ">
           <div className=" border-solid border-r-4 border-gray-500 rounded pr-8 ">
              <h1 className="text-2xl ml-6 my-3">Account</h1>
               <div className="flex">
                   <div className=" text-white">
                       <div className="w-52 h-28 ml-auto mr-6 relative">
                           <img className="rounded-lg w-full shadow-2xl" src={Img1} alt="imgs"/>
                           <button className="absolute top-0 right-0"><i className="text-white text-lg far fa-edit"></i></button>
                       </div>
                   </div>
                   <div className=" w-1/4 ">
                     <ul>
                         <li className="setting--graduation">
                             <input className=" my-1 ml-2 rounded border-solid border-2 border-gray-700 text-gray-800 pl-2" type="text" placeholder="University"/>
                         </li>

                         <li className="setting--envalop">
                             <input className="my-1 ml-2 rounded border-solid border-2 border-gray-700 text-gray-800 pl-2" type="text" placeholder="Email address"/>
                         </li>

                         <li>
                             <textarea className=" mt-1 rounded border-solid border-2 border-gray-700 text-gray-800 pl-2" name="" id="" placeholder="Bio here"></textarea> 
                         </li>
                     </ul>
                   </div>
               </div>


               <div className=" mt-6" >
                   <h1 className="text-xl mb-4">social links</h1>
                   <ul>
                       <li>
                           <i className="text-gray-600 mr-3 fab fa-facebook-f"></i>
                           <input className="my-1 rounded border-solid border-2 border-gray-700 pl-2 " type="text" placeholder="Facebook account" />
                       </li>

                       <li>
                           <i className="text-gray-600 mr-2 fab fa-instagram"></i>
                           <input className="my-1 rounded border-solid border-2 border-gray-700 pl-2" type="text" placeholder="Instagram account"/>
                       </li>
                       <li>
                           <i className="text-gray-600 mr-2 fab fa-github"></i>
                           <input className="my-1 rounded border-solid border-2 border-gray-700 pl-2" type="text" placeholder="Github profile"/>
                       </li>
                       <li>
                         <i className=" text-gray-600 mr-2 fab fa-twitter"></i>
                           <input className="my-1 rounded border-solid border-2 border-gray-700 pl-2" type="text"placeholder="Twitter profile" />
                       </li>
                       <li>
                           <i className="text-gray-600 mr-2 fab fa-tiktok"></i>
                           <input className="my-1 rounded border-solid border-2 border-gray-700 pl-2" type="text" placeholder="Tiktok profile" />
                       </li>
                   </ul>

               </div>
           </div>
     </div>
     </>
    )
}

export default Setting
