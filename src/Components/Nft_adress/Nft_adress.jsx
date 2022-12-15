import React from 'react'

function Nft_adress() {
  return (
    <div style={{height:'100vh'}}>
        
    <div className=" app-content m-0">
        {/* <!-- container --> */}
        <div className=" container-fluid m-0 p-0">
            {/* <!-- breadcrumb --> */}
            <div className="breadcrumb-header justify-content-between">
                <div className="left-content">
                    <span className="main-content-title mg-b-0 mg-b-lg-1">Self Address</span>
                </div>
                <div className="justify-content-center mt-2">
                    <ol className="breadcrumb breadcrumb-style3 Br_ps">
                        <li className="breadcrumb-item tx-15">
                            <a href="javascript:void(0)" className='header_breadcrum' >Address </a>
                        </li>
                        <li className="breadcrumb-item active g_clr" aria-current="page">Self Address</li>
                    </ol>
                </div>
            </div>
            {/* <!-- /breadcrumb --> */}
            <h5 className="mt-5 text-clr text-start text-truncate"> Address : <a href="https://tronscan.org/#/contract/TW4FkjhirQG3ZPi8neDBtVmiyL6uMULVse" className="Txn_here react_txn_here" target="_blank">TW4FkjhirQG3ZPi8neDBtVmiyL6uMULVse</a> 
             </h5>
            {/* <!-- row closed --> */}
          </div>
        {/* <!-- /Container --> */}
    </div>
      
    </div>
  )
}

export default Nft_adress
