import { ChangeEvent, Dispatch, ReactElement, SetStateAction } from 'react'
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logout } from '../redux/user/creators';
import { userSelector } from '../redux/user/userSlice';
import Logo from '../assets/images/logo.png'


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
        {/* <nav className="bg-white fixed w-full top-0 z-10">
            <div className="container flex justify-between py-2 items-center">
                <div className="">
                    <Link to="/"><img src={Logo} className="h-10" alt="logo"></img></Link>
                </div>
                <div className="flex items-center">
                    <Link to="/explore" className="pr-8 hover:text-blue-600">Explore</Link>
                    <Link to="/note" className="pr-8 hover:text-blue-600">New Note</Link>
                    <input value={search} onChange={handleChange} className="border mr-4 rounded focus:outline-none px-2 py-1" type="search" name="search" placeholder="Search" id="search" />
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

        <nav className="flex justify-around py-3 bg-white fixed top-0 h-14 w-full z-10 ">
            <div>
            <Link to="/"><img src={Logo} className="h-10" alt="logo"></img></Link>
            </div>
            <ul className="flex justify-center items-center">
                <li>  <Link className="mx-3 my-aut pb-1 underline-effect" to="/explore">explore</Link></li>
               <li> <Link className="mx-3 my-1 pb-1 underline-effect" to="/note">new note</Link></li>
               <li>   <input value={search} onChange={handleChange} className="border border-gray-400 mx-4 rounded-lg focus:outline-none px-2 py-1" type="search" name="search" placeholder="Search" id="search" /></li>
            </ul>
            <div className="">
                    {user ?
                    <button onClick={() => dispatch(logout())} className="mx-3 my-1 pb-1 underline-effect">Logout</button>
                    :
                    <>
                        <Link to="/login" className="mx-3 my-1 pb-1 underline-effect">Login</Link>
                        <Link to="/register" className="mx-3 my-1 pb-1   underline-effect">Register</Link>
                    </>
                    }
                </div>
        </nav>
        </>
    )
}

export default Navbar
