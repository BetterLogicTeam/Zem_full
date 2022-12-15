import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./OffCanvas.css"
import logo from "../Assets/logo.png"
import Accordion from 'react-bootstrap/Accordion';
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi"

function OffCanvas({ show, name, ...props }) {
  const history = useNavigate()



  return (
    <div>

      <Offcanvas class='react_offcanvas' show={show}  {...props}>
        <Offcanvas.Header className='d-flex justify-content-center' >
          <Offcanvas.Title> <div className='title_canvas'> 
          <img src={logo} alt="" className='d-flex justify-content-center mx-auto w-50' /> </div></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

        <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header className="">
            <div class='d-flex align-items-center'><svg class="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
              <title>Home</title>
              <path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
              <path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
            </svg>
              <span class='acc_heading' >DashBoard</span>
            </div>
          </Accordion.Header>
          <Accordion.Body className=''  >
            <div className='' >

              <p class='acc_links' onClick={() => history('/')}>DashBoard</p>

            </div>

          </Accordion.Body>
        </Accordion.Item>
        <div>
          <h6 class='text-start mt-2 drawer_side_headding' >ACTIVATION</h6>
        </div>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="">
            <div class='d-flex align-items-center'>
              <svg class="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                <title>Activation</title>
                <rect x="64" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
                <rect x="216" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
                <rect x="368" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
                <rect x="64" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
                <rect x="216" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
                <rect x="368" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
                <rect x="64" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
                <rect x="216" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
                <rect x="368" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
              </svg>
              <span class='acc_heading' >Activation</span>       </div></Accordion.Header>
          <Accordion.Body className=''  >
            <div className='' >
              {/* <Link to='/activate'> */}
              <p class='acc_links' onClick={() => history('/activate')}>Activate/update</p>
              {/* </Link> */}
              {/* <p>Activate History</p> */}
              <p class='acc_links' onClick={() => history('/activate_history')}>Activate History</p>
            </div>

          </Accordion.Body>
        </Accordion.Item>
        <div>
          <h6 class='text-start mt-2 drawer_side_headding'>ALL INCOME</h6>
        </div>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="">
            <div class='d-flex align-items-center'>
              <svg class="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                <title> All Income</title>
                <circle cx="256" cy="184" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                <circle cx="344" cy="328" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                <circle cx="168" cy="328" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
              </svg>
              <span class='acc_heading' >ALL INCOME</span>           </div>
          </Accordion.Header>
          <Accordion.Body className=' ' >
            <div className='text-start' >
              {/* <p>  Direct Income </p> */}
              <p class='acc_links' onClick={() => history('/diect_icome')}>Direct Income</p>
              <p class='acc_links' onClick={() => history('/roi_icome')}>Roi Income</p>
              {/* <p onClick={() => history('/Reg_rewarad')}>Binary Income</p> */}
              <p class='acc_links' onClick={() => history('/rang_yield')}>Binary Level Income</p>
              <p class='acc_links' onClick={() => history('/refereal_rang_yield')}>Referal daliy yield</p>
              {/* <p onClick={() => history('/level_reward')}>Level Reward</p> */}
              {/* <p> Roi Income </p> */}
              {/* <p>   Binary Income </p> */}
              {/* <p>   Binary Level Income </p> */}
              {/* <p>   Pool Income </p> */}
            </div>

          </Accordion.Body>
        </Accordion.Item>
        <div>
          <h6 class='text-start mt-2 drawer_side_headding'>Withdrawal</h6>
        </div>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="">
            <div class='d-flex align-items-center'><svg class="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
              <title>Address</title>
              <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect>
              <path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
            </svg>
              <span class='acc_heading' >Withdrawal </span>              </div></Accordion.Header>
          <Accordion.Body className='' >
            <div className='' >
              {/* <p>Withdrawal </p> */}
              <p class='acc_links' onClick={() => history('/with_drawal')}>Registration Withdrawal</p>
              <p class='acc_links' onClick={() => history('/Registration_withDrawal_history')}>Registration Withdrawal <br /> History</p>
              <p class='acc_links' onClick={() => history('/withDrawal')}>Activation Withdrawal </p>
              <p class='acc_links' onClick={() => history('acc_withDrawal_history')}>Activation Withdrawal <br /> History</p>
              {/* <p>Withdrawal History</p> */}
            </div>

          </Accordion.Body>
        </Accordion.Item>
        <div>
          <h6 class='text-start mt-2 drawer_side_headding' >All Reward</h6>
        </div>
        <Accordion.Item eventKey="6">
          <Accordion.Header className="">
            <div class='d-flex align-items-center'>
              <svg class="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                <title> All Income</title>
                <circle cx="256" cy="184" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                <circle cx="344" cy="328" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                <circle cx="168" cy="328" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
              </svg>
              <span class='acc_heading' >ALL Reward</span>             </div></Accordion.Header>
          <Accordion.Body className='' >
            <div className='' >
              {/* <p>Registration Reward </p> */}
              <p class='acc_links' onClick={() => history('/Reg_rewarad')}>Registration Reward</p>
              <p class='acc_links' onClick={() => history('/Activation_reward')}>Activation Reward</p>
              <p class='acc_links' onClick={() => history('/Daliy_yield')}>Daily Yield</p>
              <p class='acc_links' onClick={() => history('/refferal_daliy_income')}>Refferal Daily yield <br /> Booster</p>
              <p class='acc_links' onClick={() => history('/level_reward')}>Level Reward</p>
              <p class='acc_links' onClick={() => history('/matching_reward')}>Matching Reward</p>
              <p class='acc_links' onClick={() => history('/dividend_reward')}>Dividend Reward</p>
              <p class='acc_links' onClick={() => history('/Rank_Achievers')}>Rank Achievers Yield</p>

              {/* <p>Activation Reward</p> */}
              {/* <p>Daily Yield</p> */}
              {/* <p>Refferal Daily yield Booster</p> */}
              {/* <p>Level Reward</p> */}
              {/* <p>Matching Reward</p> */}
              {/* <p>Dividend Reward</p> */}
              {/* <p>Rang Achievers Yield</p> */}
            </div>

          </Accordion.Body>
        </Accordion.Item>
        <div>
          <h6 class='text-start mt-2 drawer_side_headding'>TEAM DETAILS</h6>
        </div>
        <Accordion.Item eventKey="4">
          <Accordion.Header className="">
            <div class='d-flex align-items-center'><svg class="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
              <title> Team Details</title>
              <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M336 320H32L184 48l152 272zM265.32 194.51A144 144 0 11192 320"></path>
            </svg>
              <span class='acc_heading' >TEAM DETAILS  </span>        </div></Accordion.Header>
          <Accordion.Body className='' >
            <div className='' >
              {/* <p>My Refferal </p> */}
              <p class='acc_links' onClick={() => history('/My_Refferal')}>My Refferal</p>
              <p class='acc_links' onClick={() => history('/Direct_leg_business')}>Direct Leg Business</p>
              <p class='acc_links' onClick={() => history('/Level_details_team')}>Level Details</p>
              <p class='acc_links' onClick={() => history('/Matching_tree')}>Matching Tree</p>
              <p class='acc_links' onClick={() => history('/My_Team')}>My Team</p>

            </div>

          </Accordion.Body>
        </Accordion.Item>
        <div>
          <h6 class='text-start mt-2 drawer_side_headding' >Address</h6>
        </div>
        <Accordion.Item eventKey="5">
          <Accordion.Header className="">
            <div class='d-flex align-items-center'><svg class="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
              <title>Address</title>
              <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect>
              <path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
            </svg>
              <span class='acc_heading' >Adress </span>
            </div></Accordion.Header>
          <Accordion.Body className=''  >
            <div className='' >
              {/* <p>Self Address </p> */}
              <p class='acc_links' onClick={() => history('/self_adress')}>Self Address</p>
              <p class='acc_links' onClick={() => history('/contract_adress')}>Contract Address</p>
              {/* <p>Contract Address</p> */}
            </div>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

          

        </Offcanvas.Body>
      </Offcanvas>



   






         {/* <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header className="">
                <div class='d-flex align-items-center'><svg class="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                  <title>Home</title>
                  <path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
                  <path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
                </svg>
                  <span className='text-white' >DashBoard</span>
                </div>
              </Accordion.Header>
              <Accordion.Body className='kk'>
                <div className='kk'>
                  <p className='text-clr'>DashBoard</p>

                </div>

              </Accordion.Body>
            </Accordion.Item>
            <div>
              <h6 class='text-start mt-2 drawer_side_headding'>ACTIVATION</h6>
            </div>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="kk">
                <div class='d-flex align-items-center'>
                  <svg class="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
              
                    <rect x="64" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
                    <rect x="216" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
                    <rect x="368" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
                    <rect x="64" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
                    <rect x="216" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
                    <rect x="368" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
                    <rect x="64" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
                    <rect x="216" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
                    <rect x="368" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></rect>
                  </svg>
                  <span >Activation</span>       </div></Accordion.Header>
              <Accordion.Body className='kk'>
                <div className='kk'>
                  <div > <p>Activate/update</p> </div>
                  <p>Activate History</p>
                </div>

              </Accordion.Body>
            </Accordion.Item>
            <div>
              <h6 class='text-start mt-2 drawer_side_headding' >ALL INCOME</h6>
            </div>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="">
                <div class='d-flex align-items-center'><svg class="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                  <title> All Income</title>
                  <circle cx="256" cy="184" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                  <circle cx="344" cy="328" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                  <circle cx="168" cy="328" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                </svg>
                  <span >ALL INCOME</span>           </div></Accordion.Header>
              <Accordion.Body className=''>
                <div className='text-start'>
                  <p>  Direct Income </p>
                  <p> Roi Income </p>
                  <p>   Binary Income </p>
                  <p>   Binary Level Income </p>
                  <p>   Pool Income </p>
                </div>

              </Accordion.Body>
            </Accordion.Item>
            <div>
              <h6 class='text-start mt-2 drawer_side_headding' >Withdrawal</h6>
            </div>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="">
                <div class='d-flex align-items-center'><svg class="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                  <title>Address</title>
                  <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect>
                  <path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
                </svg>
                  <span >Withdrawal </span>              </div></Accordion.Header>
              <Accordion.Body className=''>
                <div className=''>
                  <p>Withdrawal </p>
                  <p>Withdrawal History</p>
                </div>

              </Accordion.Body>
            </Accordion.Item>
            <div>
              <h6 class='text-start mt-2 drawer_side_headding'>TEAM DETAILS</h6>
            </div>
            <Accordion.Item eventKey="4">
              <Accordion.Header className="">
                <div class='d-flex align-items-center'><svg class="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                  <title> Team Details</title>
                  <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M336 320H32L184 48l152 272zM265.32 194.51A144 144 0 11192 320"></path>
                </svg>
                  <span >TEAM DETAILS  </span>        </div></Accordion.Header>
              <Accordion.Body className=''>
                <div className=''>
                  <p>My Refferal </p>
                  <p>Level Details</p>
                  <p>Direct Leg Business</p>
                  <p>Matching Tree</p>
                  <p>My Team</p>
                </div>

              </Accordion.Body>
            </Accordion.Item>
            <div>
              <h6 class='text-start mt-2 drawer_side_headding'>Address</h6>
            </div>
            <Accordion.Item eventKey="5">
              <Accordion.Header className="">
                <div class='d-flex align-items-center'><svg class="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                  <title>Address</title>
                  <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect>
                  <path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
                </svg>
                  <span >Adress </span>
                </div></Accordion.Header>
              <Accordion.Body className=''>
                <div className='' >
                  <p>Self Address </p>
                  <p>Contract Address</p>
                </div>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */}
    </div>
  )
}

export default OffCanvas
