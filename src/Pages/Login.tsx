import { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import { Redirect , Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { login } from '../redux/user/creators'
import { userSelector } from '../redux/user/userSlice';
;

function Login(): ReactElement {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const userDispatch = useAppDispatch()
    const {user} = useAppSelector(userSelector)
    console.log(user,'use');
    // const {error} = useAppSelector(userSelector)
    // const validate = (value, user) =>{
    //     if(!value.toString().trim().length > user.maxLength){
    //         return <span className="error">here the error</span>
    //     }
    // }

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
        return <Redirect to='/note' />
    }
    
    
    return (
       <div className="mx-auto w-[500px] mt-[200px] custom-note--cards rounded p-[50px]"> 
            <h2 className="pb-4 text-2xl font-bold text-center uppercase">log in</h2>
            <p className="text-center text-gray-900 capitalize"> don't have an account ?<Link to="/register" className="ml-2 text-blue-500 cursor-pointer hover:text-blue-900"> Sign up</Link></p>
          
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col pt-10 pb-6 space-y-6">
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="email"> <b>Email</b></label>
                            <input className="border h-[54px] pl-6 rounded-md bg-blue-50" value={email} onChange={handleEmailChange}  type="text" placeholder="Enter Email" name="email" id="email" required/> 
                        </div>
                        {/* <p className="err-msg">{error && <p className="error">{error}</p>} </p> */}
                        <div className="flex flex-col space-y-2"> 
                            <label htmlFor="psw"><b>Password</b></label>
                            <input className="border h-[54px] pl-6 rounded-md bg-blue-50" value={password} onChange={handlePasswordChange}  type="password" placeholder="Enter Password" name="password" id="password" required/>
                        </div>
                    </div>
                    {/* <button className="cta-btn" type="submit" value="login">Log In</button> */}
                    <input className="inline-block w-full h-12 py-1 mx-auto text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-900" type="submit" value="Login" />
                    <Link className="block pt-6 text-right text-blue-500 cursor-pointer hover:text-blue-900" to="#">Forgot password?</Link>
                </form>
        </div>
    )
}

export default Login
