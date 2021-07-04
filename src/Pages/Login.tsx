import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import server from '../server/server'

import Navbar from '../Components/Navbar'


interface Login {
    email: string;
    password: string;
}

function Login(): ReactElement {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value.trim())
    }
    
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value.trim())
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        server.get(process.env.REACT_APP_DOMAIN+'/sanctum/csrf-cookie')
        .then(res => {
            server.post(process.env.REACT_APP_DOMAIN+'/login', {
                email: email,
                password: password
            })
            .then(res => {
                console.log(res, 'res');
                
            })
        })
    }
    
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center h-screen">
                <div className="rounded border-2 border-gray-300 p-8">
                    <h1 className="font-semibold text-3xl text-gray-800 pb-2">Login</h1>
                    <form onSubmit={handleSubmit} method="post" className="flex flex-col">
                        <label htmlFor="email" className="pt-2">Email</label>
                        <input value={email} onChange={handleEmailChange} className="py-1 px-2 outline-none focus:ring my-2" type="email" name="email" id="email" placeholder="email@example.com" />
                        
                        <label htmlFor="password" className="pt-2">Password</label>
                        <input value={password} onChange={handlePasswordChange} className="py-1 px-2 outline-none focus:ring my-2" type="password" name="password" id="password" placeholder="password" />

                        <input className="w-2/4 mx-auto text-white bg-blue-500 py-1 rounded hover:bg-blue-700" type="submit" value="Login" />
                    </form>
                
                </div>
            </div>
        </>
    )
}

export default Login
