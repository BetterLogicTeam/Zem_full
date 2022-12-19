import React, { useState } from 'react'
import Table from '../Table/Table'

function Refferal_bonus() {
    var [reward_income,set_reward_income]= new useState({
        cols:[
                {Header: 'S.No',accessor:'sr'},
                {Header:'User Id',accessor:'income'},
                {Header:'			From ID',accessor:'date'},
                {Header:'Income',accessor:'Reward'},
                {Header:'	Date & Time',accessor:'Rewardd'},
              
              
            ],
        rows:[
                {sr:'1',business:'12345',income:'Null ',Reward:"$ Null",date:'12/11/2021 1:40:08 PM',Sports_Bonus:"$ Null",Net_Income:"$ Null"},
                {sr:'2',business:'12345',income:'Null ',Reward:"$ Null",date:'12/11/2021 1:40:08 PM',Sports_Bonus:"$ Null",Net_Income:"$ Null"},
                {sr:'3',business:'12345',income:'Null ',Reward:"$ Null",date:'12/11/2021 1:40:08 PM',Sports_Bonus:"$ Null",Net_Income:"$ Null"},
        ]});
  return (
    <div>
          <div className="m-0 app-content">
                {/* <!-- container --> */}
                <div className="p-0 m-0 container-fluid">
                    {/* <!-- breadcrumb --> */}
                    <div className="breadcrumb-header justify-content-between">
                        <div className="left-content respon_aligment">
                            <span className="main-content-title mg-b-0 mg-b-lg-1">Referral Bonus </span>
                        </div>
                        <div className="justify-content-center mt-2">
                            <ol className="breadcrumb breadcrumb-style3 Br_ps">
                                <li className="breadcrumb-item tx-15">
                                    <a href="javascript:void(0)" className='header_breadcrum'>All Income </a>
                                </li>
                                <li className="breadcrumb-item active g_clr" aria-current="page">Referral Bonus </li>
                            </ol>
                        </div>
                    </div>
                    {/* <!-- /breadcrumb --> */}
                    
                   {/* <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <div id="myAssets_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">

                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <table className="table table-bordered mb-0 text-nowrap dataTable no-footer" id="myAssets" role="grid" aria-describedby="myAssets_info">
                                                        <thead>
                                                            <tr role="row">
                                                                <th tabindex="0" aria-controls="myAssets" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Coin: activate to sort column descending">S.No</th>
                                                                <th tabindex="0" aria-controls="myAssets" rowspan="1" colspan="1" aria-label="Price: activate to sort column ascending">User Id</th>
                                                                <th tabindex="0" aria-controls="myAssets" rowspan="1" colspan="1" aria-label="Holdings: activate to sort column ascending">From ID</th>
                                                                <th tabindex="0" aria-controls="myAssets" rowspan="1" colspan="1" aria-label="Price: activate to sort column ascending">Income</th>
                                                                
                                                                <th tabindex="0" aria-controls="myAssets" rowspan="1" colspan="1" aria-label="volume: activate to sort column ascending">Date &amp; Time</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr ng-repeat="a in activationList">
                                                                <td>1</td>
                                                                <td>778899</td>
                                                                <td>100</td>
                                                                <td>44</td>
                                                                <td>11/28/2022 8:27:39 PM</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div> */}
                   <Table
                   data={reward_income.rows}
                   columns={reward_income.cols}/>

                </div>
                {/* <!-- /Container --> */}
            </div>
    </div>
  )
}

export default Refferal_bonus
