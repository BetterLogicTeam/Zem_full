import React, { useState } from 'react'
import Table from "../Table/Table"

function Level_network_bonus() {
    var [reward_income,set_reward_income]= new useState({
        cols:[
                {Header: 'S.No',accessor:'sr'},
                {Header:'User Id',accessor:'income'},
                {Header:'				From Id',accessor:'date'},
                {Header:'	Level',accessor:'Reward'},
                {Header:'	Income',accessor:'Rewardd'},
                {Header:'	Date & Time',accessor:'Rewarddd'},
              
              
              
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
                            <span className="main-content-title mg-b-0 mg-b-lg-1">Level Network Bonus</span>
                        </div>
                        <div className="justify-content-center mt-2">
                            <ol className="breadcrumb breadcrumb-style3 Br_ps">
                                <li className="breadcrumb-item tx-15">
                                    <a href="javascript:void(0)" className='header_breadcrum'>All Income </a>
                                </li>
                                <li className="breadcrumb-item active g_clr" aria-current="page">Level Network Bonus </li>
                            </ol>
                        </div>
                    </div>
                    {/* <!-- /breadcrumb --> */}
                    
                 
                   <Table
                   data={reward_income.rows}
                   columns={reward_income.cols}/>

                </div>
                {/* <!-- /Container --> */}
            </div>
    </div>
  )
}

export default Level_network_bonus
