import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Context/Data'

export default function Navbar() {

    const { userData } = useContext(DataContext)

    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#"><img src="images/logo-color.png" style={{ width: 75 }} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">

                    {/* {userData !== null ? */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Stores</Link></li>
                                <li><Link className="dropdown-item" to="#">Markets</Link></li>
                                <li><Link className="dropdown-item" to="#">Hospitals</Link></li>
                                <li><Link className="dropdown-item" to="#">Education</Link></li>
                                <li><Link className="dropdown-item" to="#">Cinema</Link></li>
                                <li><Link className="dropdown-item" to="#">Maintenance payment</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="resturants">Resturants</Link></li>
                                <li><Link className="dropdown-item" to="#">Shopping</Link></li>
                                <li><Link className="dropdown-item" to="#">Fashion</Link></li>
                                <li><Link className="dropdown-item" to="#">Health</Link></li>
                                <li><Link className="dropdown-item" to="#">Sports</Link></li>
                                <li><Link className="dropdown-item" to="#">Maintenance</Link></li>
                                <li><Link className="dropdown-item" to="#">Home Services</Link></li>
                                <li><Link className="dropdown-item" to="#">Transportation</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contactus">Contact us</Link>
                        </li>
                    </ul>
                    {/* : null} */}

                    {userData === null ? <ul className="d-flex mt-3 ms-auto">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <button className="nav-item btn btn-success rounded-3 mx-2">
                            <Link className="nav-link text-white" aria-current="page" to="login">Login</Link>
                        </button>
                        <button className="nav-item btn btn-success rounded-3 mx-2">
                            <Link className="nav-link text-white" to="register">Register</Link>
                        </button>
                    </ul> : <ul className="d-flex mt-3 ms-auto">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <button className="nav-item btn btn-success rounded-3 mx-2">
                            <Link className="nav-link text-white" to="logout">Logout</Link>
                        </button></ul>}

                </div>
            </div>
        </nav>

    </>
}