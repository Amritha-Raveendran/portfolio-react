import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';  


function Header() {

    const handleHome = () => {
        toast.info(" You are viewing the home page")
    }
    return (
        <>
            <Navbar expand="lg" className="bg-black p-4">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/fav.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <span style={{color :"orange"}}>My Portfolio</span>
                    </Navbar.Brand>
                    <div className="container w-100 d-flex justify-content-end align-items-end gap-3 me-3">
                        <Link  onClick={handleHome} to={'/'} style={{ textDecoration: "none"  , color : "rgb(83, 195, 195)"}}>Home</Link>
                        <Link to={'/about'} style={{ textDecoration: "none"  , color : "rgb(83, 195, 195)" }}>About</Link>
                        <Link to={'/projects'} style={{ textDecoration: "none"   , color : "rgb(83, 195, 195)"}}>Projects</Link>
                        <Link to={'/contacts'} style={{ textDecoration: "none"   , color : "rgb(83, 195, 195)"}}>Contact</Link>
                    </div>
                </Container>

            </Navbar>
            <ToastContainer
                position='top-center'
                autoClose={2000}
                theme="light"
                transition={Bounce}
            />
        </>
    )
}

export default Header