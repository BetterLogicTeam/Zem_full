import React, { useState } from 'react'
import Table from '../Table/Table'
// import "./Direct_icome.css"
import "./Direct_income.css"

function Direct_icome() {

    var [reward_income,set_reward_income]= new useState({

        cols:[
                {Header: 'S.No',accessor:'sr'},
                {Header:'User Id',accessor:'income'},
                {Header:'From ID',accessor:'date'},
                {Header:'Income',accessor:'Reward'},
                { Header: 'Date & Time', accessor: 'Sports_Bonus' },
                // { Header: '	Date & Time', accessor: 'Net_Income' },
            ],
        rows:[
                {sr:'1',business:'12345',income:'Null ',Reward:"$ Null",date:'12/11/2021 1:40:08 PM',Sports_Bonus:"$ Null",Net_Income:"$ Null"},
                {sr:'2',business:'12345',income:'Null ',Reward:"$ Null",date:'12/11/2021 1:40:08 PM',Sports_Bonus:"$ Null",Net_Income:"$ Null"},
                {sr:'3',business:'12345',income:'Null ',Reward:"$ Null",date:'12/11/2021 1:40:08 PM',Sports_Bonus:"$ Null",Net_Income:"$ Null"},
        ]});
  return (
    <div className='main_Ative_history'>
      <div className=" m-0 app-content">
        {/* <!-- container --> */}
        <div className=" m-0 container-fluid p-0">
            {/* <!-- breadcrumb --> */}
            <div className="breadcrumb-header justify-content-between">
                <div className="left-content">
                    <span className="main-content-title mg-b-0 mg-b-lg-1">Activate History  </span>
                </div>
                <div className="justify-content-center mt-2">
                    <ol className="breadcrumb breadcrumb-style3 Br_ps">
                        <li className="breadcrumb-item tx-15">
                            <a href="javascript:void(0)"  className='header_breadcrum'>Activation </a>
                        </li>
                        <li className="breadcrumb-item active g_clr" aria-current="page">Activate History </li>
                    </ol>
                </div>
            </div>
            {/* <!-- /breadcrumb --> */}
{/*             
           <div className="row border m-0 p-0">
        <div className="col-xl-12">
            <div className="card">
                <div className="card-body">
                    <div className="table-responsive">
                        <div id="myAssets_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">

                            <div className="row">
                                <div className="col-sm-12 col-md-12"> */}
                                  
                                    <Table
                                    data={reward_income.rows}
                                    columns={reward_income.cols}/>
                                {/* </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

        </div>
        {/* <!-- /Container --> */}
    </div>
    </div>
  )
}

export default Direct_icome
