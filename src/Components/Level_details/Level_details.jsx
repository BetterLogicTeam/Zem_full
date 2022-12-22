import React, { useState } from 'react'
import Table from '../Table/Table'
import "./Level_details.css"

function Level_details() {
    var [reward_income, set_reward_income] = new useState({
        cols: [
            { Header: 'S.Number', accessor: 'sr' },
            { Header: 'User Id', accessor: 'income' },
            { Header: 'Level ', accessor: 'date' },
            { Header: 'Registration Date', accessor: 'Reward' },
            { Header: '	Package', accessor: 'Sports_Bonus' },
            { Header: '	Activation Date', accessor: 'Net_Income' },

        ],
        rows: [
            { sr: '1', business: '12345', income: 'Null ', Reward: "$ Null", date: '12/11/2021 1:40:08 PM', Sports_Bonus: "$ Null", Net_Income: "$ Null" },
            { sr: '2', business: '12345', income: 'Null ', Reward: "$ Null", date: '12/11/2021 1:40:08 PM', Sports_Bonus: "$ Null", Net_Income: "$ Null" },
            { sr: '3', business: '12345', income: 'Null ', Reward: "$ Null", date: '12/11/2021 1:40:08 PM', Sports_Bonus: "$ Null", Net_Income: "$ Null" },
        ]
    });
    return (
        <div>

            <div className=" app-content m-0">
                <div className="p-0 m-0 container-fluid">
                    <div className="breadcrumb-header justify-content-between">
                        <div className="left-content respon_aligment">
                            <span className="main-content-title mg-b-0 mg-b-lg-1">Level Details</span>
                        </div>
                        <div className="justify-content-center mt-2">
                            <ol className="breadcrumb breadcrumb-style3 Br_ps">
                                <li className="breadcrumb-item tx-15">
                                    <a href="javascript:void(0)" className='header_breadcrum'>Team Details  </a>
                                </li>
                                <li className="breadcrumb-item active g_clr" aria-current="page">Level Details</li>
                            </ol>
                        </div>
                    </div>
                    {/* <!-- /breadcrumb --> */}

                    <div className="row m-0">
                        <div className="col-xl-12 p-0">
                            <div className="card p-0">
                                <div className="card-body">
                                    <div className="">
                                        <div id="myAssets_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">

                                            <div className="row ">
                                                <div className="col-sm-12">
                                                    <div className="row mt-3 " style={{ marginLeft: '10px' }}>
                                                        <div class="col-md-3 text-start mb-3 "><label className='responsive_lebal'>Choose Status</label>
                                                            <select class="floating-input form-control select_bg  select_bg bg_trans " data-val="true" data-val-required="Position is required">
                                                                <option value="0">All Levels</option><option value="1">Level 1</option><option value="2">Level 2</option><option value="3">Level 3</option><option value="4">Level 4</option><option value="5">Level 5</option><option value="6">Level 6</option><option value="7">Level 7</option><option value="8">Level 8</option><option value="9">Level 9</option><option value="10">Level 10</option><option value="11">Level 11</option><option value="12">Level 12</option><option value="13">Level 13</option><option value="14">Level 14</option><option value="15">Level 15</option><option value="16">Level 16</option><option value="17">Level 17</option><option value="18">Level 18</option><option value="19">Level 19</option><option value="20">Level 20</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-3 text-start mb-3">
                                                            <label className='responsive_lebal'>Position</label>
                                                            <select class="floating-input form-control select_bg bg_trans" data-val="true" data-val-required="Position is required">
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
                    {/* <!-- row closed --> */}
                </div>
                <Table
                    data={reward_income.rows}
                    columns={reward_income.cols}
                    className='mt-5 p-0' />
                {/* <!-- /Container --> */}
            </div>
        </div>
    )
}

export default Level_details
