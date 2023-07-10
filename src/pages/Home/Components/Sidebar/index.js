import React, { useContext } from 'react'
import { HomeContext } from '../../../../HomeProvider'

const Sidebar = ({ className }) => {
    const toggles = useContext(HomeContext)
    const { toggle } = toggles
    return (
        <React.Fragment>
            {
                toggle ?

                    (<div className={`d-flex flex-column flex-shrink-0 p-3 text-white ${className ? "bg-light" : "bg-dark"}`} style={{ width: 280 }}>
                        <a href="/" className={`d-flex align-items-center mb-3 mb-md-0 me-md-auto  text-decoration-none ${className ? "text-black" : "text-white "}`}>
                            <svg className="bi me-2" width={40} height={32}><use /></svg>
                            <span className="fs-4">Sidebar</span>
                        </a>
                        <hr />
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link active" aria-current="page">
                                    <svg className="bi me-2" width={16} height={16}><use /></svg>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`nav-link ${className ? "text-black" : "text-white "}`}>
                                    <svg className="bi me-2" width={16} height={16}><use /></svg>
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`nav-link ${className ? "text-black" : "text-white "}`}>
                                    <svg className="bi me-2" width={16} height={16}><use /></svg>
                                    Orders
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`nav-link ${className ? "text-black" : "text-white "}`}>
                                    <svg className="bi me-2" width={16} height={16}><use /></svg>
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="#" className={`nav-link ${className ? "text-black" : "text-white "}`}>
                                    <svg className="bi me-2" width={16} height={16}><use /></svg>
                                    Customers
                                </a>
                            </li>
                        </ul>
                        <hr />
                        <div className="dropdown">
                            <a href="#" className={`${className ? "text-black" : "text-white "} "d-flex align-items-center text-decoration-none dropdown-toggle"`} id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" width={32} height={32} className="rounded-circle me-2" />
                                <strong>mdo</strong>

                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>)
                    : null
            }
        </React.Fragment>
    )
}

export default Sidebar