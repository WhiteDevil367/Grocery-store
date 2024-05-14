
import './Login.css'
import  { useState} from 'react'
import { Link } from 'react-router-dom'
//import Home from '../Home/Home'
//const Home = React.lazy(()=>{import('../Home/Home.js')})


const Login = ()=>{


    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState({
        user: "",
        password: ""
    })
    //const [login, setLogin]= useState(false)

    function handleSubmit(){
        //setLogin(true)
        if(user.trim()===""){
            setError((error)=>({...error, user: "Please enter your name" }))
        }
        else{
            setError((error)=>({...error, user: ""}))
        }
        if(password.trim()===""){
            setError((error)=>({...error, password: "Please enter your password" }))
        }
        else{
            setError((error)=>({...error, password: ""}))
        }
        
    }
    return(
        <>
        <h1 className='text-success text-center'>Welcome to Grocery Store</h1>
        <div className='login-card'>
           <div className='login-form'>
           <h1 className='text-warning text-center'>Login</h1> 

            <div className='m-1'>
               <label  htmlFor="userName" className='text-info'>User</label><br></br>
               <input value={user} onChange={(e)=>{setUser(e.target.value)}} placeholder='Enter your name' className='form-control w-70' type="text"  />
               {error.user&&<span className='text-danger'>{error.user}</span>}
            </div>
            
            <div className='m-1'>
               <label htmlFor="userName" className='text-info'>Password </label><br></br>
               <input value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter your password' className='form-control w-70' type="password" />
               {error.password&&<span className='text-danger'>{error.password}</span>}
            </div>
        
            <button className='btn btn-primary m-1' onClick={()=>{handleSubmit()}}><Link to="/products">Login</Link></button>
            
           </div>
        </div>
        
        
        </>
    )
}
export default Login