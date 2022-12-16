import React from 'react'
import "./Home_dash.css"
import Chart from "../Chart/Chart"

function Home_dash() {
   return (
      <div>
        
              
               <div className="main-content app-content red_border  m-0 bg_clr">
                  {/* <!-- container --> */}
                  <div className="main-container container-fluid m-0 ">
                     {/* <!-- breadcrumb --> */}
                     <div className="breadcrumb-header justify-content-between">
                        <div className="left-content respon_aligment">
                           <span className="main-content-title mg-b-0 mg-b-lg-1">DASHBOARD</span>
                        </div>
                        <div className="justify-content-center mt-2">
                           <ol className="breadcrumb breadcrumb-style3">
                              <li className="breadcrumb-item tx-15">
                                 <a href="javascript:void(0)" class='header_breadcrum'>Dashboard</a>
                              </li>
                              <li className="breadcrumb-item active g_clr" aria-current="page">Dashboard</li>
                           </ol>
                        </div>
                     </div>
                     {/* <!-- /breadcrumb --> */}
                     <div className="row">
                        <div className="col-xl-6 col-sm-6">
                           <div className="card">
                              <div className="card-body">
                                 <div className="row">
                                    <div className="col-xl-12 col-lg-6 col-12">
                                       <div className="mb-3 d-flex align-items-center">
                                          <span className="tx-14">Affiliate Link</span>
                                          <span className="rounded-circle p-1 bg-primary-transparent ms-1">
                                             <img src="assets/img/icon_logo.png" width="25px" />
                                          </span>
                                       </div>
                                       <div className="d-block align-items-center mb-2">
                                          <div className="form-group border_react">
                                             <div className="input-group mb-0">
                                                <input type="text" id="myInput2" className="form-control bg_trans text_clr" value="https://www.wusdt.space/registration?referrallink=778899" />
                                                <span text="button"  className="input-group-text text_clr" >Copy</span>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-xl-4 col-sm-6">
                           <div className="card">
                              <div className="card-body min_height">
                                 <div className="row">
                                    <div className="col-xl-7 col-lg-7 col-7">
                                       <div className="mb-3 d-flex align-items-center">
                                          <span className="tx-14">My Package</span>
                                          <span className="rounded-circle p-1 bg-primary-transparent ms-1">
                                             <img src="assets/img/icon_logo.png" width="25px" />
                                          </span>
                                       </div>
                                       <div className="d-block d-sm-flex align-items-center mb-2">
                                          <h5 className="mb-0 me-2 numberfont">
                                             $ 100.00
                                          </h5>
                                     
                                       </div>
                                   
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-5">
                                       <div className="ht-100p">
                                          <div className="chartjs-size-monitor" style={{ position: 'absolute', inset: '0px', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: '-1' }}>
                                             <div className="chartjs-size-monitor-expand" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: '-1' }}>
                                                <div style={{ position: 'absolute', width: '1000000px', height: '1000000px', left: '0', top: '0' }}></div>
                                             </div>
                                             <div className="chartjs-size-monitor-shrink" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: '-1' }}>
                                                <div style={{ position: 'absolute', width: '200%', height: '200%', left: '0', top: '0' }}></div>
                                             </div>
                                          </div>
                                          <div className="chartjs-size-monitor" style={{ position: 'absolute', inset: '0px', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: '-1' }}>
                                             <div className="chartjs-size-monitor-expand" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: '-1' }}>
                                                <div style={{ position: 'absolute', width: '1000000px', height: '1000000px', left: '0', top: '0' }}></div>
                                             </div>
                                             <div className="chartjs-size-monitor-shrink" style={{ position: 'absolute', left: '0', top: '0', right: '0', bottom: '0', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: '-1' }}>
                                                <div style={{ position: 'absolute', width: '200%', height: '200%', left: '0', top: '0' }}></div>
                                             </div>
                                          </div>
                                          <canvas id="btcData" width="104" height="52" style={{ display: 'block', width: '104px', height: '52px' }} className="chartjs-render-monitor"></canvas>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                           <div className="card">
                              <div className="card-body">
                                 <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-12">
                                       <div className="mb-3 align-items-center">
                                          <span className="tx-14">My Team</span>
                                       </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-7">
                                       <div className="d-block align-items-center mb-2">
                                          <h5 className="mb-0 me-2 numberfont">
                                             Total: 5<br />
                                             Active: 0
                                             <br /> Left
                                          </h5>
                                       </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-5">
                                       <div className="d-block align-items-center mb-2">
                                          <h5 className="mb-0 me-2 numberfont">
                                             Total: 199<br />
                                             Active: 0
                                             <br /> Right
                                          </h5>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                           <div className="card">
                              <div className="card-body">
                                 <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-12">
                                       <div className="mb-3 align-items-center">
                                          <span className="tx-14">My Referral</span>
                                       </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-7">
                                       <div className="d-block align-items-center mb-2">
                                          <h5 className="mb-0 me-2 numberfont">
                                             Total: 5<br />
                                             Active: 0
                                             <br /> Left
                                          </h5>
                                       </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-5">
                                       <div className="d-block align-items-center mb-2">
                                          <h5 className="mb-0 me-2 numberfont">
                                             Total: 5<br />
                                             Active: 0
                                             <br /> Right
                                          </h5>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                           <div className="card">
                              <div className="card-body">
                                 <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-12">
                                       <div className="mb-3 align-items-center">
                                          <span className="tx-14">Referral Bonus</span>
                                       </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-7">
                                       <div className="d-block align-items-center mb-2">
                                          <h5 className="mb-0 me-2 numberfont">$ 0.00</h5>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                           <div className="card">
                              <div className="card-body">
                                 <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-12">
                                       <div className="mb-3 align-items-center">
                                          <span className="tx-14">ROI Income</span>
                                       </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-7">
                                       <div className="d-block align-items-center mb-2">
                                          <h5 className="mb-0 me-2 numberfont">$ 0.00</h5>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                           <div className="card">
                              <div className="card-body">
                                 <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-12">
                                       <div className="mb-3 align-items-center">
                                          <span className="tx-14">Network Bonus</span>
                                       </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-7">
                                       <div className="d-block align-items-center mb-2">
                                          <h5 className="mb-0 me-2 numberfont">$ 0.00</h5>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                           <div className="card">
                              <div className="card-body">
                                 <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-12">
                                       <div className="mb-3 align-items-center">
                                          <span className="tx-14">Level Network Bonus</span>
                                       </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-7">
                                       <div className="d-block align-items-center mb-2">
                                          <h5 className="mb-0 me-2 numberfont">$ 0.00</h5>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                           <div className="card">
                              <div className="card-body">
                                 <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-12">
                                       <div className="mb-3 align-items-center">
                                          <span className="tx-14">Matrix Residuals - I</span>
                                       </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7 col-7">
                                       <div className="d-block align-items-center mb-2">
                                          <h5 className="mb-0 me-2 numberfont">$0</h5>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* <!-- row closed --> */}
                     <div className="row">
                        <div className="col-md-12">
                           <div className="prgs">
                              <img src="assets/img/green_logo.png" id="dynamicwidth" className='mb_responsive d-flex justify-content-start' width="50px" />
                              <div id="myProgress">
                                 <div id="myBar" style={{ backgroundColor: 'green' }}></div>
                              </div>
                           </div>
                           <div style={{ fontSize: 'medium', color: 'rgb(255, 255, 255)' }}>
                              You have earned a total $   out of $  (% out of your total 400% of your investment)
                           </div>
                           <br />
                        </div>
                     </div>
                     <div className="row m-0 p-0">
                        <div className="col-xl-6 col-lg-6 col-12 m-0 p-0">
                           <div className="card">
                              <div className="card-header">
                                 <div className="card-title">Income</div>
                              </div>
                              <div className="card-body">
                                 <div id="sessionsDevice" style={{ minHeight: ' 198.7px' }}>
                                    <div id="apexchartsztt1wgtx" className="apexcharts-canvas apexchartsztt1wgtx apexcharts-theme-light m-auto apex_chart" style={{ width: '300px', height: '198.7px' }}>
                                      
                                       <span className="act_rate mt-3">0</span>
                                       <Chart/>
                                       <g id="SvgjsG2332" className="apexcharts-annotations"></g>
                                       {/* <div className="apexcharts-legend"></div>
                                       <div className="apexcharts-tooltip apexcharts-theme-dark apexcharts-active" style={{ left: '88.1484px', top: '-38.4062px' }}>
                                          <div className="apexcharts-tooltip-series-group" style={{ order: '2', display: 'none', backgroundColor: 'rgb(77, 238, 234)' }}>
                                             <span className="apexcharts-tooltip-marker" style={{ backgroundColor: 'rgb(77, 238, 234)', display: 'none' }}></span>
                                             <div className="apexcharts-tooltip-text" style={{ fontFamily: 'poppins, sans-serif', fontSize: '12px' }}>
                                                <div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label">Mobile: </span><span className="apexcharts-tooltip-text-y-value">55</span></div>
                                                <div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div>
                                                <div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div>
                                             </div>
                                          </div>
                                          <div className="apexcharts-tooltip-series-group" style={{ order: '3', display: 'none', backgroundColor: 'rgb(77, 238, 234)' }}>
                                             <span className="apexcharts-tooltip-marker" style={{ backgroundColor: 'rgb(77, 238, 234)', display: 'none' }}></span>
                                             <div className="apexcharts-tooltip-text" style={{ fontFamily: 'poppins, sans-serif', fontSize: '12px' }}>
                                                <div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label">Mobile: </span><span className="apexcharts-tooltip-text-y-value">55</span></div>
                                                <div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label"></span><span className="apexcharts-tooltip-text-goals-value"></span></div>
                                                <div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div>
                                             </div>
                                          </div>
                                       </div> */}
                                    </div>
                                 </div>
                                 <div className="d-flex mg-b-15 moblie_view">
                                    <div className="me-2"> <span className="avatar avatar-sm radius-4 bg-primary-transparent tx-primary"><i className="fe fe-smartphone"></i></span> </div>
                                    <div className="flex-1">
                                       <div className="flex-between">
                                          <p className="mb-0"><span className="pe-2 border-end">Net Balance</span></p>
                                          <span className="badge badge-success-transparent me-1 ft_18">0</span>
                                       </div>
                                       <div className="progress sisis">
                                          <div className="progress-bar progress-bar-striped progress-bar-animated ht-5 bg-primary" style={{ width: '39.3%' }}></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="d-flex mg-b-15">
                                    <div className="me-2"> <span className="avatar avatar-sm radius-4 bg-secondary-transparent tx-secondary"><i className="fe fe-monitor"></i></span> </div>
                                    <div className="flex-1">
                                       <div className="flex-between">
                                          <p className="mb-0"><span className="pe-2 border-end">Total Withdrawal</span></p>
                                          <span className="badge badge-danger-transparent me-1 ft_18">0</span>
                                       </div>
                                       <div className="progress sisis">
                                          <div className="progress-bar progress-bar-striped progress-bar-animated ht-5 react_progress " style={{ width: '36.4%' }}></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="row">
                        <div className="col-md-12">
                           <div className="card">
                              <div className="card-header d-flex justify-content-between align-items-center">
                                 <div className="card-title">All Income</div>
                              </div>
                              <div className="card-body">
                                 <div className="mb-4">
                                    <div className="mb-1">
                                       Direct Income <span className="float-end tx-primary">
                                          <span className="text-primary">
                                             $ 0
                                          </span>
                                       </span>
                                    </div>
                              
                                    <div className="progress-bar-custom progress-bar-custom-primary">
                                       <div className="progress-custom fill-1 progress-primary wd-95">
                                          <div className="glow glow-primary"></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="mb-4">
                                    <div className="mb-1">
                                       Roi Income <span className="float-end tx-success">
                                          <span className="text-success">
                                             $ 0
                                          </span>
                                       </span>
                                    </div>
                                    <div className="progress-bar-custom progress-bar-custom-success mb-3">
                                       <div className="progress-custom fill-1 progress-success wd-55">
                                          <div className="glow glow-success"></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="mb-4">
                                    <div className="mb-1">
                                       Binary Income <span className="float-end tx-primary">
                                          <span className="text-primary">
                                             $ 0
                                          </span>
                                       </span>
                                    </div>
                                    <div className="progress-bar-custom progress-bar-custom-primary">
                                       <div className="progress-custom fill-1 progress-primary wd-95">
                                          <div className="glow glow-primary"></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="mb-4">
                                    <div className="mb-1">
                                       Binary Level Income <span className="float-end tx-success">
                                          <span className="text-success">
                                             $ 0
                                          </span>
                                       </span>
                                    </div>
                                    <div className="progress-bar-custom progress-bar-custom-success mb-3">
                                       <div className="progress-custom fill-1 progress-success wd-55">
                                          <div className="glow glow-success"></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="mb-4">
                                    <div className="mb-1">
                                       Pool Income<span className="float-end tx-orange">
                                          <span className="text-orange">
                                             $ 0
                                          </span>
                                       </span>
                                    </div>
                                    <div className="progress-bar-custom progress-bar-custom-orange mb-3">
                                       <div className="progress-custom fill-1 progress-orange wd-150">
                                          <div className="glow glow-orange"></div>
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


               {/* <!---footer----> */}
               <div className="main-footer">
                  <div className="col-md-12 col-sm-12 text-center">
                     <div className="container-fluid pd-t-0 ht-100p text-white"> Copyright © 2022 <a href="javascript:void(0)" className="tx-primary">wusdt.space
                     </a>. All rights reserved
                     </div>
                  </div>
               </div>
               {/* <!---end----> */}
            </div>

       
   )
}

export default Home_dash
