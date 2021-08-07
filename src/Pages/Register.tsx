import { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
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
    // const [ error_list, setError_list]=useState([]);

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
        return <Redirect to='/note' />
    }
    
    return (
        <div className="logincard"> 
            <h2 className="title">Sign Up</h2>
            <p className=" subtitle"> Have an account?<Link to="/login" className="ml-2 cursor-pointer text-blue-700"> Sign In</Link></p>
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
    )
}

export default Register
