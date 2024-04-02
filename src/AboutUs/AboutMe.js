import React from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar';
// import ProgressBar from 'react-bootstrap/ProgressBar';

function AboutMe() {
  return (
    <>
      <Navbar />
      {/* <div id="skills">
        <h1 className='heading-name'>My skills</h1>
        <section>
          <div class="myskillbox1">
            <h1 class="technicalskill">Technical Skills</h1>
            <div class="technical-bars">

              <div class="bar"><i style={{ color: 'red' }} class='bx bxl-html5' ></i>
                <div class="info">
                  <span>HTML</span>
                </div>
                <ProgressBar now={60} />
                <div class="progress-line html">
                  <span></span>
                </div>
              </div>

              <div class="bar"><i style={{ color: 'blue' }} class='bx bxl-css3' ></i>

                <div class="info">
                  <span>CSS</span>
                </div>
                <div class="progress-line css">
                  <span></span>
                </div>
              </div>

              <div class="bar"><i style={{ color: 'yellow' }} class='bx bxl-javascript' ></i>
                <div class="info">
                  <span>JavaScripT</span>
                </div>
                <div class="progress-line javascript">
                  <span></span>
                </div>
              </div>

              <div class="bar"><i style={{ color: 'voilet' }} class='bx bxl-react' ></i>
                <div class="info">
                  <span>React</span>
                </div>
                <div class="progress-line react">
                  <span></span>
                </div>
              </div>

              <div class="bar"><i style={{ color: 'white' }} class='bx bxl-github' ></i>
                <div class="info">
                  <span>GitHub</span>
                </div>
                <div class="progress-line github">
                  <span></span>
                </div>
              </div>

            </div>
          </div>

          <div class="myskillbox2">
            <h1 class="professionalskill">Professional Skills</h1>
            <div class="radial-bars">

              <div class="radial-bar">
                <svg x="0" y="0" viewBox="0 0 200 200">
                  <circle class="pragressbar" cx="100" cy="100" r="80"></circle>
                  <circle class="path path-1" cx="100" cy="100" r="80"></circle>
                  <div class="percentage">90%</div>
                  <div class="subheading">creativity</div>
                </svg>
              </div>

              <div class="radial-bar">
                <svg x="0" y="0" viewBox="0 0 200 200">
                  <circle class="pragressbar" cx="100" cy="100" r="80"></circle>
                  <circle class="path path-1" cx="100" cy="100" r="80"></circle>
                  <div class="percentage">65%</div>
                  <div class="subheading">Communication</div>
                </svg>
              </div>

              <div class="radial-bar">
                <svg x="0" y="0" viewBox="0 0 200 200">
                  <circle class="pragressbar" cx="100" cy="100" r="80"></circle>
                  <circle class="path path-1" cx="100" cy="100" r="80"></circle>
                  <div class="percentage">50%</div>
                  <div class="subheading">Problem Solving</div>
                </svg>
              </div>

              <div class="radial-bar">
                <svg x="0" y="0" viewBox="0 0 200 200">
                  <circle class="pragressbar" cx="100" cy="100" r="80"></circle>
                  <circle class="path path-1" cx="100" cy="100" r="80"></circle>
                  <div class="percentage">80%</div>
                  <div class="subheading">TeamWork</div>
                </svg>
              </div>

            </div>
          </div>
        </section>
      </div> */}

      <div>
        <h1 id="internshipHeading">Internships</h1>

        <div class="internDetails">
          <div class="internCards">
            <p id="mernstack">idz Internship</p>
            During my internship at IDZ,in TCS my role primarily involved serving as a network operator. This entailed managing and monitoring network sysytems, ensuring seamless connectivity, and troubleshooting any issues that arose. I gained invaluable hands-on-experience in configuring and maintaining network infrastructure, which deepened my understanding of networking principles and protocols. additionally, I collaborated closely with fellow team members, honing my tearwork and communication skills in a professional environment. My time at IDZ not only expanded my technical expertise but also provided me with practical insights into the dynamic field of network operations.<br></br>
          </div>

          <div class="internCards">
            <p id="AzureFundamentals">Azure Fundamentals</p>
            In Microsoft Fundamentals, focusing on cloud compuding, virtualization, and foundational Azure services to contribute to innovation and efficient clous-based solutions.<br></br>
            <button class="mernstackbtn">Cloud Computing</button>
            <button class="mernstackbtn">Azure Services</button>
          </div>

          <div class="internCards">
          <p id="mernstack">MERN Stack</p>
            Sucessfully completed an internship in MERN Stack development, gaining hands-on experience in MongoDB, React.js, and Node.js contributed to the development of dynamic and scalable web applications, honing skills in both frontend and backend technologies for a comprehensive understanding of morden web development.<br></br>
            <button class="mernstackbtn">HTML</button>
            <button class="mernstackbtn">CSS</button>
            <button class="mernstackbtn">JavaScript</button>
            <button class="mernstackbtn">ReactJs</button>
            <button class="mernstackbtn">GitHub</button>
          </div>
        </div>
      </div>

      <div class="educationBox">
        <h1 class="eduhead">Education</h1>

        <div class="skillsedication">
          <div class="educations">
            <h3 class="Subeduhead">Bachelor's of  Engineering, Computer Engineering</h3>
            <div class="educationDescription">
              <p>College: Hon. Shri Babanroa Pachlute Vichardhara trusts group of institutions College of Engineering, Ahmednagar</p>
              <p id="grade">SGPA: 7.21</p>
              <i class="courseyear">July 2021 - June 2024</i>

            </div>
            <br></br>
          </div>


          <div class="educations">
            <h3 class="Subeduhead">Diploma, Mechanical Engineering</h3>
            <div class="educationDescription">
              <p>College: Government polytechnic Kolhapur, KOlhapur</p>
              <p id="grade">Percentage: 89.71</p>
              <i class="courseyear">July 2019 - May 2021</i>

            </div>
            <br></br>
          </div>


          <div class="educations">
            <h3 class="Subeduhead">Higher Secondary, Science</h3>
            <div class="educationDescription">
              <p>College: Shri Aranyeshwar Vidyalaya and Junior College Arangoan</p>
              <p id="grade">Percentage: </p>
              <i class="courseyear">June 2018 - Feb 2019</i>

            </div>
            <br></br>
          </div>

          <div class="educations">
            <h3 class="Subeduhead">Secondary School, Semi-english</h3>
            <div class="educationDescription">
              <p>College: Shri vitthal vidyalaya Mahijalgon</p>
              <p id="grade">Percentage: </p>
              <i class="courseyear">June 2017</i>

            </div>
            <br></br>
          </div>


        </div>
      </div>
    </>
  )
}
export default AboutMe
