import { useState } from "react"
import {useNavigate} from "react-router-dom";
import ProDash from "../ProDash/ProDash.jsx";


function SignUpPro(){
    const [detail, setDetail] = useState({})
    const [fileProgress, setFileProgress] = useState(0);
    const navigate = useNavigate();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const fileSize = file.size;
    
        // Simulate file upload progress
        let currentSize = 0;
        const timer = setInterval(() => {
          currentSize += 10000; // Increment by 10KB for demonstration purposes
          const progressValue = (currentSize / fileSize) * 100;
          setFileProgress(progressValue);
    
          if (currentSize >= fileSize) {
            setDetail({...detail, file})
            clearInterval(timer);
          }
        }, 500); // Update progress every 500ms
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        // Extract form data
        // const form = event.target;
        // const formData = new FormData(form);
    
        // Display form data
        // console.log(formData.entries())
    
        // Reset form
        // form.reset();
        let id = 2145321
        setFileProgress(0);
        navigate(`./prodash/${id}`, {state: {detail}})
      };

    return <div>
        <form className="SignUpPro" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required onChange={(e)=>setDetail({...detail,name:e.target.value})}  /><br/><br/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required onChange={(e)=>setDetail({...detail,email:e.target.value})} /><br /><br />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required onChange={(e)=>setDetail({...detail,contact:e.target.value})} /><br /><br />

            <label htmlFor="specialization">Specialization:</label>
            <input type="text" id="specialization" name="specialization" required onChange={(e)=>setDetail({...detail,specialist:e.target.value})} /><br/><br/>

            <label htmlFor="experience">Years of Experience:</label>
            <input type="number" id="experience" name="experience" required onChange={(e)=>setDetail({...detail,exp:e.target.value})}/><br/><br/>

            <label htmlFor="availability" className="checkbox-group">
            <input type="radio" id="full-time" name="availability" value="Full-time" required onChange={(e)=> e.target.checked && setDetail({...detail,avalability:e.target.value})}/>
            Full-time
            </label>

            <label htmlFor="availability" className="checkbox-group">
            <input type="radio" id="part-time" name="availability" value="Part-time" required onChange={(e)=> e.target.checked && setDetail({...detail,avalability:e.target.value})}/>
            Part-time
            </label><br /><br />


            <label htmlFor="portfolio">Portfolio:</label><br/>
            <input type="file" id="portfolio" name="portfolio" required onChange={handleFileChange}/>
            <progress id="fileProgress" max="100" value={fileProgress}></progress><br /><br />

            <label htmlFor="bio">Bio:</label><br/>
            <textarea id="bio" name="bio" required></textarea><br/><br/>

            <input type="submit" value="Submit"/>
        </form>
    </div>
}

export default SignUpPro