   import React from 'react'
   
   function Self_adress() {
     return (
       <div style={{height:"100vh"}}>
            <div className="main-content m-0 app-content">
        {/* <!-- container --> */}
        <div className="main-container m-0 container-fluid">
            {/* <!-- breadcrumb --> */}
            <div className="breadcrumb-header justify-content-between">
                <div className="left-content">
                    <span className="main-content-title mg-b-0 mg-b-lg-1">Self Address</span>
                </div>
                <div className="justify-content-center mt-2">
                    <ol className="breadcrumb breadcrumb-style3 Br_ps">
                        <li className="breadcrumb-item tx-15">
                            <a href="javascript:void(0)" className='header_breadcrum'>Address </a>
                        </li>
                        <li className="breadcrumb-item active g_clr" aria-current="page">Self Address</li>
                    </ol>
                </div>
            </div>
            {/* <!-- /breadcrumb --> */}
            <h5 className="mt-5 text-clr text-start">Wallet Address : <a href="https://tronscan.io/#/contract/undefined" className="Txn_here text-clr  text-decoration-none" target="_blank"
                >Connect Wallet</a> 
             </h5>
            {/* <!-- row closed --> */}
          </div>
        {/* <!-- /Container --> */}
    </div>
       </div>
     )
   }
   
   export default Self_adress
   