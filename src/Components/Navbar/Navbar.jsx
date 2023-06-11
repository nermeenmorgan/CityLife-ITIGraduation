import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Context/Data'

export default function Navbar() {

    const { userData } = useContext(DataContext)
    const { DeleteUserData } = useContext(DataContext)

    return <>
        <nav className="navbar navbar-expand-lg bg-main-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to=""><img src="images/logo-no-background.svg" style={{ width: 60 }} alt="Logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="banks">Banks</Link></li>
                                <li><Link className="dropdown-item" to="markets">Markets</Link></li>
                                <li><Link className="dropdown-item" to="hospitals">Hospitals</Link></li>
                                <li><Link className="dropdown-item" to="education">Education</Link></li>
                                <li><Link className="dropdown-item" to="cinema">Cinema</Link></li>
                                <li><Link className="dropdown-item" to="payment">Payment</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="restaurants">Restaurants</Link></li>
                                <li><Link className="dropdown-item" to="shopping">Shopping</Link></li>
                                <li><Link className="dropdown-item" to="fashion">Fashion</Link></li>
                                <li><Link className="dropdown-item" to="health">Health</Link></li>
                                <li><Link className="dropdown-item" to="sports">Sports</Link></li>
                                <li><Link className="dropdown-item" to="maintenance">Maintenance</Link></li>
                                <li><Link className="dropdown-item" to="homeServices">Home Services</Link></li>
                                <li><Link className="dropdown-item" to="transportation">Transportation</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contactus">Contact us</Link>
                        </li>
                    </ul>

                    {userData === null ?
                        <ul className="d-flex mt-3 ms-auto">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                            <button className="nav-item btn btn-success rounded-3 mx-2" style={{width:80}}>
                                <Link className="nav-link text-white" aria-current="page" to="signin">Sign in</Link>
                            </button>
                            <button className="nav-item btn btn-success rounded-3 mx-2" style={{width:80}}>
                                <Link className="nav-link text-white" to="signup">Sign up</Link>
                            </button>
                        </ul>
                        :
                        <ul className="d-flex mt-3 ms-auto">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                            <button className="nav-item btn btn-success rounded-3 mx-2" style={{width:80}} onClick={() => {DeleteUserData()}}>
                                Sign out
                            </button>
                        </ul>}

                </div>
            </div>
        </nav>

    </>
}