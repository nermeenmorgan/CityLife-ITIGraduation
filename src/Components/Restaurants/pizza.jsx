import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
import { DataContext } from '../../Context/Data';
// import RestaurantsNavbar from './RestaurantsNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ProgressBar } from 'react-bootstrap';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './AllRes.css';
const Pizza = () => {
    const { PizzaRes } = useContext(DataContext);
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
        <>
              {/* <RestaurantsNavbar /> */}
      <div className='fs-2 ms-5 fw-bold me-5 text-center'>Pizza Restaurants</div>
      <div className='d-flex flex-column justify-content-center m-5'>
        {PizzaRes ? (
          [...PizzaRes].map((res) => (
            <div className='bg-light custom-style mb-5 p-3 p-md-5' key={res.id}>
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
                    <div className='d-flex align-items-center'>
                      <span className='fw-bold me-2'>Rating:</span>
                      <ProgressBar className='w-75 custom-progress-bar' now={res.Rating * 20} label={`${res.Rating}/5`} />
                    </div>
                  )}
                </div>
                <a href={res.location} className='ms-auto'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} size='2x' />
                </a>
              </div>

              <div className='fs-5 my-4'>{res.overview}</div>

              <div className='d-flex flex-wrap justify-content-center'>
                <img className='my-2 mx-3' style={{ maxWidth: '150px', height: 'auto' }} src={res.menu1} alt='menu 1' />
                <img className='my-2 mx-3' style={{ maxWidth: '150px', height: 'auto' }} src={res.menu1} alt='menu 2' />
                <img className='my-2 mx-3' style={{ maxWidth: '150px', height: 'auto' }} src={res.menu1} alt='menu 3' />
              </div>

              <div className='d-flex justify-content-center my-4'>
                <button
                  className='btn btn-success me-2'
                  style={{ borderRadius: '10px' }}
                  onClick={() => handleCall(res.number)}
                >
                  Call for order
                </button>
                <button
                  className='btn btn-success me-2'
                  style={{ borderRadius: '10px' }}
                  onClick={handleShowModal}
                >
                  Feedback
                </button>
                <FontAwesomeIcon className='fa-2x' icon={faHeart} color='red' />
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
          <Modal.Title>Leave Your Feedback!</Modal.Title>
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
            Submit Feedback
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
}

export default Pizza;
