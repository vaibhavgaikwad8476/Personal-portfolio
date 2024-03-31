import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import ProfileImage from '../Images/1706004464888-removebg-preview.png';
import github from '../Images/GitHub.png';
import instagram from '../Images/Instagram.png';
import linkdin from '../Images/Linkdin.png';

function Home() {
    return (
        <>
            <Navbar />
            <div className='Main-container' id='intro'>
                <div className='container1'>
                    <div className='heading-container'>
                        <p className='heading'>Hello, <br />
                            <span>I'm <span id="myName">Vaibhav Gaikwad</span> pursuing BE from Savitribai Phule Pune University.</span>
                        </p>
                        {/* <div className='typed-out'> "Front end Developer"</div> */}
                    </div>
                    <span id="description">
                        👋 Hi, I'm front-end developer passionate about crafting visually appealing and user-friendly websites. With expertise in HTML, CSS, and JavaScript, I specialize in turning design concepts into seamless digital experiences. My tech stack includes React and Angular.js, and I'm always exploring new tools to enhance my skills. Let's connect and explore how I can bring your ideas to life! 🚀

                    </span>
                    <br></br>
                    <button id="programmingbtns1" type='button'>HTML</button>
                    <button id="programmingbtns" type='button'>CSS</button>
                    <button id="programmingbtns" type='button'>JavaScript</button>
                    <button id="programmingbtns" type='button'>Git & GitHub</button>
                    <br></br>

                    <a href="https://drive.google.com/file/d/1_C3PR893V0zXLqKEFjD74pCz4KmWXk-Q/view?usp=sharing"> <button id="download" type='button'>Download CV</button></a>

                    <div className='social-btn'>

                        <a href="https://github.com/vaibhavgaikwad8476">  <button id="github-btn" type='button'><img id="GithubImg" src={github} alt='profilephoto' /> </button></a>

                        <a href="https://www.linkedin.com/in/vaibhav-gaikwad27/">  <button id="linkdin-btn" type='button'> <img id="LinkdinImg" src={linkdin} alt='profilephoto' /></button></a>

                        <button id="instagram-btn" type='button'> <img id="InstaImg" src={instagram} alt='profilephoto' /></button>
                    </div>
                </div>

                <div className='container2'>
                    <img id="ProfileImg" src={ProfileImage} alt='profilephoto' />
                </div>
            </div>
        </>
    )
}

export default Home