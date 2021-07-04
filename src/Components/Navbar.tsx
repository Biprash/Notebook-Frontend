import React, { ReactElement } from 'react'
import { Link } from "react-router-dom";

function Navbar(): ReactElement {
    return (
        <nav className="bg-white">
            <div className="container flex justify-between py-2 items-center">
                <div className="">
                    <Link to="/">Logo Here</Link>
                </div>
                <div className="flex items-center">
                    <Link to="/" className="pr-8 hover:text-blue-600">Explore</Link>
                    <Link to="/note" className="pr-8 hover:text-blue-600">New Note</Link>
                    <form method="get">
                        <input className="border mr-4 rounded focus:outline-none px-2 py-1" type="search" name="search" id="search" />
                        <input className="px-4 py-1 rounded border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white" type="submit" value="Search" />
                    </form>
                </div>
                <div className="flex justify-between">
                    <Link to="/login" className="pr-4 hover:text-blue-600">Login</Link>
                    <Link to="/login" className="hover:text-blue-600">Register</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
