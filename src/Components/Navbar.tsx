import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from 'react'
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logout } from '../redux/user/creators';
import { userSelector } from '../redux/user/userSlice';
import Logo from '../assets/images/smartchain.png'


interface Props {
    search: string
    setSearch: Dispatch<SetStateAction<string>>
}

function Navbar({search, setSearch}: Props): ReactElement {
    const {user} = useAppSelector(userSelector)
    const dispatch = useAppDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    return (
        <>
        {/* <nav className="fixed top-0 z-10 w-full bg-white">
            <div className="container flex items-center justify-between py-2">
                <div className="">
                    <Link to="/"><img src={Logo} className="h-10" alt="logo"></img></Link>
                </div>
                <div className="flex items-center">
                    <Link to="/explore" className="pr-8 hover:text-blue-600">Explore</Link>
                    <Link to="/note" className="pr-8 hover:text-blue-600">New Note</Link>
                    <input value={search} onChange={handleChange} className="px-2 py-1 mr-4 border rounded focus:outline-none" type="search" name="search" placeholder="Search" id="search" />
                </div>
                <div className="flex justify-between">
                    {user ?
                    <button onClick={() => dispatch(logout())} className="pr-4 hover:text-blue-600">Logout</button>
                    :
                    <>
                        <Link to="/login" className="pr-4 hover:text-blue-600">Login</Link>
                        <Link to="/register" className="hover:text-blue-600">Register</Link>
                    </>
                    }
                </div>
            </div>
        </nav> */}

        <nav className="fixed top-0 z-10 flex justify-around w-full py-3 bg-white border-b h-[60px]">
            <div>
             <Link to="/"><img src={Logo} className="-m-3 h-14" alt="logo"></img></Link>
            </div>
            <ul className="flex items-center justify-center">
                <li>  <Link className="pb-1 mx-3 text-gray-800 capitalize my-aut underline-effect hover:text-gray-600" to="/explore">explore</Link></li>
               <li> <Link className="pb-1 mx-3 my-1 text-gray-800 capitalize underline-effect hover:text-gray-600" to="/note">new note</Link></li>
               <li>   <input value={search} onChange={handleChange} className="px-2 py-1 mx-4 border border-gray-400 rounded-lg focus:outline-none " type="search" name="search" placeholder="Search" id="search" /></li>
            </ul>
            <div className="">
                    {user ?
                    <button onClick={() => dispatch(logout())} className="pb-1 mx-3 my-1 text-gray-800 capitalize underline-effect hover:text-gray-600">Logout</button>
                    :
                    <>
                        <Link to="/login" className="pb-1 mx-3 my-1 text-gray-800 capitalize underline-effect hover:text-gray-600">Login</Link>
                        <Link to="/register" className="pb-1 mx-3 my-1 text-gray-800 capitalize underline-effect hover:text-gray-600">Register</Link>
                    </>
                    }
                </div>
        </nav>
        </>
    )
}

export default Navbar
