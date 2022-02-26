import { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { register } from '../redux/user/creators'
import { userSelector } from '../redux/user/userSlice';


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
        <div className="mx-auto w-[500px] my-[200px] custom-note--cards rounded p-[50px]"> 
            <h2 className="pb-4 text-2xl font-bold text-center uppercase">Sign Up</h2>
            <p className="text-center text-gray-900 capitalize "> Have an account?<Link to="/login" className="ml-2 text-blue-500 cursor-pointer hover:text-blue-900"> Sign In</Link></p>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col pt-10 pb-6 space-y-6">
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="email"> <b>Name</b></label>
                            <input className="border h-[54px] pl-6 rounded-md bg-blue-50" value={name} onChange={handleNameChange} type="text" placeholder="Enter Name" name="name" id="name" required/>  
                        </div>
                       <div className='flex flex-col space-y-2'>
                            <label htmlFor="email"> <b>Email</b></label>
                            <input className="border h-[54px] pl-6 rounded-md bg-blue-50" value={email} onChange={handleEmailChange} type="text" placeholder="Enter Email" name="email" id="email" required/>
                       </div>
                      
                        <div className='flex flex-col space-y-2'>
                        <label htmlFor="password"><b>Password</b></label>
                        <input className="border h-[54px] pl-6 rounded-md bg-blue-50" value={password} onChange={handlePasswordChange} type="password" placeholder="Enter Password" name="password" id="password" required/>
                        </div>
                      
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="password"><b>Comfirm Password</b></label>
                            <input className="border h-[54px] pl-6 rounded-md bg-blue-50" value={confirmPassword} onChange={handleConfirmPasswordChange} type="password" placeholder="Enter Password" name="passwordConfirm" id="passwordConfirm" required/>
                        </div>
                        
                    </div>
                    <input className="w-full h-12 py-1 mx-auto my-1 text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-900" type="submit" value="Sign Up" />
                </form>
        </div>
    )
}

export default Register
