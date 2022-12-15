import React from 'react'

function Active() {
  return (
    <div>
                      <div className="main-content app-content m-0">
                    {/* <!-- container --> */}
                    <div className="main-container container-fluid m-0">
                        {/* <!-- breadcrumb --> */}
                        <div className="breadcrumb-header justify-content-between">
                            <div className="left-content">
                                <span className="main-content-title mg-b-0 mg-b-lg-1">Activate</span>
                            </div>
                            <div className="justify-content-center mt-2">
                                <ol className="breadcrumb breadcrumb-style3 Br_ps">
                                    <li className="breadcrumb-item tx-15">
                                        <a href="javascript:void(0)" className='header_breadcrum'>Activation</a>
                                    </li>
                                    <li className="breadcrumb-item active g_clr" aria-current="page">Activate</li>
                                </ol>
                            </div>
                        </div>
                        {/* <!-- /breadcrumb --> */}
                       
                       <div className="row" style={{marginTop: '0rem'}}>
                                <div className="col-md-3"></div>
                                <div className="col-md-6 card1">
                                    <div className="main_item" role="document">
                                        <div className="modal-content10">
                                            <div className="modal-header" style={{paddingBottom: '10px'}}>
                                                <div className="avlbal">
                                                    <h2 className="modal-title" id="exampleModal3Label2">Activate / Upgrade</h2>
                                                    <div className="Model_text_inner"> 
                                                        <h5 className="modal-title" id="exampleModal3Label2">ULE Balance :<span id="tokenbalance"style={{color: 'rgb(255, 255, 255)'}}>0</span><span style={{color: 'rgb(255, 255, 255)'}}> Coin</span></h5>
                                                        <h5 className="modal-title" id="exampleModal3Label2">TRON Balance :<span readonly="" id="getBalance" style={{color: 'rgb(255, 255, 255)'}}>0</span><span style={{color: 'rgb(255, 255, 255)'}}> TRON</span></h5>
                                                    </div>
                                                    <div className="Model_text_inner">
                                                        <h5 className="modal-title" id="exampleModal3Label2">Live Rate :<input type="text" className="input_width input_width-2" id="txtchangevalue" readonly="" value="19.21229587 Tron/ 106.802806 ULE" style={{color: 'black'}}/></h5>
                                                        <h5 className="modal-title" id="exampleModal3Label2"><input type="text" className="input_width input_width-1" id="txtchangevalue" placeholder="1 TRON = 0.063USD" readonly="" style={{color: 'black'}}/></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-body">
                                                <span className="metamaskConnection text-success text-center">Please login or install tron wallet!</span>
                                                <div className="popup_net">
                                                    <br/>
                                                    <div className="addNum">
                                                        <div className="trxnumber"><input type="text" readonly="" id="txtamount2" className="form5" value="0"/><span>USD</span></div>
                                                        <div className="trxnumber"><input type="text" readonly="" id="txtTokenvalue2" className="form5" placeholder="0 ULE"/><span>ULE Value</span></div>
                                                        <div className="trxnumber"><input type="text" readonly="" id="txtTronvalue2" className="form5" placeholder="0 Tron" value=""/><span style={{fontSize:'13px'}}>TRON Value</span></div>
                                                        <div className="numbtn"><button className="btn-ip-1">+ 100$</button><button className="btn-ip-1">+ 500$</button><button className="btn-ip-1">+ 1000$</button><button className="btn-ip-1 button">Reset</button></div>
                                                        <input type="hidden" id="packageamount" name="name" autocomplete="off"/>
                                                    </div>
                                                    <h5 className="tomenname" style={{marginTop: '1rem'}}></h5>
                                                    <div className="row">
                                                        <div className="col-md-3"></div>
                                                        <div className="col-md-6">
                                                            <a>
                                                                <div className="text-center net_box ">
                                                                    <img src="assets/img/activate.png" className="img-fluid" width="20%" />
                                                                    <h4 className='text-white text-clr'>Activation</h4>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
           
        </div>
        {/* <!-- /Container --> */}
    </div>
      
    </div>
  )
}

export default Active
