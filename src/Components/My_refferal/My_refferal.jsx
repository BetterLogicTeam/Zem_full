import React, { useState } from 'react'
import Table from '../Table/Table'

function My_refferal() {
    var [reward_income,set_reward_income]= new useState({
        cols:[
                {Header: 'S.Number',accessor:'sr'},
                {Header:'User Id',accessor:'income'},
                {Header:'		Package',accessor:'date'},
                {Header:'Date & Time',accessor:'Reward'},
                {Header:'	Status',accessor:'Rewardd'},
                {Header:'		Position',accessor:'Rewarddd'},
                {Header:'			Activation Date & Time',accessor:'Rewardddd'},
                {Header:'				Total Business',accessor:'Rewarddddd'},
              
            ],
        rows:[
                {sr:'1',business:'12345',income:'Null ',Reward:"$ Null",date:'12/11/2021 1:40:08 PM',Sports_Bonus:"$ Null",Net_Income:"$ Null"},
                {sr:'2',business:'12345',income:'Null ',Reward:"$ Null",date:'12/11/2021 1:40:08 PM',Sports_Bonus:"$ Null",Net_Income:"$ Null"},
                {sr:'3',business:'12345',income:'Null ',Reward:"$ Null",date:'12/11/2021 1:40:08 PM',Sports_Bonus:"$ Null",Net_Income:"$ Null"},
        ]});
  return (
    <div>
            <div className=" app-content m-0 p-0">
        {/* <!-- container --> */}
        <div className="p-0 container-fluid m-0">
            {/* <!-- breadcrumb --> */}
            <div className="breadcrumb-header justify-content-between">
                <div className="left-content respon_aligment">
                    <span className="main-content-title mg-b-0 mg-b-lg-1">Activation Withdrawal History</span>
                </div>
                <div className="justify-content-center mt-2">
                    <ol className="breadcrumb breadcrumb-style3 Br_ps">
                        <li className="breadcrumb-item tx-15">
                            <a href="javascript:void(0)" className='header_breadcrum'>History</a>
                        </li>
                        <li className="breadcrumb-item active g_clr" aria-current="page">Activation Withdrawal History</li>
                    </ol>
                </div>
            </div>
            {/* <!-- /breadcrumb --> */}
            
             <div className="row m-0">
                <div className="col-xl-12 p-0 m-0 ">
                    <div className="card m-0 there ">
                         <div className="card-body">
                            <div className="">
                                <div id="myAssets_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                   <div className="row m-0">
                                        <div className="col-sm-12 p-0">
                                            <div className="row mt-3" style={{marginLeft: '10px'}}>
                                                <div className="col-md-2 text-start"><label className='responsive_lebal'>Choose Status</label>
                                                    <select className="floating-input form-control select_bg bg_trans " data-val="true" data-val-required="Position is required">
                                                        <option value="">Select Status</option>
                                                        <option value="2">All</option>
                                                        <option value="1">Active</option>
                                                        <option value="0">In-Active</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-2 text-start">
                                                    <label className='responsive_lebal'>Position</label>
                                                    <select className="floating-input form-control select_bg bg_trans" data-val="true" data-val-required="Position is required">
                                                        <option style={{color: 'white'}}>Select Position</option>
                                                        <option value="0" style={{color: 'white'}}>All</option>
                                                        <option value="1">Left</option>
                                                        <option value="2">Right</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-3 text-start">
                                                    <label className='responsive_lebal'> From Date</label><br/>
                                                    <input type="date" placeholder="dd-mm-yyyy" name="from_date" id="from_date" className="select-system floating-input form-control select_bg bg_trans"/>
                                                </div> 
                                                <div className="col-md-3 text-start">
                                                    <label className='responsive_lebal'> To Date</label><br/>
                                                    <input type="date" placeholder="dd-mm-yyyy" name="to_date" id="to_date" className="select-system floating-input form-control select_bg bg_trans"/>
                                                </div>
                                                   
                                                    <div className="col-md-2 mt-2">
                                                        <input type="button" name="to_date" className="btn  search_buttton mt_5" value="Search"/></div>
                                                </div>
                                                    <br/><br/>
                                             
                                             
                                        </div>
                                           
                                    </div>
                                     
                                </div>
                            </div>
                        </div>
                    </div>
                    
                
                </div>
            </div>


        </div>
        <Table 
                                             data={reward_income.rows}
                                             columns={reward_income.cols}
                                             className=''/>
        {/* <!-- /Container --> */}
    </div>
      
    </div>
  )
}

export default My_refferal
