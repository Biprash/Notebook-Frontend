import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

// import Img1 from '../asset/images/img1.png';

import ProfileSidebar from '../Components/ProfileSidebar'

function Setting(): ReactElement {
    return (
        <>
            {/* <ProfileSidebar selected="All Notes" /> */}

            
            <div>
            <div className="font-mono font-medium not-italic absolute w-20 h-1.5 ml-96 mt-1.5 text-2xl flex items-center text-center text-black">account</div>
            {/* <img className="absolute w-36 h-36 ml-96 mt-16 rounded-2xl shadow-2xl drop-shadow-3xl" src={Img1} alt="iamges"/>  */}
            
               <form action="">
                <div className="absolute  ml-xl mt-20 "> </div> 
                <input className="absolute w-52 h-6 ml-106 mt-20 border box-border rounded-sm text-gray-600" type="text" name="name" />
              
                <div className="absolute  ml-xl mt-28 "></div> 
               
                <input className="absolute w-52 h-6 ml-106 mt-28 border box-border rounded-sm text-gray-600"  type="text" name="name" />
               
                <textarea className="absolute w-52 h-16 ml-106 mt-36 bg-gray-300 border box-border rounded-sm text-gray-600 inline-block align-top "  name="name" />
                <div className="absolute w-64 h-0 ml-xl  mt-56 border bg-black "></div>
                <label className="font-mono font-normal not-italic absolute w-28 h-5 ml-96 mt-56 text-base flex items-center text-center text-black">Social Links</label>
                
                <input className="absolute w-52 h-6 ml-lg mt-64  border box-border rounded-sm text-gray-600" type="text" name="name" />
                <div className="absolute  ml-sm mt-64 "></div> 
                <div className="absolute  ml-md mt-64 "> </div> 
                
                <input className="absolute w-52 h-6 ml-lg mt-72 border box-border rounded-sm text-gray-600" type="text" name="name" />
                <div className="absolute  ml-sm mt-72 "> </div> 
                <div className="absolute  ml-md mt-72 "> </div> 
              
                <input className="absolute w-52 h-6 ml-lg mt-80 border box-border rounded-sm text-gray-600" type="text" name="name" />
                <div className="absolute  ml-sm mt-80 "> </div>
                <div className="absolute  ml-md mt-80 "></div> 

                <div className="absolute  ml-sm mt-96 "></div> 
                <Link to='/' className="font-mono font-normal not-italic absolute w-28 h-5 ml-lg mt-96 text-base flex items-center text-center text-black">add social</Link>

               </form>
        </div>
     </>
    )
}

export default Setting
