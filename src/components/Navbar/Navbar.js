import React from 'react'
import logo from '../../assets/images/icons/img_terazo_Logo@3x.jpg'
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{ height: '100px' }}>
            <div className="container-fluid" >
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="" width="168" height="50" className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end navbar-nav me-auto" id="#navbarSupportedContent">
                    <div className="navbar-nav">
                        <a className="nav-link" href="/">How it works</a>
                        <a className="nav-link" href="/">About Us</a>
                        <a className="nav-link disabled" href='/'>Login</a>
                        <button className='btn btn-primary btn-lg' style={{ borderRadius: '50px' }}>
                            Request invite
                        </button>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar