import React from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar';
import HTMLIcon from '../Images/HTMLIcon.png';
import CSSIcon from '../Images/CSSIcon.png';
import JavaIcon from '../Images/JavaIcon.png';
import JavascriptIcon from '../Images/JavascriptIcon.png';
import ReactJsIcon from '../Images/ReactJsIcon.png';
import giticon from '../Images/giticon.png';
import Presentation from '../Images/Presentation.png';

function AboutMe() {
  return (
    <>
      <Navbar />
      <div>
        <h1 id="skills">Skills</h1>

        <div class="skilldetails">
      
          <div class="skillscards">
            <a href="https://www.w3schools.com/html/html_intro.asp"> <img alt="htmlicon" id="iconimage" src={HTMLIcon}/></a>
            <p id="icontitle">HTML </p>
          </div>
          <div class="skillscards">
          <a href="https://www.w3schools.com/css/default.asp"> <img alt="CSSIcon" id="iconimage" src={CSSIcon}/></a>
            <p id="icontitle">CSS</p>
          </div>

          <div class="skillscards">
          <a href="https://www.w3schools.com/java/default.asp"><img alt="JavaIcon" id="iconimage" src={JavaIcon}/></a>
            <p id="icontitle">Java</p>
          </div>

          <div class="skillscards">
          <a href="https://www.w3schools.com/js/default.asp"> <img alt="JavascriptIcon" id="iconimage" src={JavascriptIcon}/></a>
            <p id="icontitle">JavaScript</p>
          </div>
        </div>

        <div class="skilldetails">
          <div class="skillscards">
          <a href="https://www.w3schools.com/react/default.asp"><img alt="ReactJsIcon" id="iconimage" src={ReactJsIcon}/></a>
            <p id="icontitle">ReactJs</p>
          </div>

          <div class="skillscards">
         <a href="https://www.w3schools.com/git/default.asp"> <img alt="giticon" id="iconimage" src={giticon}/></a>
            <p id="icontitle">Git & GitHub</p>
          </div>

          <div class="skillscards">
         <a href="https://www.w3schools.com/js/default.asp"> <img alt="JavascriptIcon" id="iconimage" src={JavascriptIcon}/></a>
            <p id="icontitle">JavaScript</p>
          </div>

          <div class="skillscards">
         <a href="https://hbr.org/2013/06/how-to-give-a-killer-presentation"> <img alt="Presentation" id="iconimage" src={Presentation}/></a>
            <p id="icontitle">Presentation</p>
          </div>
        </div>
      </div>

      <div>
        <h1 id="internshipHeading">Internships</h1>

        <div class="internDetails">
          <div class="internCards">
            <p id="mernstack">IDz Internship</p>
            During my internship at IDZ, my role primarily involved serving as a network operator. This entailed managing and monitoring network sysytems, ensuring seamless connectivity, and troubleshooting any issues that arose. I gained invaluable hands-on-experience in configuring and maintaining network infrastructure, which deepened my understanding of networking principles and protocols. additionally, I collaborated closely with fellow team members, honing my tearwork and communication skills in a professional environment. My time at IDZ not only expanded my technical expertise but also provided me with practical insights into the dynamic field of network operations.<br></br>
          </div>

          <div class="internCards">
            <p id="AzureFundamentals">Azure Fundamentals</p>
            In Microsoft Fundamentals, focusing on cloud compuding, virtualization, and foundational Azure services to contribute to innovation and efficient clous-based solutions.<br></br>
            <button class="mernstackbtn">Cloud Computing</button>
            <button class="mernstackbtn">Azure Services</button>
          </div>

          <div class="internCards">
            <p id="mernstack">MERN Stack</p>
            Sucessfully completed an internship in MERN Stack development, gaining hands-on experience in MongoDB, Express.js, React.js, and Node.js contributed to the development of dynamic and scalable web applications, honing skills in both frontend and backend technologies for a comprehensive understanding of morden web development.<br></br>
            <button class="mernstackbtn">HTML</button>
            <button class="mernstackbtn">CSS</button>
            <button class="mernstackbtn">JavaScript</button>
            <button class="mernstackbtn">ReactJs & AngularJs</button>
            <button class="mernstackbtn">GitHub</button>
          </div>
        </div>
      </div>

      <div class="educationBox">
        <h1 class="eduhead">Education</h1>

        <div class="skillsedication">
          <div class="educations">
            <p class="courseyear">July 2021 - June 2024</p>
            <h3 class="Subeduhead">Bachelor's of  Engineering, Computer Engineering</h3>
            <hr></hr><br></br>
            <div class="educationDescription">
              <p>College: Hon. Shri Babanroa Pachlute Vichardhara trusts group of institutions College of Engineering, Ahmednagar</p>
              <p id="grade">SGPA: 7.21</p>
            </div>
            <br></br>
          </div>

          <div class="educations">
            <p class="courseyear">July 2019 - May 2021</p>
            <h3 class="Subeduhead">Diploma, Mechanical Engineering</h3>
            <hr></hr><br></br>
            <div class="educationDescription">
              <p>College: Government polytechnic Kolhapur, KOlhapur</p>
              <p id="grade">Percentage: 89.71</p>
            </div>
            <br></br>
          </div>

          <div class="educations">
            <p class="courseyear">June 2018 - Feb 2019</p>
            <h3 class="Subeduhead">Higher Secondary, Science</h3>
            <hr></hr><br></br>
            <div class="educationDescription">
              <p>College: Shri Aranyeshwar Vidyalaya and Junior College Arangoan</p>
              <p id="grade">Percentage: </p>
            </div>
            <br></br>
          </div>

          <div class="educations">
            <p class="courseyear">June 2017</p>
            <h3 class="Subeduhead">Secondary School, Semi-english</h3>
            <hr></hr><br></br>
            <div class="educationDescription">
              <p>College: Shri vitthal vidyalaya Mahijalgon</p>
              <p id="grade">Percentage: </p>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutMe
