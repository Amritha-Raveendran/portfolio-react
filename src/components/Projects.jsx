import { faArrowLeft, faArrowRight, faInfinity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Projects() {
  return (
    <>


      <div className="container-fluid bg-black min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center">

        <h1 className="text-center mt-5 text-white">My Projects</h1>
        <div className="d-flex align-items-center justify-content-center gap-2 mb-5">
          <div style={{ width: "60px", height: "4px", backgroundColor: "red" }}></div>
          <FontAwesomeIcon icon={faInfinity} style={{ color: "#ff0000", fontSize: "20px" }} />
          <div style={{ width: "60px", height: "4px", backgroundColor: "red" }}></div>
        </div>

        <div className="row w-100 justify-content-center">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6 col-sm-10 col-12 d-flex justify-content-center mb-4">
            <Card style={{ width: "100%", maxWidth: "350px" }}>
              <Card.Body>
                <Card.Title className="text-center text-primary">Portfolio using HTML and CSS</Card.Title>
                <Card.Text className="text-center mt-2 text-white">
                  Sample portfolio website using HTML and CSS.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Card.Link
                    href="https://amritha-raveendran.github.io/Portfolio/"
                    target="_blank"
                    className="text-center"
                  >
                    Live Link
                  </Card.Link>

                </div>
              </Card.Body>

            </Card>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-10 col-12 d-flex justify-content-center mb-4">
            <Card style={{ width: "100%", maxWidth: "350px" }}>
              <Card.Body>
                <Card.Title className="text-center text-primary">Calculator</Card.Title>
                <Card.Text className="text-center mt-2 text-white">
                  HTML , CSS and JavaScript technologies are used .
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Card.Link
                    href="https://amritha-raveendran.github.io/calculator/"
                    target="_blank"
                    className="text-center"
                  >
                    Live Link
                  </Card.Link>

                </div>
              </Card.Body>

            </Card>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-10 col-12 d-flex justify-content-center mb-4">
            <Card style={{ width: "100%", maxWidth: "350px" }}>
              <Card.Body>
                <Card.Title className="text-center text-primary">Personal Portfolio</Card.Title>
                <Card.Text className="text-center mt-2 text-white">
                  Developed by using Tailwind CSS.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Card.Link
                    href="https://amritha-raveendran.github.io/Personal-Portfolio/"
                    target="_blank"
                    className="text-center"
                  >
                    Live Link
                  </Card.Link>

                </div>
              </Card.Body>

            </Card>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-10 col-12 d-flex justify-content-center mb-4">
            <Card style={{ width: "100%", maxWidth: "350px" }}>
              <Card.Body>
                <Card.Title className="text-center text-primary">County Search App</Card.Title>
                <Card.Text className="text-center mt-2 text-white">
                  Implimented "async-await" API.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Card.Link
                    href="https://amritha-raveendran.github.io/Country-Search-/"
                    target="_blank"
                    className="text-center"
                  >
                    Live Link
                  </Card.Link>

                </div>
              </Card.Body>

            </Card>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-10 col-12 d-flex justify-content-center mb-4">
            <Card style={{ width: "100%", maxWidth: "350px" }}>
              <Card.Body>
                <Card.Title className="text-center text-primary">Simple Interest Calculator</Card.Title>
                <Card.Text className="text-center mt-2 text-white">
                  Developed by using  REACT
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Card.Link
                    href="https://simple-interest-calculator-app-five.vercel.app/"
                    target="_blank"
                    className="text-center"
                  >
                    Live Link
                  </Card.Link>

                </div>
              </Card.Body>

            </Card>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-10 col-12 d-flex justify-content-center mb-4">
            <Card style={{ width: "100%", maxWidth: "350px" }}>
              <Card.Body>
                <Card.Title className="text-center text-primary">Crave Cart</Card.Title>
                <Card.Text className="text-center mt-2 text-white">
                  Developed by using  REACT.
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Card.Link
                    href="https://cravecart-bay.vercel.app//"
                    target="_blank"
                    className="text-center"
                  >
                    Live Link
                  </Card.Link>

                </div>
              </Card.Body>

            </Card>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-10 col-12 d-flex justify-content-center mb-4">
            <Card style={{ width: "100%", maxWidth: "350px" }}>
              <Card.Body>
                <Card.Title className="text-center text-primary">Wishperly</Card.Title>
                <Card.Text className="text-center mt-2 text-white">
                  Deals with CRUD operations , made by REACT
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Card.Link
                    href="https://wishperly-fronted.vercel.app/"
                    target="_blank"
                    className="text-center"
                  >
                    Live Link
                  </Card.Link>

                </div>
              </Card.Body>

            </Card>
          </div>

        </div>

        <div className="conatiner-fluid d-flex justify-content-end">
        <Link className=" text-center text-white m-5 " to={'/skills'} style={{textDecoration:"none",textAlign:'right'}}><h4 className=' mt-3 text-white'> <FontAwesomeIcon icon={faArrowLeft} fade style={{color: "#ffffff",}} /> Back </h4></Link>
        <Link className=" text-center text-white m-5 " to={'/contacts'} style={{textDecoration:"none",textAlign:'right'}}><h4 className=' mt-3 text-white'>Next Page <FontAwesomeIcon icon={faArrowRight} fade style={{color: "#ffffff",}} /> </h4></Link>
        </div>
      </div>

    </>
  )
}

export default Projects