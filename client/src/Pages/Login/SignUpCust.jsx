import { useState } from "react"

function SignUpCust(){

    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [phone, setphone] = useState("")
    const [role, setrole] = useState("")

    return <div>
        <form className='SignUpcust' onSubmit={(e)=>{
            e.preventDefault();
            fetch(`#`, {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username,email,password,phone,role})
            }).then((res)=>res.json()).then((data)=>alert(data)).catch((err)=>alert(err))
            setusername(''); setemail(''); setpassword(''); setphone(''); setrole('');
        }} >
            <label>User Name :
            <input type="text" value={username} placeholder="Enter your Username" onClick={(e)=>setusername(e.target.value)} /></label><br />
            <label htmlFor="">Email :
            <input type="email" value={email} placeholder="Enter your Email" onClick={(e)=>setemail(e.target.value)} /></label><br />
            <label htmlFor="">Password :
            <input type="password" value={password} placeholder="Set password" onClick={(e)=>setpassword(e.target.value)} /></label><br />
            <label htmlFor="">Contact
            <input type="number" value={phone} placeholder="Enter Phone No." onClick={(e)=>setphone(e.target.value)} /></label><br />
            
            <input type="submit" value="Submit" />
        </form>
    </div>
}

export default SignUpCust