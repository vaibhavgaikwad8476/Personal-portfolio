import React from 'react';
import './Project.css'
import Navbar from '../Navbar/Navbar';
import DiceRoller from '../Images/DiceRoller.png';
import DigiClock from '../Images/DigiClock.png';
// import TrafficLight from '../Images/TrafficLight.png';
import Calculator from '../Images/Calculator.png';

function Project() {
  return (
    <>
    <Navbar/>
    <div id='project'></div>
    <div>
      <h1 id="projectheading">My Projects</h1>

      <div class="projectCards">
        <div class="cards">
        <h2 id="projectname">📞 Contact App</h2>
        <p>The Contact App is a web application built with HTML, CSS, and JavaScript, offering a streamlined solution for managing contacts. Users can effortlessly add, remove, and edit contact cards, ensuring an organized and up-to-date contact list. The app boasts a responsive design for optimal accessibility on various devices, providing a user-friendly experience with real-time updates as contacts are modified. </p>
        <br></br>
        <a href="https://github.com/vaibhavgaikwad8476/Contact-App"><span id="sourcecode">Source Code</span> : https://github.com/vaibhavgaikwad8476/Contact-App </a><br></br><br></br>
        <a href='https://vaibhavgaikwad8476.github.io/Contact-App/'><span id="sourcecode">Demo </span> : https://vaibhavgaikwad8476.github.io/Contact-App/</a>
        </div>

        <div class="cards">
          <h2 id="projectname">🤔 Quiz Master</h2>
          <p>Quiz Master is a web application crafted with HTMLand CSS, offering users the ability to create, play, and share quizzes. With a responsive design for optimal accessibility, it provides real-time feedback and score tracking, making it an engaging platform for interactive learning and entertainment.</p><br></br>
          <a href='https://github.com/vaibhavgaikwad8476/quizmaster'><span id="sourcecode">Source Code</span> : https://github.com/vaibhavgaikwad8476/quizmaster</a><br></br><br></br>
          <a href='https://quiz-master-rtc.netlify.app/'><span id="sourcecode">Demo </span>: https://quiz-master-rtc.netlify.app/</a>
        </div>
      
      </div>

      <div class="projectCards">
        <div class="cards">
          <h2 id="projectname">🪵 Furnishly</h2>
          <p>Furnishly is a web project thoughtfully developed with HTML, CSS, and JavaScript, focusing on enhancing the interior design experience. The responsive design ensures accessibility across devices, making Furnishly a go-to tool for those seeking an interactive and visually appealing approach to interior design. Whether decorating a home or planning an office layout, Furnishly simplifies the process, making it an innovative solution for design enthusiasts and professionals alike.</p><br></br>
          <a href='https://github.com/vaibhavgaikwad8476/Furnishly'><span id="sourcecode">Source Code</span>  : https://github.com/vaibhavgaikwad8476/Furnishly </a><br></br><br></br>
          <a href='https://precious-kitsune-a55970.netlify.app/'><span id="sourcecode">Demo </span> : https://precious-kitsune-a55970.netlify.app/</a>
        </div>

        <div class="cards">
          <h2 id="projectname">📰 NewsApp</h2>
          <p>NewsApp is a JavaScript-based project designed to deliver a seamless and personalized news experience. This application employs dynamic features to fetch real-time news updates from diverse sources, providing users with a curated feed based on their preferences. With a clean and intuitive user interface, NewsApp ensures an efficient and enjoyable news browsing experience. Users can explore articles, customize their news feed, and stay informed on the latest events effortlessly. </p><br></br>
          <a href='https://github.com/vaibhavgaikwad8476/NewsApp'><span id="sourcecode">Source Code</span>  : https://github.com/vaibhavgaikwad8476/NewsApp</a><br></br><br></br>
          <a href='https://bejewelled-baklava-9b81f5.netlify.app/'><span id="sourcecode">Demo </span> :https://bejewelled-baklava-9b81f5.netlify.app/</a>
        </div>
      </div>

      <div>
        <h2 id="projectheading2">Mini Projects</h2>
        <div class="projectCards">

        <div class="miniProjectCards">
          <img src={DiceRoller} alt="DiceRoller" id='miniimg'/>
        </div>

        <div class="miniProjectCards">
        <img src={DigiClock} alt="DigiClock" id='miniimg'/>
        </div>

        <div class="miniProjectCards">
        <img src={Calculator} alt="Calculator" id='miniimg'/>
        </div>

        </div>
      </div>

      

    </div>
    </>
  )
}

export default Project