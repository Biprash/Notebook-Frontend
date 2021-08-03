import { ReactElement } from 'react'
import { Link } from 'react-router-dom';

 import Img1 from '../assets/images/books.jpg';
import ProfileSidebar from '../Components/ProfileSidebar'
function Setting(): ReactElement {
    return (
    <>
    <ProfileSidebar/>
        <div className="mt-16 flex flex-col justify-center items-center ">

           <div className=" border-solid border-r-4 border-gray-500 rounded pr-5 ">
              <h1 className="text-2xl ml-6 my-3">Account</h1>
               <div className="flex">
                   <div className=" text-white">
                       <div className="w-52 h-28 ml-auto mr-4">
                           <img className="rounded-lg w-full shadow-2xl" src={Img1} alt="imgs"/>
                       </div>
                   </div>
                   <div className=" w-1/4 text-white ">
                     <ul>
                        <li>
                             <input className=" my-1 rounded border-solid border-2 border-gray-700 text-gray-800" type="text" placeholder="Name"/>
                         </li>

                         <li>
                             <input className="my-1 rounded border-solid border-2 border-gray-700 text-gray-800" type="text" placeholder="email"/>
                         </li>

                         <li>
                             <textarea className=" mt-1 rounded border-solid border-2 border-gray-700 text-gray-800" name="" id=""></textarea> 
                         </li>
                     </ul>
                   </div>
               </div>


               <div className=" mt-6" >
                   <h1 className="text-xl mb-4">social links</h1>
                   <ul>
                       <li>
                           <i className="mr-3 fab fa-facebook-f"></i>
                           <input className="my-1 rounded border-solid border-2 border-gray-700" type="text" />
                       </li>

                       <li>
                           <i className="mr-2 fab fa-instagram"></i>
                           <input className="my-1 rounded border-solid border-2 border-gray-700" type="text" />
                       </li>
                       <li>
                           <i className="mr-2 fab fa-github"></i>
                           <input className="my-1 rounded border-solid border-2 border-gray-700" type="text" />
                       </li>
                       <li>
                         <i className=" mr-2 fab fa-twitter"></i>
                           <input className="my-1 rounded border-solid border-2 border-gray-700" type="text" />
                       </li>
                       <li>
                           <i className="mr-2 fab fa-tiktok"></i>
                           <input className="my-1 rounded border-solid border-2 border-gray-700" type="text" />
                       </li>
                   </ul>

               </div>
           </div>
     </div>
     </>
    )
}

export default Setting
