import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import img1 from '../../assets/homeImages/Cinema.png';
import img2 from '../../assets/homeImages/bank2.jpg';
import img3 from '../../assets/homeImages/hos2.jpg';
import img4 from '../../assets/homeImages/images.jpeg';
import img5 from '../../assets/homeImages/school5.jpg';
import img6 from '../../assets/homeImages/2.jpg';


export default function Home() {
    return (
        <>
            {/* <section>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className={`${styles.img} d-block w-100 `} src={myImage1} alt="First slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>.......</h5>
                                <p>...</p>
                            </div>

                        </div>

                        <div className="carousel-item">
                            <img className={`${styles.img} d-block w-100 `} src={myImage2} alt="First slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>.......</h5>
                                <p>...</p>
                            </div>
                        </div>



                        <div className="carousel-item ">
                            <img className={`${styles.img} d-block w-100 `} src={myImage2} alt="First slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>.......</h5>
                                <p>...</p>
                            </div>
                        </div>


                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>  */}


            {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={img1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={img3} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div> */}



            <section className=''>
                <h5 className='text-center'>Services</h5>
                <div className="container">
                    <div className="row m-3">
                        <div className="col-md-4 ">
                            <div className='p-3'>
                                <div className={`${styles.dFlex}`} style={{ backgroundImage: `url(${img2})`, backgroundSize: "100% 100%", height: '200px' }}>
                                    <Link className="p-3 text-white fs-3 " to="/ContactUs" style={{ textDecoration: 'none' }}>Banks</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='p-3'>
                                <div className={`${styles.dFlex}`} style={{ backgroundImage: `url(${img4})`, backgroundSize: "100% 100%", height: '200px' }}>
                                    <Link className="p-3 text-white fs-3 " to="/Markets" style={{ textDecoration: 'none' }}>Markets</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='p-3'>
                                <div className={`${styles.dFlex}`} style={{ backgroundImage: `url(${img3})`, backgroundSize: "100% 100%", height: '200px' }}>
                                    <Link className="p-3 text-white fs-3" to="/Hospital" style={{ textDecoration: 'none' }}>Hospital</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='p-3'>
                                <div className={`${styles.dFlex}`} style={{ backgroundImage: `url(${img5})`, backgroundSize: "100% 100%", height: '200px' }}>
                                    <Link className="p-3 text-white fs-3" to="/Education" style={{ textDecoration: 'none' }}>Education</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='p-3'>
                                <div className={`${styles.dFlex}`} style={{ backgroundImage: `url(${img1})`, backgroundSize: "100% 100%", height: '200px' }}>
                                    <Link className="p-3 text-white fs-3" to="/Cinema" style={{ textDecoration: 'none' }}>Cinema</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='p-3 '>
                                <div className={`${styles.dFlex} ${styles.font}` } style={{ backgroundImage: `url(${img6})`, backgroundSize: "100% 100%", height: '200px' }}>
                                    <Link className="p-3 text-white fs-3" to="/MaintenancePayment" style={{ textDecoration: 'none' }}>Payment & Complain</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className=' '>
                <div className='container p-3 '>
                    <h5 className='text-center py-2 '>Categories</h5>
                    <div className='row'>
                        <div className='col-md-3 col-sm-2 text-center p-1 '>
                            <div className='p-4 shadow  m-2 bg-white rounded w-75 mx-auto'>
                                <i class="fa-solid fa-utensils fs-1  align-items-end  "></i>
                                <div className=''>Restaurants</div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-2 text-center p-1'>
                            <div className='p-4 shadow  m-2 bg-white rounded w-75 mx-auto'>
                                <i class="fa-solid fa-cart-shopping fs-1"></i>
                                <div className=''>shopping</div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-2 text-center p-1'>
                            <div className='p-4 shadow  m-2 bg-white rounded w-75 mx-auto'>
                                <i class="fa-solid fa-shirt fs-1"></i>
                                <div className=''>Fashion</div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-2 text-center p-1'>
                            <div className='p-4 shadow  m-2 bg-white rounded w-75 mx-auto'>
                                <i class="fa-solid fa-heart-pulse fs-1"></i>
                                <div className=''>Health</div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-2 text-center p-1'>
                            <div className='p-4 shadow  m-2 bg-white rounded w-75 mx-auto'>
                                <i class="fa-solid fa-table-tennis-paddle-ball fs-1"></i>
                                <div className=''>Sports</div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-2 text-center p-1'>
                            <div className='p-4 shadow  m-2 bg-white rounded w-75 mx-auto'>
                                <i class="fa-solid fa-wrench fs-1"></i>
                                <div className=''>Maintenance</div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-2 text-center p-1'>
                            <div className='p-4 shadow  m-2 bg-white rounded w-75 mx-auto'>
                                <i class="fa-solid fa-house-laptop fs-1"></i>
                                <div className=''>Home Services</div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-2 text-center '>
                            <div className='p-4 shadow  m-2 bg-white rounded w-75 mx-auto'>
                                <i class="fa-solid fa-truck-plane fs-1"></i>
                                <div className=''>Transportation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )

}

