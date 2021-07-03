import React, { ReactElement } from 'react'

interface Props {
    
}

function Login({}: Props): ReactElement {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="rounded border-2 border-gray-300 p-8">
                <h1 className="font-semibold text-3xl text-gray-800 pb-2">Login</h1>
                <form method="post" className="flex flex-col">
                    <label htmlFor="email" className="pt-2">Email</label>
                    <input className="py-1 px-2 outline-none focus:ring my-2" type="email" name="email" id="email" placeholder="email@example.com" />
                    
                    <label htmlFor="password" className="pt-2">Password</label>
                    <input className="py-1 px-2 outline-none focus:ring my-2" type="password" name="password" id="password" placeholder="password" />

                    <input className="w-2/4 mx-auto text-white bg-blue-500 py-1 rounded hover:bg-blue-700" type="submit" value="Login" />
                </form>
            
            </div>
        </div>
    )
}

export default Login
