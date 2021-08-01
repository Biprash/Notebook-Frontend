import { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import { Redirect ,Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { register } from '../redux/user/creators'
import { userSelector } from '../redux/user/userSlice';
import '../assets/css/Style.css'

function Register(): ReactElement {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const userDispatch = useAppDispatch()
    const {user} = useAppSelector(userSelector)
    console.log(user,'use');

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value.trim())
    }
    
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value.trim())
    }
    
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value.trim())
    }
    
    const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value.trim())
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault()
        userDispatch(register({name, email, password, confirmPassword}));
    }
    if (user) {        
        return <Redirect to='note' />
    }
    
    return (
        <>
            <Navbar />
            {/* <div className="flex justify-center items-center h-screen">
                <div className="w-11/12 sm:w-7/12 md:5/12 lg:w-5/12 xl:w-4/12 rounded border-2 border-gray-300 p-8">
                    <h1 className="font-semibold text-3xl text-gray-800 pb-2">Login</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <label htmlFor="name" className="pt-2">Name</label>
                        <input value={name} onChange={handleNameChange} className="py-1 px-2 outline-none focus:ring my-2" type="text" name="name" id="name" placeholder="Full Name" autoFocus />
                        
                        <label htmlFor="email" className="pt-2">Email</label>
                        <input value={email} onChange={handleEmailChange} className="py-1 px-2 outline-none focus:ring my-2" type="email" name="email" id="email" placeholder="email@example.com" />
                        
                        <label htmlFor="password" className="pt-2">Password</label>
                        <input value={password} onChange={handlePasswordChange} className="py-1 px-2 outline-none focus:ring my-2" type="password" name="password" id="password" placeholder="password" />
                        
                        <label htmlFor="passwordConfirm" className="pt-2">Confirm Password</label>
                        <input value={confirmPassword} onChange={handleConfirmPasswordChange} className="py-1 px-2 outline-none focus:ring my-2" type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirm Password" />

                        <input className="w-2/4 mx-auto my-1 text-white bg-blue-500 py-1 rounded hover:bg-blue-700" type="submit" value="Login" />
                    </form>
                
                </div>
            </div> */}

            <div className="logincard"> 
            <h2 className="title">Sign Up</h2>
            <p className=" subtitle"> Have an account?<Link to="#" className="ml-2 cursor-pointer text-blue-700"> Sign In</Link></p>
                <form onSubmit={handleSubmit}>
                <div className="email-login">
                     <label htmlFor="email"> <b>Name</b></label>
                     <input className="login--input" value={name} onChange={handleNameChange} type="text" placeholder="Enter Name" name="name" id="name" required/>

                     <label htmlFor="email"> <b>Email</b></label>
                     <input className="login--input" value={email} onChange={handleEmailChange} type="text" placeholder="Enter Email" name="email" id="email" required/>

                     <label htmlFor="password"><b>Password</b></label>
                    <input className="login--input" value={password} onChange={handlePasswordChange} type="password" placeholder="Enter Password" name="password" id="password" required/>

                    <label htmlFor="password"><b>Comfirm Password</b></label>
                    <input className="login--input" value={confirmPassword} onChange={handleConfirmPasswordChange} type="password" placeholder="Enter Password" name="passwordConfirm" id="passwordConfirm" required/>
                 </div>
                 <input className="w-full h-12 mx-auto my-1 text-white bg-blue-500 py-1 rounded hover:bg-blue-700" type="submit" value="Sign Up" />
                </form>
        </div>

        </>
    )
}

export default Register
