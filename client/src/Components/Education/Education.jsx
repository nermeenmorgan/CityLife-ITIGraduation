import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../Context/Data'
import "./Education.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import 'react-slideshow-image/dist/styles.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Education() {
    const { AllEducation } = useContext(DataContext);
    const [schoolsArr, setSchoolsArr] = useState([]);

    useEffect(() => {
      if (AllEducation) {
        const images = AllEducation.map((e) => [e.img3]);
        setSchoolsArr(images);
      }
    }, [AllEducation]);
    

    
    
  return (
    <>
    <div style={{ background: "#EBEDEC" }}>
      <div style={{ background: "#EBEDEC" }} className="container-fluid position-relative">
        <div className="row">
          <div className="col-12 p-0 text-center position-relative">
            <img src="images/educationImg.png" className="img-fluid h-75 w-75 m-5" alt="Cover Image" />
            <div className="ms-5 btn-group-horizontal mt-5 d-flex-row " style={{ position: "absolute", bottom: 140, left: 0, transform: "translateY(-50%)" }}>
            <Link to="/education/schools">
              <button type="button" className="btn ms-5  btn-primary text-dark text-center fs-3 fw-bold" style={{ backgroundColor: "#cee9d8", boxShadow: "0 0 10px rgba(0,0,0,0.5)",  color:"black" }}>Discover Schools</button>
              </Link>
              <Link to="/education/kindergarten">
              <button type="button" className="btn ms-5 btn-primary text-dark text-center fs-3 fw-bold" style={{ backgroundColor: "#cee9d8", boxShadow: "0 0 10px rgba(0,0,0,0.5)" , color:"black"}}>Discover Kindergarten</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
<div className='m-0 p-5' style={{backgroundColor:"#EBEDEC"}}>
<hr style={{color:"black", }}></hr>

</div>

{/* <div className='fs-2 fw-bold ms-5'>Gallery</div> */}

<div>
  {schoolsArr ? (
    <div>
    <div className="container p-5" style={{backgroundColor:"lightgrey", borderRadius:10}}>
      <div className='row'>
        <div className='col-md-6'>
          <h2>Experience Excellence in Education</h2>
          <p>Discover the best schools in Rehab Egypt and give your child the gift of quality education. Our featured schools are dedicated to providing exceptional learning experiences and helping students achieve their full potential. Explore the slider to find the perfect school for your child.</p>
          {/* <div className='d-flex-column text-center'> */}
<div className='d-flex  mb-3'>
<FontAwesomeIcon icon={faSchool} className='fa-3x me-3' style={{color:"black"}} />
<h2>About Campus</h2>
</div>
      <div >The campuses of the schools in Al Rehab City are well-designed and spacious, with modern facilities and amenities. They are equipped with state-of-the-art classrooms, laboratories, libraries, sports facilities, and other resources that support learning and development.

The schools in Al Rehab City offer a high-quality education that is based on a well-rounded curriculum that emphasizes academic rigor, critical thinking, creativity, and innovation. They promote a culture of excellence, intellectual curiosity, and social responsibility, and provide students with a supportive and nurturing learning environment that fosters personal growth and development.

Overall, the schools in Al Rehab City provide students with an exceptional educational experience that prepares them for success in the global marketplace and in their personal lives.</div>

        </div>
        <div className='col-md-6' style={{marginTop:"6%"}}>
          <Slide>
            <div className="each-slide-effect d-flex-row align-content-center">
              <div
                className=""
                style={{
                  backgroundImage: `url("/images/sch1.jpg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>

            <div className="each-slide-effect d-flex-row justify-content-center align-content-center">
              <div
                className=""
                style={{
                  backgroundImage: `url("/images/sch3.jpg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>

            <div className="each-slide-effect d-flex-row justify-content-center align-content-center">
              <div
                className=""
                style={{
                  backgroundImage: `url("/images/sch5.jpg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </Slide>
        </div>
      </div>
    
    </div>

    <div className='d-flex justify-content-around m-5'>
  <div className='card m-3 w-50' style={{ width: '18rem' }}>
    <div className='card-body'>
      <h2 className='card-title fw-bold'>Overview about Schools in Rehab</h2>
      <p className='card-text'>
        Schools in Rehab Egypt offer a rich educational experience characterized by academic excellence, well-qualified faculty, modern facilities, and a focus on holistic development. They strive to provide students with the skills, knowledge, and values necessary to succeed academically and personally in an increasingly interconnected world.
      </p>
      <Link to="/education/schools">
      <Button style={{backgroundColor:"green"}}>Learn More</Button>
      </Link>
    </div>
  </div>

  <div className='card m-3 w-50' style={{ width: '18rem' }}>
    <div className='card-body'>
      <h2 className='card-title fw-bold '>Overview about Kindergartens in Rehab</h2>
      <p className='card-text'>
        Kindergartens in Rehab Egypt provide a nurturing environment for young children to learn and grow. They focus on play-based learning and socialization activities, helping children to develop the skills and confidence needed to succeed in school and beyond.
      </p>
      <Link to="/education/schools">
      <Button style={{backgroundColor:"green"}}>Learn More</Button>
      </Link>
    </div>
  </div>
</div>
     </div>
  ) : (
    <div>loading</div>
  )}
</div>
    
</div>
    </>
  )
}