import { faArrowLeft, faArrowRight, faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"; 


function Skills() {
    return (
        <>
            <div className="container-fluid  vh-100 w-100 bg-black px-3" >


                <div className="container d-flex  flex-column flex-md-row justify-content-center align-items-center gap-5 " style={{ gap: "600px" }}>
                    <div className='custom-margin border p-5 rounded-5 ' >
                        <h1 className='text-warning'>Soft Skill</h1>
                        <div className='d-flex justify-content-between mt-4'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap: "break-word", whiteSpace: "normal" }} className='me-2' />Communication</p>

                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap: "break-word", whiteSpace: "normal" }} className='me-2' />Observation</p>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap: "break-word", whiteSpace: "normal" }} className='me-2' />Multitasking</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap: "break-word", whiteSpace: "normal" }} className='me-2' />Time Management</p>

                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap: "break-word", whiteSpace: "normal" }} className='me-2' />Team Work</p>

                        </div>

                    </div>
                    <div className='custom-margin border p-5 rounded-5 pt-4' >
                        <h1 className='text-warning '>Technical Skills</h1>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap: "break-word", whiteSpace: "normal" }} className='me-2' />C , C++</p>
                            <p className='text-white'>60%</p>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap: "break-word", whiteSpace: "normal" }} className='me-2' />HTML</p>
                            <p className='text-white'>90%</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap: "break-word", whiteSpace: "normal" }} className='me-2' />CSS</p>
                            <p className='text-white'>70%</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap: "break-word", whiteSpace: "normal" }} className='me-2' />JavaScript</p>
                            <p className='text-white'>80%</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap: "break-word", whiteSpace: "normal" }} className='me-2' />Bootstrap 5</p>
                            <p className='text-white'>80%</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap: "break-word", whiteSpace: "normal" }} className='me-2' />React</p>
                            <p className='text-white'>70%</p>
                        </div>
                    </div>
                </div>

                <div className="container-fluid d-flex justify-content-evenly mt-4 mb-5">
                    <Link className="d-block text-center text-white " to={'/about'} style={{ textDecoration: "none", }}><h4 className='  text-white'> <FontAwesomeIcon icon={faArrowLeft} fade style={{ color: "#ffffff", }} /> Back </h4></Link>
                    <Link className="d-block text-center text-white  " to={'/projects'} style={{ textDecoration: "none", }}><h4 className=' text-white'>Next Page <FontAwesomeIcon icon={faArrowRight} fade style={{ color: "#ffffff", }} /> </h4></Link>
                </div>
            </div>




        </>
    )
}

export default Skills