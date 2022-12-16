import React, { useState } from 'react'
import Table from '../Table/Table'

function Registration_history() {

    var [reward_income,set_reward_income]= new useState({
        cols:[
                {Header: 'S.No',accessor:'sr'},
                {Header:'User Id',accessor:'income'},
                {Header:'	Wallet Address',accessor:'date'},
                {Header:'Reg. Date & Time',accessor:'Reward'},
                { Header: '	TXN', accessor: 'Sports_Bonus' },
                { Header: '	Amount', accessor: 'Net_Income' },
            ],
        rows:[
                {sr:'1',business:'12345',income:'Null ',Reward:"$ Null",date:'12/11/2021 1:40:08 PM',Sports_Bonus:"$ Null",Net_Income:"$ Null"},
                {sr:'2',business:'12345',income:'Null ',Reward:"$ Null",date:'12/11/2021 1:40:08 PM',Sports_Bonus:"$ Null",Net_Income:"$ Null"},
                {sr:'3',business:'12345',income:'Null ',Reward:"$ Null",date:'12/11/2021 1:40:08 PM',Sports_Bonus:"$ Null",Net_Income:"$ Null"},
        ]});
  return (
    <div>
          <div className="main-content app-content">
        {/* <!-- container --> */}
        <div className="main-container container-fluid">
            {/* <!-- breadcrumb --> */}
            <div className="breadcrumb-header justify-content-between">
                <div className="left-content respon_aligment">
                    <span className="main-content-title mg-b-0 mg-b-lg-1">Registration History </span>
                </div>
                <div className="justify-content-center mt-2">
                    <ol className="breadcrumb breadcrumb-style3 Br_ps">
                        <li className="breadcrumb-item tx-15">
                            <a href="javascript:void(0)">Activation </a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Registration History </li>
                    </ol>
                </div>
            </div>
            {/* <!-- /breadcrumb --> */}
            
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <div id="myAssets_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                    
                                    <div className="row">
                                        <div className="col-sm-12">
                                          
                                            <Table
                                             data={reward_income.rows}
                                             columns={reward_income.cols}/>
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

export default Registration_history
