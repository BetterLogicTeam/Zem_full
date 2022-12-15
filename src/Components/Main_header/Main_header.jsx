import React from 'react'

function Main_header() {
  return (
    <div className='' >
          <div className="main-header side-header sticky nav nav-item main_header p-0 m-0"  >
                        <div className=" main-container container-fluid m-0 p-0">
                            <div className="main-header-left">
                                <div className="responsive-logo">
                                    <a href="dashboard.html" className="header-logo"> 
                                    <img src="assets/img/brand/logo-white.png" className="mobile-logo dark-logo-1" alt="logo"/> 
                                    <img src="assets/img/brand/logo-white-1.png" className="mobile-logo-1 dark-logo-1" alt="logo"/> </a>
                                </div>
                                <div className="app-sidebar__toggle" data-bs-toggle="sidebar">
                                    {/* <!-- <div className="icon"></div> -->  */}
                                    <a className="open-toggle" href="javascript:void(0)">
                                    <i className="header-icon fe fe-align-left"></i>
                                    </a>
                                    <a className="close-toggle" href="javascript:void(0)">
                                    <i className="header-icon fe fe-x"></i></a> 
                                </div>
                                <div className="logo-horizontal"> <a href="dashboard.html" className="header-logo">
                                    <img src="assets/img/brand/logo-white.png" className="mobile-logo dark-logo-1" alt="logo"/> 
                                    <img src="assets/img/brand/logo-white-1.png" className="mobile-logo-1 dark-logo-1" alt="logo"/> </a>
                                </div>
                            </div>
                            <div className="main-header-right">
                                <button className="navbar-toggler navresponsive-toggler d-lg-none ms-auto" type="button" 
                                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false"
                                    aria-label="Toggle navigation"> 
                                <span className="navbar-toggler-icon fe fe-more-vertical"></span> 
                                </button> 
                                <div className="mb-0 navbar navbar-expand-lg navbar-nav-right responsive-navbar navbar-dark p-0">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                                        <ul className="nav nav-item header-icons navbar-nav-right ms-auto">
                                       
                                        <li className="dropdown main-profile-menu nav-item">
                                            <a className="new nav-link profile-user rounded-circle shadow d-flex" href="javascript:void(0)" data-bs-toggle="dropdown">
                                                
                                                <img src="assets/img/green.png" /> &nbsp;User ID : 772255
                                            </a>
                                            <ul className="dropdown-menu">
                                                
                                                
                                                <li><a className="dropdown-item" href="/LogOut"><i className="fe fe-power"></i>Log Out</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
      
    </div>
  )
}

export default Main_header
