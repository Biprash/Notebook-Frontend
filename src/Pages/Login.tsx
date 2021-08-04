import { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import { Redirect , Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { login } from '../redux/user/creators'
import { userSelector } from '../redux/user/userSlice';
import '../assets/css/Style.css';
import { getEffectiveTypeParameterDeclarations } from 'typescript';

function Login(): ReactElement {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const userDispatch = useAppDispatch()
    const {user} = useAppSelector(userSelector)
    console.log(user,'use');
    const {error} = useAppSelector(userSelector)
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
       <div className="logincard"> 
            <h2 className="title">log in</h2>
            <p className=" subtitle"> don't have an account?<Link to="/register" className="ml-2 cursor-pointer text-blue-700"> Sign up</Link></p>
          
                <form onSubmit={handleSubmit}>
                <div className="email-login">
                     <label htmlFor="email"> <b>Email</b></label>
                     <input className="login--input" value={email} onChange={handleEmailChange}  type="text" placeholder="Enter Email" name="email" id="email" required/>
                    <p className="err-msg">{error && <p className="error">{error}</p>} </p>
                     <label htmlFor="psw"><b>Password</b></label>
                    <input className="login--input" value={password} onChange={handlePasswordChange}  type="password" placeholder="Enter Password" name="password" id="password" required/>
                 </div>
                 {/* <button className="cta-btn" type="submit" value="login">Log In</button> */}
                 <input className="inline-block h-12 w-full mx-auto  text-white bg-blue-500 py-1 rounded hover:bg-blue-700" type="submit" value="Login" />
                 <Link className="forget-pass" to="#">Forgot password?</Link>
                </form>
        </div>
    )
}

export default Login
