import React, { useContext, useState } from 'react';
import { DataContext } from '../../Context/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone ,faHouse} from '@fortawesome/free-solid-svg-icons';
import { Modal, ProgressBar } from 'react-bootstrap';
import { Button } from 'bootstrap';
import { Slide } from "react-slideshow-image";
const Schools = () => {
    const {Schools, encodedToken} = useContext(DataContext)
    const [showModal, setShowModal] = useState(false);

  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
    return (
        <div>
            <div className='row'>
            {Schools ? (
          [...Schools].map((res) => (
            <div className='bg-light custom-style mb-5 p-3 p-md-5 w-10' key={res.id}>
              <div className='d-flex align-items-center flex-wrap'>
                <img
                  className='rounded-circle me-3 mb-3 mb-md-0'
                  style={{ maxWidth: '100px', height: 'auto' }}
                  src={res.logo}
                  alt={res.name}
                />

                <div className='d-flex flex-column'>
                  <div className='fs-4 fw-bold mb-1'>{res.name}</div>
                  {res.Rating >= 1 && res.Rating <= 5 && (
                    <div >
                    <div className='d-flex align-items-center'>
                      <span className='fw-bold me-2'>Rating:</span>
                      <ProgressBar className='w-75 custom-progress-bar' now={res.Rating * 20} label={`${res.Rating}/5`} />
                    </div>
              </div>
                  )}
                </div>
               
              </div>
              <div className='row justify-content-center'>
              <div  className='col-md-6'>
<div className='fs-5 fw-bold'>Overview</div>
              <div className='fs-5 my-4'>{res.overview}</div>
              <div className='fs-5 fw-bold'>Address</div>
              <div className='fs-5 my-4'>{res.address}</div>
              <div className='d-flex'>
              <div className='d-flex-column '>
<a href={res.website} >
<FontAwesomeIcon icon={faHouse} style={{color:"green"}} className='fa-2x'/>
<div className='fs-6 fw-bold text-success '>Website</div>

                </a>
</div>
<div className='row align-items-center d-flex-column align-items-center'>
  <div className=''>
    <div className='d-flex flex-column align-items-center'>
      <FontAwesomeIcon icon={faPhone} style={{ color: 'green' }} />
      <button
        className='fa-2x btn fs-6 fw-bold text-success'
        onClick={() => handleCall(res.number)}
      >
        Call
      </button>
    </div>
  </div>
</div>

              
      {encodedToken ? (
        <button
          className="btn btn-success fs-6 fw-bold text-success"
          style={{ borderRadius: '10px' }}
          onClick={handleShowModal}
        >
          Complain
        </button>
      ) : null}

           
<div className='d-flex justify-content-center'>

<a href={res.location} className=''>
                  <FontAwesomeIcon icon={faMapMarkerAlt} size='2x' style={{color:"green"}} />
                  <div className=' fs-6 fw-bold text-success'>Location</div>
                </a>
</div>

             
              </div>

              
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
          ))
        ) : (
          <div className='spinner-border text-success' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        )}

            </div>
            <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Submit Your Complaint</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className='form-control'
            rows={3}
            placeholder='Enter your feedback...'
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant='success' onClick={handleCloseModal}>
            Submit Complaint
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
}

export default Schools;
