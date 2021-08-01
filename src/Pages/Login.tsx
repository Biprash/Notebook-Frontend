import { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { login } from '../redux/user/creators'
import { userSelector } from '../redux/user/userSlice'

function Login(): ReactElement {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const userDispatch = useAppDispatch()
    const {user} = useAppSelector(userSelector)
    console.log(user,'use');

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value.trim())
    }
    
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value.trim())
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault()
        userDispatch(login({email, password}));
    }
    if (user) {        
        return <Redirect to='note' />
    }
    
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-11/12 sm:w-7/12 md:5/12 lg:w-5/12 xl:w-4/12 mdrounded border-2 border-gray-300 p-8">
                <h1 className="font-semibold text-3xl text-gray-800 pb-2">Login</h1>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label htmlFor="email" className="pt-2">Email</label>
                    <input value={email} onChange={handleEmailChange} className="py-1 px-2 outline-none focus:ring my-2" type="email" name="email" id="email" placeholder="email@example.com" />
                    
                    <label htmlFor="password" className="pt-2">Password</label>
                    <input value={password} onChange={handlePasswordChange} className="py-1 px-2 outline-none focus:ring my-2" type="password" name="password" id="password" placeholder="password" />

                    <input className="w-2/4 mx-auto my-1 text-white bg-blue-500 py-1 rounded hover:bg-blue-700" type="submit" value="Login" />
                </form>
            
            </div>
        </div>
    )
}

export default Login
