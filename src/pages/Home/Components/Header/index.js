import React, { useContext } from 'react'
import { HomeContext } from '../../../../HomeProvider'

const Header = ({ className }) => {
    const data = useContext(HomeContext)
    const { onChangeText, text } = data
    return (
        <nav className={`navbar navbar-expand-lg  ${className ? "bg-light" : "bg-dark"}}`}>
            <div className="container-fluid">
                <a className={`navbar-brand ${className ? "text-black" : "text-white "}`} href="#">Navbar</a>
                <button className={` navbar-toggler ${className ? null : "bg-light"}`} type="button" >
                    <span className={`navbar-toggler-icon`} />
                </button>
                <div style={{}} className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" onChange={onChangeText} value={text} type="search" placeholder="text..." />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav >

    )
}

export default Header