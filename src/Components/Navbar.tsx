import React, { ReactElement } from 'react'
import { Link } from "react-router-dom";

interface Props {
    
}

function Navbar({}: Props): ReactElement {
    return (
        <nav className="bg-gray-200">
            <div className="container flex justify-between py-2 items-center">
                <div className="">
                    <span>Logo Here</span>
                </div>
                <div className="flex items-center">
                    <Link  to="/" className="pr-8">Explore</Link>
                    <form method="get">
                        <input className="border mr-4 rounded focus:outline-none px-2 py-1" type="search" name="search" id="search" />
                        <input className="px-4 py-1 rounded border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white" type="submit" value="Search" />
                    </form>
                </div>
                <div className="flex justify-between">
                    <Link to="/login" className="pr-4">Login</Link>
                    <Link to="/login">Register</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
