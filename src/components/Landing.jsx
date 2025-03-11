import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../pages/Header'
// React Simple Typewriter
// -----------------------
// A simple react component for adding a nice typewriter effect to your project.
import { Typewriter } from 'react-simple-typewriter'

function Landing() {


    return (
        <>
            <Header />
            <div className="container-fluid bg-black vh-100 w-100">
                <div className="row text-center border rounded-5 p-5">
                    <div className="col-md-6 d-flex flex-column justify-content-center p-2">
                        <h4 className='mt-5 text-white'>Hey , folks </h4>
                        <h1 style={{ fontWeight: 'normal', fontStyle: "italic" }}>
                            I am <span style={{ color: "rgb(83, 195, 195)" }}> Amritha Raveendran ,</span>  {' '}
                            <span style={{ color: 'orange', fontWeight: 'bold' }}>

                                <Typewriter
                                    words={['an', 'Aspiring', 'Frontend', 'Developer!']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>

                        <p className='text-justify'>A Frontend Developer who loves creating beautiful and user-friendly web experiences. With skills in React, JavaScript, and modern UI frameworks, I build clean, efficient, and interactive websites that bring ideas to life.</p>


                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center mt-lg-5" >
                    <img src="/profile.jpg" alt="no image" className="w-50 border rounded-5" />

                    </div>

                </div>
                <div className="d-flex justify-content-center align-items-center mt-lg-5 mt-3 ">
                    <Link to={'./about'}><button className="btn btn bg-black border text-white me-5 ">Get Started</button></Link>

                    <Link to={''}><button onClick={() => { window.open('/resume.pdf', "_blank") }} className="btn btn bg-black border text-white">Dowload Resume</button></Link>
                </div>


            </div>


        </>
    )
}

export default Landing