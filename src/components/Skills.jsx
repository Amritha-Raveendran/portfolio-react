import { faArrowRight, faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Skills() {
    return (
        <>
            <div className="container-fluid d-flex  flex-column flex-lg-row justify-content-center align-items-center  vh-100 bg-black px-3" >
                <div className="container d-flex  flex-column flex-md-row justify-content-center align-items-center gap-5 " style={{ gap: "300px" }}>
                    <div className='mt-2'>
                        <h1 className='text-warning'>Soft Skill</h1>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap:"break-word",whiteSpace:"normal"}} className='me-2' />Communiction</p>

                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff",  wordWrap:"break-word",whiteSpace:"normal"}} className='me-2' />Observation</p>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap:"break-word",whiteSpace:"normal" }} className='me-2' />Multitasking</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap:"break-word",whiteSpace:"normal" }} className='me-2' />Time Management</p>

                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap:"break-word",whiteSpace:"normal" }} className='me-2' />Team Work</p>

                        </div>

                    </div>
                    <div >
                        <h1 className='text-warning'>Technical Skills</h1>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff" , wordWrap:"break-word",whiteSpace:"normal"}} className='me-2' />C , C++</p>
                            <p className='text-white'>60%</p>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap:"break-word",whiteSpace:"normal" }} className='me-2' />HTML</p>
                            <p className='text-white'>90%</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap:"break-word",whiteSpace:"normal" }} className='me-2' />CSS</p>
                            <p className='text-white'>70%</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap:"break-word",whiteSpace:"normal"  }} className='me-2' />jJavaScript</p>
                            <p className='text-white'>80%</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap:"break-word",whiteSpace:"normal"  }} className='me-2' />Bootsrap 5</p>
                            <p className='text-white'>80%</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='text-white'><FontAwesomeIcon icon={faGreaterThan} style={{ color: "#ffffff", wordWrap:"break-word",whiteSpace:"normal"  }} className='me-2' />React</p>
                            <p className='text-white'>70%</p>
                        </div>
                    </div>
                </div>
                <div>
                <Link className="position-absolute   m-5 text-white text-center d-block " to={'/projects'} style={{textDecoration:"none",textAlign:'right'}}><h4 className=' mt-3 text-white'>Next Page <FontAwesomeIcon icon={faArrowRight} fade style={{color: "#ffffff",}} /> </h4></Link>

                </div>       
            </div>




        </>
    )
}

export default Skills