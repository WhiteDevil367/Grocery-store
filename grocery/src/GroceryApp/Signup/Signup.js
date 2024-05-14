import './Signup.css'
const Signup = ()=>{
    let otp = []
    for (let i=0; i<6; i++){
        let randNumb = Math.ceil(Math.random() * 8)+1 
        otp.push(randNumb)
    }
    
    

    return(
        <>
        <h1>Welcome to Grocery Store </h1>
        <div>
            <h1>Signup</h1>
            <label htmlFor="userName">Name </label>
            <input id="userName" type="text" placeholder="Enter your name" />
            <br></br>
            <label htmlFor="userName">Mobile Number </label>
            <input id="userNumber" type="number" placeholder="Enter your Number" />
            <br></br>
            <label htmlFor="userName">password </label>
            <input id="userPassword" type="password" placeholder="Enter your password" />
            <br></br>
            <label htmlFor="userName">Enter OTP</label>
            <input id="userOtp" type="number" placeholder="Enter the OTP" />
            <br></br>
            <button id="otp">{otp}</button>
            <br></br>
            <button>Login</button>
            
        </div>
        </>
    )
}
export default Signup