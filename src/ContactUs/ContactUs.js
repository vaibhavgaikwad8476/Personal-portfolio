import React, { useState } from 'react';
import './ContactUs.css';
import Navbar from '../Navbar/Navbar';
import github from '../Images/GitHub.png'
import instagram from '../Images/Instagram.png'
import linkdin from '../Images/Linkdin.png'
import showToast from 'crunchy-toast';

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const ReachMe = () => {
    showToast('Thank you for coming!!!', 'success', 3000)

  };


  return (
    <>
      <Navbar />
      {/* <div classname="maincontainer">
        <div className='con1'>
          <p>lorem</p>
        
        </div>
        <div  className='con2'>
          lorem
        </div>
        </div> */}

        <div>
          <div className='box' id="contact">
            <h1 id="heading">Contact Me</h1><br></br>
            <hr></hr><br></br>

            <p>Name : </p><br></br>
            <input
              type="text" id="input-box" required value={name}
              onChange={(e) => setName(e.target.value)} ></input>
            <br></br><br></br>

            <p>Email : </p><br></br>
            <input type="email" id="input-box" required value={email}
              onChange={(e) => setEmail(e.target.value)} ></input>
            <br></br><br></br>

            <p>Contact / Mobile No : </p><br></br>
            <input type="tel" id="input-box" required value={mobile}
              onChange={(e) => setMobile(e.target.value)} ></input><br></br><br></br>

            <p>Message:</p><br></br>
            <textarea id="input-box"></textarea>
            <br></br>
            <button type="submit" id="my-btn" onSubmit={ReachMe()}>Submit</button>

            <div className='socialbtn'>
            <a href="https://github.com/vaibhavgaikwad8476">  <button id="gitbton" type='button'><img id="GithubImg" src={github} alt='profilephoto' /> </button></a>

            <a href="https://www.linkedin.com/in/vaibhav-gaikwad27/">  <button id="linkdbton" type='button'> <img id="LinkdinImg" src={linkdin} alt='profilephoto' /></button></a>

            <a href="https://www.instagram.com/vaibhav_gaikwad_8476/?hl=en"> <button id="instabton" type='button'> <img id="InstaImg" src={instagram} alt='profilephoto' /></button></a> 

          
          </div>
          </div>
        </div>
    
    </>
  )
}

export default ContactUs
