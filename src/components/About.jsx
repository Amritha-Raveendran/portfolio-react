import { faArrowRight, faInfinity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <div className="container-fluid vh-100 w-100 bg-black" style={{ backgroundColor: "" }}>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="container">
              <h1 className='text-center mt-5 text-white'>About Me</h1>
              <div className='d-flex align-items-center justify-content-center gap-2'>
                <div style={{ width: "60px", height: "4px", backgroundColor: "red" }}></div>
                <FontAwesomeIcon icon={faInfinity} style={{ color: "#ff0000", fontSize: "20px" }} />
                <div style={{ width: "60px", height: "4px", backgroundColor: "red" }}></div>
              </div>
              <div className='container'>
              <p className="lg:text-2xl mt-3" style={{ textAlign: "justify" }}>
                I am <span className='text-warning'>Amritha Ravendran</span>, a passionate and dedicated individual with a strong background in computer science. I have completed my BTech in Computer Science from the College of Engineering, Adoor, and a Diploma in Computer Science from NSS Polytechnic College, Pandalam. My educational journey began at Govt. HSS Thottakonam, where I completed my Plus Two, and Girls High School, Pandalam, where I completed my SSLC. Currently, I am a MEAN stack intern at Luminar Technolab. I have worked on several web development projects.
                <br />
                <br />
                In addition to my technical skills, I am also an artist, specializing in pencil portraits , charcoal portraits and caricatures.
                I have actively participated in IEEE, NSS, and the Junior Red Cross, which has helped me develop teamwork and leadership abilities.
                
                I come from Pathanamthitta, and I aspire to grow in the tech industry while continuing to embrace my artistic passions.</p>

                <Link className="position-absolute bottom-0 end-0 text-white m-5" to={'/skills'} style={{textDecoration:"none",textAlign:'right'}}><h4 className=' mt-3 text-white'>Next Page <FontAwesomeIcon icon={faArrowRight} fade style={{color: "#ffffff",}} /> </h4></Link>
                
              </div>
            </div>
            
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  )
}

export default About