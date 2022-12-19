import React from 'react'
import "./Matchin_tree.css"

function Matchig_tree() {
  return (
    <div>
          <div className="">
        {/* <!-- container --> */}
        <div className=" container-fluid p-0">
            {/* <!-- breadcrumb --> */}
            <div className="breadcrumb-header justify-content-between">
                <div className="left-content respon_aligment">
                    <span className="main-content-title mg-b-0 mg-b-lg-1">Network View </span>
                </div>
                <div className="justify-content-center mt-2">
                    <ol className="breadcrumb breadcrumb-style3 Br_ps">
                        <li className="breadcrumb-item tx-15">
                            <a href="javascript:void(0)"  className='header_breadcrum'>Team Details </a>
                        </li>
                        <li className="breadcrumb-item active g_clr" aria-current="page">Network View </li>
                    </ol>
                </div>
            </div>
            {/* <!-- /breadcrumb --> */}
            {/* <!----Tree section start----> */}
            <div className="row m-0">
                <div className="col-md-6">
                    <div className="search-box">
                        <form action="#" className="form-horizontal ng-pristine ng-valid" method="post" role="form">
                            <div className="form-wrapper react_form_wrapper">
                                <input className="form-control srch_frm" id="ddluserid" name="userId" type="text" value="" />
                                <span className="field-validation-valid" data-valmsg-for="userId" data-valmsg-replace="true"></span>
                                <input type="submit" value="SUBMIT" id="Search" className="btn btn-sm btn-danger topmargin submit_btn" />
                                 <button id="#home"  type="button" className="btn btn-sm btn-danger topmargin float_rt">Home</button>
                                <button onclick="goBack()" type="button" className="btn btn-sm btn-danger topmargin float_rt">BACK</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                 <div className="tree_icon">
                    <div className="tree_name">
                        <img src="assets/img/tree/tree_green.png" width="40px" height="40px"/>
                      <span className='text-clr'>Active</span>  
                    </div>
                    <div className="tree_name">
                        <img src="assets/img/tree/tree_red.png" width="40px" height="40px"/>
                       
                        <span className='text-clr'> In-Active</span>  
                    </div>
                    <div className="tree_name">
                        <img src="assets/img/tree/tree_black.png" width="40px" height="40px"/>
                       
                           
                        <span className='text-clr'>  Not Registered</span>
                    </div>
                 </div>   
                </div>
            </div>
           
              <div class="row m-0 p-0">
                <div class="col-md-12">
                    <div class="card react_tree responsive_margin network_veiw">
                        <div id="tree" class="treeview" style={{margin: '40px auto'}}>
                            <div class="treemember">
                                <div class="dropdown">
                                    <button class="dropbtn">
                                        
                                        <img src="assets/img/tree/tree_green.png" class="abc" width="40px" onclick="Image_Click(364734)"/>
                                    </button>

                                    <div class="span" style={{color:'#fff'}}>
                                        User <br/> 364734
                                    </div>
                                    <div class="dropdown-content">
                                        <table class="tables" cellpadding="0px" cellspacing="0px">
                                            <tbody>
                                                <tr class="fgtybmd" style={{display:'none'}}>
                                                    <td class="table_heading">Sponsor Name:</td>
                                                    <td colspan="3">
                                                        Subham kumar
                                                    </td>

                                                </tr>
                                                <tr class="fgtybmd">

                                                    <td class="table_heading">Sponsor :</td>
                                                    <td class="grtydfbc" colspan="3">
                                                        719306
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table_heading">Registration&nbsp;Date :</td>
                                                    <td class="grtydfbc">
                                                        31 Dec 2020
                                                    </td>
                                                    <td class="table_heading">Topup &nbsp;Date :</td>
                                                    <td class="grtydfbc">
                                                        31 Dec 2020
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table_heading">Status :</td>
                                                    <td class="grtydfbc">
                                                        Active
                                                    </td>
                                                    <td class="table_heading">Package Name :</td>
                                                    <td class="grtydfbc">
                                                        Gleba
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table_heading">Total Left :</td>
                                                    <td class="grtydfbc">
                                                        0
                                                    </td>
                                                    <td class="table_heading">Total Right :</td>
                                                    <td class="grtydfbc">
                                                        0
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table_heading">Total Left Active :</td>
                                                    <td class="grtydfbc">
                                                        0
                                                    </td>
                                                    <td class="table_heading">Total Right Active :</td>
                                                    <td class="grtydfbc">
                                                        0
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table_heading">Left Business :</td>
                                                    <td class="grtydfbc">
                                                        0
                                                    </td>
                                                    <td class="table_heading">Right Business :</td>
                                                    <td class="grtydfbc">
                                                        0
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table_heading">Package amount :</td>
                                                    <td class="grtydfbc">
                                                        2500
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="connecter1">
                                <img src="assets/img/tree/treeimg.png" style={{width: '480px' ,height: '33px'}}/>
                            </div>

                            <div class="tree_row">
                                <div class="row_2_child">
                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            <img src="assets/img/tree/tree_red.png" class="abc"width="40px" onclick="Image_Click()"/>
                                        </button>
                                        <div class="span">
                                            <br/> 
                                        </div>
                                        <div class="dropdown-content">
                                            <table class="tables" cellpadding="0px" cellspacing="0px">
                                                <tbody>
                                                    <tr class="fgtybmd" style={{display:'none'}}>
                                                        <td class="table_heading">Sponsor Name:</td>
                                                        <td colspan="3">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr class="fgtybmd">
                                                        <td class="table_heading">Sponsor :</td>
                                                        <td class="grtydfbc" colspan="3"> 
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Registration&nbsp;Date :</td>
                                                        <td class="grtydfbc"> 
                                                        </td>
                                                        <td class="table_heading">Topup &nbsp;Date :</td>
                                                        <td class="grtydfbc"> 
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Status :</td>
                                                        <td class="grtydfbc"> 
                                                        </td>
                                                        <td class="table_heading">Package Name: Gleba</td>
                                                        <td class="grtydfbc">  
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Left Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Right Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Package amount :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="row_2_child">
                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            
                                            <img src="assets/img/tree/tree_red.png" class="abc" width="40px"onclick="Image_Click()"/>
                                        </button>
                                      
                                        <div class="dropdown-content">
                                            <table class="tables" cellpadding="0px" cellspacing="0px">
                                                <tbody>
                                                    <tr class="fgtybmd" style={{display:'none'}}>
                                                        <td class="table_heading">Sponsor Name:</td>
                                                        <td colspan="3">
                                                            
                                                        </td>

                                                    </tr>
                                                    <tr class="fgtybmd">

                                                        <td class="table_heading">Sponsor :</td>
                                                        <td class="grtydfbc" colspan="3">
                                                            
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Registration&nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Topup &nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Status :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Package Name: Gleba</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Left Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Right Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Package amount :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tree_row" style={{height: '34px'}}>
                                <div class="row_2_child" style={{height: '34px'}}>
                                    <img src="assets/img/tree/treeimg1.png" style={{width: '253px', height: '32px'}}/>
                                </div>
                                <div class="row_2_child" style={{height: '34px'}}>
                                    <img src="assets/img/tree/treeimg1.png" style={{width: '253px', height: '32px'}}/>
                                </div>
                            </div>

                            <div class="tree_row">
                                <div class="row_3_child">
                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            
                                            <img src="assets/img/tree/tree_red.png" class="abc" width="40px"onclick="Image_Click()"/>
                                        </button>
                                       
                                        <div class="dropdown-content">
                                            <table class="tables" cellpadding="0px" cellspacing="0px">
                                                <tbody>
                                                    <tr class="fgtybmd" style={{display:'none'}}>
                                                        <td class="table_heading">Sponsor Name:</td>
                                                        <td colspan="3">
                                                            
                                                        </td>

                                                    </tr>
                                                    <tr class="fgtybmd">

                                                        <td class="table_heading">Sponsor :</td>
                                                        <td class="grtydfbc" colspan="3">
                                                            
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Registration&nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Topup &nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Status :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Package Name: Gleba</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Left Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Right Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Package amount :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="row_3_child">
                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            
                                            <img src="assets/img/tree/tree_black.png" width="40px" class="abc" onclick="Image_Click()"/>
                                        </button>
                                        {/* <!-- <div class="span">
                                            <br>
                                            
                                            
                                        </div> --> */}
                                        <div class="dropdown-content">
                                            <table class="tables" cellpadding="0px" cellspacing="0px">
                                                <tbody>
                                                    <tr class="fgtybmd" style={{display:'none'}}>
                                                        <td class="table_heading">Sponsor Name:</td>
                                                        <td colspan="3">
                                                            
                                                        </td>

                                                    </tr>
                                                    <tr class="fgtybmd">

                                                        <td class="table_heading">Sponsor :</td>
                                                        <td class="grtydfbc" colspan="3">
                                                            
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Registration&nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Topup &nbsp;Date :</td>
                                                      <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Status :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Package Name: Gleba</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Left Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Right Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Package amount :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="row_3_child">
                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            
                                            <img src="assets/img/tree/tree_black.png"width="40px" class="abc"onclick="Image_Click()"/>
                                        </button>
                                      
                                        <div class="dropdown-content">
                                            <table class="tables" cellpadding="0px" cellspacing="0px">
                                                <tbody>
                                                    <tr class="fgtybmd" style={{display:'none'}}>
                                                        <td class="table_heading">Sponsor Name:</td>
                                                        <td colspan="3">
                                                            
                                                        </td>

                                                    </tr>
                                                    <tr class="fgtybmd">

                                                        <td class="table_heading">Sponsor :</td>
                                                        <td class="grtydfbc" colspan="3">
                                                            
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Registration&nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Topup &nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Status :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Package Name: Gleba</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Left Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Right Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Package amount :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="row_3_child">
                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            
                                            <img src="assets/img/tree/tree_black.png" width="40px"class="abc" onclick="Image_Click()"/>
                                        </button>
                                       
                                        <div class="dropdown-content">
                                            <table class="tables" cellpadding="0px" cellspacing="0px">
                                                <tbody>
                                                    <tr class="fgtybmd" style={{display:'none'}}>
                                                        <td class="table_heading">Sponsor Name:</td>
                                                        <td colspan="3">
                                                            
                                                        </td>

                                                    </tr>
                                                    <tr class="fgtybmd">

                                                        <td class="table_heading">Sponsor :</td>
                                                        <td class="grtydfbc" colspan="3">
                                                            
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Registration&nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Topup &nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Status :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Package Name: Gleba</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Left Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Right Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Package amount :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tree_row" style={{height: '27px'}}>
                                <div class="row_3_child" style={{height: '27px'}}>
                                    <img src="assets/img/tree/treeimg2.png" style={{width: '129px', height: '27px'}}/>
                                </div>
                                <div class="row_3_child" style={{height: '27px'}}>
                                    <img src="assets/img/tree/treeimg2.png" style={{width: '129px', height: '27px'}}/>
                                </div>
                                <div class="row_3_child" style={{height: '27px'}}>
                                    <img src="assets/img/tree/treeimg2.png" style={{width: '129px', height: '27px'}}/>
                                </div>
                                <div class="row_3_child" style={{height: '27px'}}>
                                    <img src="assets/img/tree/treeimg2.png" style={{width: '129px', height: '27px'}}/>
                                </div>
                            </div>
                            <div class="tree_row">
                                <div class="row_4_child" >
                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            
                                            <img src="assets/img/tree/tree_black.png" width="40px"class="abc" onclick="Image_Click()"/>
                                        </button>
                                   
                                        <div class="dropdown-content">
                                            <table class="tables" cellpadding="0px" cellspacing="0px">
                                                <tbody>
                                                    <tr class="fgtybmd" style={{display:'none'}}>
                                                        <td class="table_heading">Sponsor Name:</td>
                                                        <td colspan="3">
                                                            
                                                        </td>

                                                    </tr>
                                                    <tr class="fgtybmd">

                                                        <td class="table_heading">Sponsor :</td>
                                                        <td class="grtydfbc" colspan="3">
                                                            
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Registration&nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Topup &nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Status :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Package Name: Gleba</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Left Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Right Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Package amount :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                                <div class="row_4_child">
                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            
                                            <img src="assets/img/tree/tree_black.png" width="40px"class="abc" onclick="Image_Click()"/>
                                        </button>
                                      
                                        <div class="dropdown-content">
                                            <table class="tables" cellpadding="0px" cellspacing="0px">
                                                <tbody>
                                                    <tr class="fgtybmd" style={{display:'none'}}>
                                                        <td class="table_heading">Sponsor Name:</td>
                                                        <td colspan="3">
                                                            
                                                        </td>

                                                    </tr>
                                                    <tr class="fgtybmd">

                                                        <td class="table_heading">Sponsor :</td>
                                                        <td class="grtydfbc" colspan="3">
                                                            
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Registration&nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Topup &nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Status :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Package Name: Gleba</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Left Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Right Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Package amount :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                                <div class="row_4_child" >
                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            
                                            <img src="assets/img/tree/tree_black.png"width="40px" class="abc"onclick="Image_Click()"/>
                                        </button>
                                        
                                        <div class="dropdown-content">
                                            <table class="tables" cellpadding="0px" cellspacing="0px">
                                                <tbody>
                                                    <tr class="fgtybmd" style={{display:'none'}}>
                                                        <td class="table_heading">Sponsor Name:</td>
                                                        <td colspan="3">
                                                            
                                                        </td>

                                                    </tr>
                                                    <tr class="fgtybmd">

                                                        <td class="table_heading">Sponsor :</td>
                                                        <td class="grtydfbc" colspan="3">
                                                            
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Registration&nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Topup &nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Status :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Package Name: Gleba</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Left Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Right Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Package amount :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                                <div class="row_4_child" >
                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            
                                            <img src="assets/img/tree/tree_black.png" width="40px"class="abc" onclick="Image_Click()"/>
                                        </button>
                                      
                                        <div class="dropdown-content">
                                            <table class="tables" cellpadding="0px" cellspacing="0px">
                                                <tbody>
                                                    <tr class="fgtybmd" style={{display:'none'}}>
                                                        <td class="table_heading">Sponsor Name:</td>
                                                        <td colspan="3">
                                                            
                                                        </td>

                                                    </tr>
                                                    <tr class="fgtybmd">

                                                        <td class="table_heading">Sponsor :</td>
                                                        <td class="grtydfbc" colspan="3">
                                                            
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Registration&nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Topup &nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Status :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Package Name: Gleba</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Left Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Right Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Package amount :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                                <div class="row_4_child">
                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            
                                            <img src="assets/img/tree/tree_black.png" width="40px"class="abc" onclick="Image_Click()"/>
                                        </button>
                                       
                                        <div class="dropdown-content">
                                            <table class="tables" cellpadding="0px" cellspacing="0px">
                                                <tbody>
                                                    <tr class="fgtybmd" style={{display:'none'}}>
                                                        <td class="table_heading">Sponsor Name:</td>
                                                        <td colspan="3">
                                                            
                                                        </td>

                                                    </tr>
                                                    <tr class="fgtybmd">

                                                        <td class="table_heading">Sponsor :</td>
                                                        <td class="grtydfbc" colspan="3">
                                                            
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Registration&nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Topup &nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Status :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Package Name: Gleba</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Left Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Right Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Package amount :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                                <div class="row_4_child">
                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            
                                            <img src="assets/img/tree/tree_black.png"width="40px" class="abc" onclick="Image_Click()"/>
                                        </button>
                                      
                                        <div class="dropdown-content">
                                            <table class="tables" cellpadding="0px" cellspacing="0px">
                                                <tbody>
                                                    <tr class="fgtybmd" style={{display:'none'}}>
                                                        <td class="table_heading">Sponsor Name:</td>
                                                        <td colspan="3">
                                                            
                                                        </td>

                                                    </tr>
                                                    <tr class="fgtybmd">

                                                        <td class="table_heading">Sponsor :</td>
                                                        <td class="grtydfbc" colspan="3">
                                                            
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Registration&nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Topup &nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Status :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Package Name: Gleba</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Left Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Right Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Package amount :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                                <div class="row_4_child">
                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            
                                            <img src="assets/img/tree/tree_black.png" width="40px"class="abc" onclick="Image_Click()"/>
                                        </button>
                                      
                                        <div class="dropdown-content">
                                            <table class="tables" cellpadding="0px" cellspacing="0px">
                                                <tbody>
                                                    <tr class="fgtybmd" style={{display:'none'}}>
                                                        <td class="table_heading">Sponsor Name:</td>
                                                        <td colspan="3">
                                                            
                                                        </td>

                                                    </tr>
                                                    <tr class="fgtybmd">

                                                        <td class="table_heading">Sponsor :</td>
                                                        <td class="grtydfbc" colspan="3">
                                                            
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Registration&nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Topup &nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Status :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Package Name: Gleba</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Left Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Right Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Package amount :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                                <div class="row_4_child">
                                    <div class="dropdown">
                                        <button class="dropbtn">
                                            
                                            <img src="assets/img/tree/tree_black.png" width="40px"class="abc" onclick="Image_Click()"/>
                                        </button>
                                       
                                        <div class="dropdown-content">
                                            <table class="tables" cellpadding="0px" cellspacing="0px">
                                                <tbody>
                                                    <tr class="fgtybmd" style={{display:'none'}}>
                                                        <td class="table_heading">Sponsor Name:</td>
                                                        <td colspan="3">
                                                            
                                                        </td>

                                                    </tr>
                                                    <tr class="fgtybmd">

                                                        <td class="table_heading">Sponsor :</td>
                                                        <td class="grtydfbc" colspan="3">
                                                            
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Registration&nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Topup &nbsp;Date :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Status :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Package Name: Gleba</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Total Left Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Total Right Active :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Left Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                        <td class="table_heading">Right Business :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="table_heading">Package amount :</td>
                                                        <td class="grtydfbc">
                                                            
                                                        </td>

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
            </div>
            {/* <!----Tree section end----> */}
        </div>
        {/* <!-- /Container --> */}
    </div>
      
    </div>
  )
}

export default Matchig_tree
