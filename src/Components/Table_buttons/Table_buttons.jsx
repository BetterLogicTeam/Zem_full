import React from 'react'

function Table_buttons() {
  return (
    <div>
              <div className="row m-0 justify-content-between" >
                                        <div className="col-sm-12 col-md-6 text-start ps-4 text_clr">
                                            <div className="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 9 of 9 entries</div>
                                        </div>
                                        <div className="col-sm-12 col-md-6  d-flex justify-content-end pe-5 res_Ponsive_mt">
                                            <div className="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                                                <ul className="pagination">
                                                    <li className="paginate_button   previous disabled buttomns " style={{backgroundColor:'ta'}} id="example1_previous">
                                                        <a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0" className="page-link text_clr">Previous</a>
                                                    </li>
                                                    <li className="paginate_button  active ">
                                                        <a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0" className="page-link res_ponsive_button" style={{backgroundColor:'#4deeea',color:'#000000'}}>1</a>
                                                    </li>
                                                    <li className="paginate_button  next disabled" id="example1_next">
                                                        <a href="#" aria-controls="example1" data-dt-idx="2" tabindex="0" className="page-link text_clr">Next</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
    </div>
  )
}

export default Table_buttons
