import React, { useState } from 'react'
import Table from '../Table/Table'

function My_refferal() {
    var [reward_income, set_reward_income] = new useState({
        cols: [
            { Header: 'S.Number', accessor: 'sr' },
            { Header: 'User Id', accessor: 'income' },
            { Header: '		Package', accessor: 'date' },
            { Header: 'Date & Time', accessor: 'Reward' },
            { Header: '	Status', accessor: 'Rewardd' },
            { Header: '		Position', accessor: 'Rewarddd' },
            { Header: '			Activation Date & Time', accessor: 'Rewardddd' },


        ],
        rows: [
            { sr: '1', business: '12345', income: 'Null ', Reward: "$ Null", date: '12/11/2021 1:40:08 PM', Sports_Bonus: "$ Null", Net_Income: "$ Null" },
            { sr: '2', business: '12345', income: 'Null ', Reward: "$ Null", date: '12/11/2021 1:40:08 PM', Sports_Bonus: "$ Null", Net_Income: "$ Null" },
            { sr: '3', business: '12345', income: 'Null ', Reward: "$ Null", date: '12/11/2021 1:40:08 PM', Sports_Bonus: "$ Null", Net_Income: "$ Null" },
        ]
    });
    return (
        <div>
            <div className=" app-content m-0 p-0">
                {/* <!-- container --> */}
                <div className="p-0 container-fluid m-0">
                    {/* <!-- breadcrumb --> */}
                    <div className="breadcrumb-header justify-content-between">
                        <div className="left-content respon_aligment">
                            <span className="main-content-title mg-b-0 mg-b-lg-1">My Refferal</span>
                        </div>
                        <div className="justify-content-center mt-2">
                            <ol className="breadcrumb breadcrumb-style3 Br_ps">
                                <li className="breadcrumb-item tx-15">
                                    <a href="javascript:void(0)" className='header_breadcrum'>Team Details</a>
                                </li>
                                <li className="breadcrumb-item active g_clr" aria-current="page">My Refferal</li>
                            </ol>
                        </div>
                    </div>
                    {/* <!-- /breadcrumb --> */}

                    <div className="row m-0">
                        <div className="col-xl-12 p-0 m-0 ">
                            <div className="card m-0 there mb-3 ">
                                <div className="card-body">
                                    <div className="">
                                        <div id="myAssets_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                            <div className="row m-0">
                                                <div className="col-sm-12 p-0">
                                                    <div className="row mt-3 m-0" >

                                                        <div className="col-md-2 text-start">
                                                            <label className='responsive_lebal'>Position</label>
                                                            <select className="floating-input form-control select_bg bg_trans" data-val="true" data-val-required="Position is required">
                                                                <option style={{ color: 'white' }}>Select Position</option>
                                                                <option value="0" style={{ color: 'white' }}>All</option>
                                                                <option value="1">Left</option>
                                                                <option value="2">Right</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-2 text-start mb-2 m-md-0"><label className='responsive_lebal'>Choose Status</label>
                                                            <select className="floating-input form-control select_bg bg_trans " data-val="true" data-val-required="Position is required">
                                                                <option value="">Select Status</option>
                                                                <option value="2">All</option>
                                                                <option value="1">Active</option>
                                                                <option value="0">In-Active</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                    <br /><br />


                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <Table className=''
                        data={reward_income.rows}
                        columns={reward_income.cols}
                    />
                </div>

                {/* <!-- /Container --> */}
            </div>

        </div>
    )
}

export default My_refferal
