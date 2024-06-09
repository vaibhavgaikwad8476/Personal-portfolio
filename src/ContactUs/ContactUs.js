import React, { useState } from 'react';
import './ContactUs.css';
import Navbar from '../Navbar/Navbar';
import github from '../Images/GitHub.png';
import instagram from '../Images/Instagram.png';
import linkdin from '../Images/Linkdin.png';
import showToast from 'crunchy-toast';
import FacebookImg from '../Images/facebookimg.avif';

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const ReachMe = (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    // Send form data to the backend
    fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, mobile, message }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Email sent successfully') {
          showToast('Thank you for your message!', 'success', 3000);
        } else {
          showToast('Failed to send message. Please try again.', 'error', 3000);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        showToast('Failed to send message. Please try again.', 'error', 3000);
      });
  };

  return (
    <>
      <Navbar />
      <div>
        <div className='box' id="contact">
          <h1 id="heading">Contact Me</h1><br></br>
          <hr></hr><br></br>

          <form onSubmit={ReachMe}>
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
            <textarea id="input-box" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <br></br>
            <button type="submit" id="my-btn">Submit</button>
          </form>

          <div className='socialbtn'>
            <a href="https://github.com/vaibhavgaikwad8476">
              <button id="gitbton" type='button'>
                <img id="GithubImg" src={github} alt='profilephoto' />
              </button>
            </a>

            <a href="https://www.linkedin.com/in/vaibhav-gaikwad27/">
              <button id="linkdbton" type='button'>
                <img id="LinkdinImg" src={linkdin} alt='profilephoto' />
              </button>
            </a>

            <button id="instabton" type='button'>
              <img id="InstaImg" src={instagram} alt='profilephoto' />
            </button>

            <button id="facebookbton" type='button'>
              <img id="facebookImg" src={FacebookImg} alt='profilephoto' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
