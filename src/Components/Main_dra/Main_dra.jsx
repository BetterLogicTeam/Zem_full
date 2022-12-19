import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Home_dash from '../Home_dash/Home_dash';
import Accordion from 'react-bootstrap/Accordion';
import "./Main_dra.css"
import { TbArrowsRightLeft } from 'react-icons/tb';
import { AiOutlineHome } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'
import { TbCircles } from 'react-icons/tb'
import { RxCopy } from 'react-icons/rx'
import logo from "../Assets/logo.png"
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import Active from '../Active/Active';
import Activate_history from '../Activate_history/Activate_history';
import Roi_income from '../Roi_income/Roi_income';
import Registration_reward from '../Registration_reward/Registration_reward';
import Level_details from '../Level_details/Level_details';
import Activation_reward from "../Activation_reward/Activation_reward"
import { AiOutlineMenuFold } from 'react-icons/ai'
import { GiTireIronCross } from 'react-icons/gi'
import OffCanvas from '../OffCanvas/OffCanvas';
import Reward_income from "../Reward_income/Reward_income"
import Matching_income from "../Matching_income/Matching_income"
import Dividend from "../Dividend/Dividend"
import Rank_yield from "../Rank_yield/Rank_yield"
import Withdrawal_activation from "../Withdrawal_activation/Withdrawal_activation"
import Registration_level_income from '../Registration_level_icome/Registration_level_income';
import WithDrawal_history from '../WithDrawal_history/WithDrawal_history';
import WithDrawal from '../WithDrawal/WithDrawal';
import Reg_history from '../Reg_history/Reg_history';
import My_refferal from '../My_refferal/My_refferal';
import Direct_leg from '../Direct_leg/Direct_leg';

import Direct_icome from '../Direct_income/Direct_icome';
import Matchig_tree from "../Matching_tree/Matchig_tree"
import My_team from "../My_team/My_team"
import Nft_adress from "../Nft_adress/Nft_adress"
import Self_adress from "../Self_adress/Self_adress"
import Offcanvas from 'react-bootstrap/Offcanvas';
import Daily_yield from "../Daily_yield/Daily_yield"
import Refferal_bonus from '../Refferal_bonus/Refferal_bonus';
import Network_bonus from '../Network_bonus/Network_bonus';
import Level_network_bonus from '../Level_network_bonus/Level_network_bonus';
import Matrix_residual_1 from '../Matrix_residual_1/Matrix_residual_1';
import Matrix_residual_2 from '../Matrix_residual_2/Matrix_residual_2';
import Weekly_yield from '../Weekly_yield/Weekly_yield';

// import logo from "./"

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(10)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function Main_dra({ ...props }) {
  const history = useNavigate()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ display: 'flex' }} >
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"

              edge="end"
              sx={{
                marginRight: 1,
                // ...(open && { display: 'none' }),
              }}
            >
              <div className='d-flex justify-content-start img_full ' >
                <img src={logo} className='logo_header ' alt="" style={{ display: open ? "none" : "block" }} />
              </div>
              <div className='fullscreen'>
                {

                  open ? <GiTireIronCross className='Menu_icons' onClick={() => handleDrawerClose()} /> : <AiOutlineMenuFold className='Menu_icons' style={{ marginLeft: "-3rem" }} onClick={() => handleDrawerOpen()} />
                }


              </div>
              <div className='smallScreen'>
                {
                  show ? <GiTireIronCross className='Menu_icons' onClick={handleClose} /> : <AiOutlineMenuFold className='Menu_icons' onClick={handleShow} />
                }
             

                    {/* Mobile view offcanvas starts here which is used for navigation */}


                <Offcanvas className='react_offcanvas' show={show}  {...props}>
                  <Offcanvas.Header className='d-flex justify-content-center' >
                    <Offcanvas.Title> <div className='title_canvas'>
                    </div></Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>

                    <Accordion >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header className="">
                          <div className='d-flex align-items-center'><svg className="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                            <title>Home</title>
                            <path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
                            <path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
                          </svg>
                            <span className='acc_heading' >DashBoard</span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className=''  >
                          <div className='' >

                            <p  className='acc_links' onClick={() => {history('/');handleClose()}} >DashBoard</p>

                          </div>

                        </Accordion.Body>
                      </Accordion.Item>
                      <div>
                        <h6 className='text-start mt-2 drawer_side_headding' >ACTIVATION</h6>
                      </div>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header className="">
                          <div className='d-flex align-items-center'>
                            <svg className="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
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
                            <span className='acc_heading' >Activation</span>       </div></Accordion.Header>
                        <Accordion.Body className=''  >
                          <div className='' >

                            <p className='acc_links' onClick={() => {history('/activate');handleClose()}}>Activate/update</p>


                            <p className='acc_links' onClick={() => {history('/activate_history');handleClose()}}>Activate History</p>
                          </div>

                        </Accordion.Body>
                      </Accordion.Item>
                      <div>
                        <h6 className='text-start mt-2 drawer_side_headding'>ALL INCOME</h6>
                      </div>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header className="">
                          <div className='d-flex align-items-center'>
                            <svg className="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                              <title> All Income</title>
                              <circle cx="256" cy="184" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                              <circle cx="344" cy="328" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                              <circle cx="168" cy="328" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                            </svg>
                            <span className='acc_heading' >ALL INCOME</span>           </div>
                        </Accordion.Header>
                        <Accordion.Body className=' ' >
                          <div className='text-start' >

                            <p className='acc_links' onClick={() => {history('/diect_icome');handleClose()}}>Direct Income</p>
                            <p className='acc_links' onClick={() => {history('/roi_icome');handleClose()}}>Roi Income</p>
                            <p className='acc_links' onClick={() => {history('/refferal_bonus');handleClose()}}>Referral Bonus </p>
                  <p className='acc_links' onClick={() => {history('/network_bonus');handleClose()}}>Network Bonus </p>
                  <p className='acc_links' onClick={() => {history('/level_network_bonus');handleClose()}}>Level Network Bonus </p>
                  <p className='acc_links' onClick={() => {history('/matrix_residuals_1');handleClose()}}>Matrix Residuals 1</p>
                  <p className='acc_links' onClick={() => {history('/matrix_residuals_2');handleClose()}}>Matrix Residuals 2</p>
                  <p className='acc_links' onClick={() => {history('/Weekly_yield');handleClose()}}>Weekly Yield</p>
                          

                          </div>

                        </Accordion.Body>
                      </Accordion.Item>
                      <div>
                        <h6 className='text-start mt-2 drawer_side_headding'>Withdrawal</h6>
                      </div>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header className="">
                          <div className='d-flex align-items-center'><svg className="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                            <title>Address</title>
                            <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect>
                            <path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
                          </svg>
                            <span className='acc_heading' >Withdrawal </span>              </div></Accordion.Header>
                        <Accordion.Body className='' >
                          <div className='' >

                            <p className='acc_links' onClick={() => {history('/with_drawal');handleClose()}}> Withdrawal</p>
                            <p className='acc_links' onClick={() => {history('/Registration_withDrawal_history');handleClose()}}>Registration Withdrawal <br /> History</p>
                            <p className='acc_links' onClick={() => {history('/withDrawal');handleClose()}}>Activation Withdrawal </p>
                            <p className='acc_links' onClick={() => {history('acc_withDrawal_history');handleClose()}}>Activation Withdrawal <br /> History</p>

                          </div>

                        </Accordion.Body>
                      </Accordion.Item>
                      <div>
                        <h6 className='text-start mt-2 drawer_side_headding' >All Reward</h6>
                      </div>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header className="">
                          <div className='d-flex align-items-center'>
                            <svg className="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                              <title> All Income</title>
                              <circle cx="256" cy="184" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                              <circle cx="344" cy="328" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                              <circle cx="168" cy="328" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                            </svg>
                            <span className='acc_heading' >ALL Reward</span>             </div></Accordion.Header>
                        <Accordion.Body className='' >
                          <div className='' >

                            <p className='acc_links' onClick={() => {history('/Reg_rewarad');handleClose()}}>Registration Reward</p>
                            <p className='acc_links' onClick={() => {history('/Activation_reward');handleClose()}}>Activation Reward</p>
                            <p className='acc_links' onClick={() => {history('/Daliy_yield');handleClose()}}>Daily Yield</p>
                            <p className='acc_links' onClick={() => {history('/refferal_daliy_income');handleClose()}}>Refferal Daily yield <br /> Booster</p>
                            <p className='acc_links' onClick={() => {history('/level_reward');handleClose()}}>Level Reward</p>
                            <p className='acc_links' onClick={() => {history('/matching_reward');handleClose()}}>Matching Reward</p>
                            <p className='acc_links' onClick={() => {history('/dividend_reward');handleClose()}}>Dividend Reward</p>
                            <p className='acc_links' onClick={() => {history('/Rank_Achievers');handleClose()}}>Rank Achievers Yield</p>


                          </div>

                        </Accordion.Body>
                      </Accordion.Item>
                      <div>
                        <h6 className='text-start mt-2 drawer_side_headding'>TEAM DETAILS</h6>
                      </div>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header className="">
                          <div className='d-flex align-items-center'><svg className="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                            <title> Team Details</title>
                            <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M336 320H32L184 48l152 272zM265.32 194.51A144 144 0 11192 320"></path>
                          </svg>
                            <span className='acc_heading' >TEAM DETAILS  </span>        </div></Accordion.Header>
                        <Accordion.Body className='' >
                          <div className='' >

                            <p className='acc_links' onClick={() => {history('/My_Refferal');handleClose()}}>My Refferal</p>
                            <p className='acc_links' onClick={() => {history('/Direct_leg_business');handleClose()}}>Direct Leg Business</p>
                            <p className='acc_links' onClick={() => {history('/Level_details_team');handleClose()}}>Level Details</p>
                            <p className='acc_links' onClick={() => {history('/Matching_tree');handleClose()}}>Network View</p>
                            <p className='acc_links' onClick={() => {history('/My_Team');handleClose()}}>My Team</p>

                          </div>

                        </Accordion.Body>
                      </Accordion.Item>
                      <div>
                        <h6 className='text-start mt-2 drawer_side_headding' >Address</h6>
                      </div>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header className="">
                          <div className='d-flex align-items-center'><svg className="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                            <title>Address</title>
                            <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect>
                            <path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
                          </svg>
                            <span className='acc_heading' >Adress </span>
                          </div></Accordion.Header>
                        <Accordion.Body className=''  >
                          <div className='' >

                            <p className='acc_links' onClick={() => {history('/self_adress');handleClose()}}>Self Address</p>
                            <p className='acc_links' onClick={() => {history('/contract_adress');handleClose()}}>Contract Address</p>

                          </div>

                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>



                  </Offcanvas.Body>
                </Offcanvas>
                

                       {/* Mobile view offcanvas ends here which is used for navigation  */}


              </div>

            </IconButton>
            <Typography variant="h6" noWrap component="div">

            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} className="fullscreen">
          <DrawerHeader>
            <div className='d-flex justify-content-start'>
              <img src={logo} className='logo_header' alt="" />
            </div>
            
          </DrawerHeader>
          <Divider />
          <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header className="">
                <div className='d-flex align-items-center'>
                  <title>Home</title>
                  <svg className="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                  <path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
                  <path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
                </svg>
                  <span className='acc_heading' style={{ display: !open ? "none" : "block" }}>DashBoard</span>
                </div>
              </Accordion.Header>
              <Accordion.Body className='' style={{ display: !open ? 'none' : 'block' }}>
                <div className='' onClick={handleDrawerOpen}>

                  <p className='acc_links' onClick={() => history('/')}>DashBoard</p>

                </div>

              </Accordion.Body>
            </Accordion.Item>
            <div>
              <h6 className='text-start mt-2 drawer_side_headding' style={{ display: !open ? 'none' : 'block' }}>ACTIVATION</h6>
            </div>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="">
                <div className='d-flex align-items-center'>
                  <svg className="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
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
                  <span className='acc_heading' style={{ display: !open ? "none" : "block" }}>Activation</span>       </div></Accordion.Header>
              <Accordion.Body className='' style={{ display: !open ? 'none' : 'block' }}>
                <div className='' onClick={handleDrawerOpen}>
            
                  <p className='acc_links' onClick={() => history('/activate')}>Activate/update</p>
                
                  <p className='acc_links' onClick={() => history('/activate_history')}>Activate History</p>
                </div>

              </Accordion.Body>
            </Accordion.Item>
            <div>
              <h6 className='text-start mt-2 drawer_side_headding' style={{ display: !open ? 'none' : 'block' }}>ALL INCOME</h6>
            </div>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="">
                <div className='d-flex align-items-center'>
                  <svg className="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                    <title> All Income</title>
                    <circle cx="256" cy="184" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                    <circle cx="344" cy="328" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                    <circle cx="168" cy="328" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                  </svg>
                  <span className='acc_heading' style={{ display: !open ? "none" : "block" }}>ALL INCOME</span>           </div>
              </Accordion.Header>
              <Accordion.Body className=' ' style={{ display: !open ? 'none' : 'block' }}>
                <div className='text-start' onClick={handleDrawerOpen}>
                
                  <p className='acc_links' onClick={() => history('/diect_icome')}>Direct Income</p>
                  <p className='acc_links' onClick={() => history('/roi_icome')}>Roi Income</p>
                  <p className='acc_links' onClick={() => history('/refferal_bonus')}>Referral Bonus </p>
                  <p className='acc_links' onClick={() => history('/network_bonus')}>Network Bonus </p>
                  <p className='acc_links' onClick={() => history('/level_network_bonus')}>Level Network Bonus </p>
                  <p className='acc_links' onClick={() => history('/matrix_residuals_1')}>Matrix Residuals 1</p>
                  <p className='acc_links' onClick={() => history('/matrix_residuals_2')}>Matrix Residuals 2</p>
                  <p className='acc_links' onClick={() => history('/Weekly_yield')}>Weekly Yield</p>
                
                </div>

              </Accordion.Body>
            </Accordion.Item>
            <div>
              <h6 className='text-start mt-2 drawer_side_headding' style={{ display: !open ? 'none' : 'block' }}>Withdrawal</h6>
            </div>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="">
                <div className='d-flex align-items-center'><svg className="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                  <title>Address</title>
                  <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect>
                  <path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
                </svg>
                  <span className='acc_heading' style={{ display: !open ? "none" : "block" }}>Withdrawal </span>              </div></Accordion.Header>
              <Accordion.Body className='' style={{ display: !open ? 'none' : 'block' }} >
                <div className='' onClick={handleDrawerOpen}>
               
                  <p className='acc_links' onClick={() => history('/with_drawal')}> Withdrawal</p>
                  <p className='acc_links' onClick={() => history('/Registration_withDrawal_history')}>Registration Withdrawal <br /> History</p>
                  <p className='acc_links' onClick={() => history('/withDrawal')}>Activation Withdrawal </p>
                  <p className='acc_links' onClick={() => history('acc_withDrawal_history')}>Activation Withdrawal <br /> History</p>
                 
                </div>

              </Accordion.Body>
            </Accordion.Item>
            <div>
              <h6 className='text-start mt-2 drawer_side_headding' style={{ display: !open ? 'none' : 'block' }}>All Reward</h6>
            </div>
            <Accordion.Item eventKey="6">
              <Accordion.Header className="">
                <div className='d-flex align-items-center'>
                  <svg className="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                    <title> All Income</title>
                    <circle cx="256" cy="184" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                    <circle cx="344" cy="328" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                    <circle cx="168" cy="328" r="120" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></circle>
                  </svg>
                  <span className='acc_heading' style={{ display: !open ? "none" : "block" }}>ALL Reward</span>             </div></Accordion.Header>
              <Accordion.Body className='' style={{ display: !open ? 'none' : 'block' }}>
                <div className='' onClick={handleDrawerOpen}>
                
                  <p className='acc_links' onClick={() => history('/Reg_rewarad')}>Registration Reward</p>
                  <p className='acc_links' onClick={() => history('/Activation_reward')}>Activation Reward</p>
                  <p className='acc_links' onClick={() => history('/Daliy_yield')}>Daily Yield</p>
                  <p className='acc_links' onClick={() => history('/refferal_daliy_income')}>Refferal Daily yield <br /> Booster</p>
                  <p className='acc_links' onClick={() => history('/level_reward')}>Level Reward</p>
                  <p className='acc_links' onClick={() => history('/matching_reward')}>Matching Reward</p>
                  <p className='acc_links' onClick={() => history('/dividend_reward')}>Dividend Reward</p>
                  <p className='acc_links' onClick={() => history('/Rank_Achievers')}>Rank Achievers Yield</p>

                 
                </div>

              </Accordion.Body>
            </Accordion.Item>
            <div>
              <h6 className='text-start mt-2 drawer_side_headding' style={{ display: !open ? 'none' : 'block' }}>TEAM DETAILS</h6>
            </div>
            <Accordion.Item eventKey="4">
              <Accordion.Header className="">
                <div className='d-flex align-items-center'><svg className="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                  <title> Team Details</title>
                  <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M336 320H32L184 48l152 272zM265.32 194.51A144 144 0 11192 320"></path>
                </svg>
                  <span className='acc_heading' style={{ display: !open ? "none" : "block" }}>TEAM DETAILS  </span>        </div></Accordion.Header>
              <Accordion.Body className='' style={{ display: !open ? 'none' : 'block' }}>
                <div className='' onClick={handleDrawerOpen}>
            
                  <p className='acc_links' onClick={() => history('/My_Refferal')}>My Refferal</p>
                  <p className='acc_links' onClick={() => history('/Direct_leg_business')}>Direct Leg Business</p>
                  <p className='acc_links' onClick={() => history('/Level_details_team')}>Level Details</p>
                  <p className='acc_links' onClick={() => history('/Matching_tree')}>Network View</p>
                  <p className='acc_links' onClick={() => history('/My_Team')}>My Team</p>

                </div>

              </Accordion.Body>
            </Accordion.Item>
            <div>
              <h6 className='text-start mt-2 drawer_side_headding' style={{ display: !open ? 'none' : 'block' }}>Address</h6>
            </div>
            <Accordion.Item eventKey="5">
              <Accordion.Header className="">
                <div className='d-flex align-items-center'><svg className="ionicon side-menu__icon me-2" viewBox="0 0 512 512">
                  <title>Address</title>
                  <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect>
                  <path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>
                </svg>
                  <span className='acc_heading' style={{ display: !open ? "none" : "block" }}>Adress </span>
                </div></Accordion.Header>
              <Accordion.Body className='' style={{ display: !open ? 'none' : 'block' }}>
                <div className='' onClick={handleDrawerOpen}>
                
                  <p className='acc_links' onClick={() => history('/self_adress')}>Self Address</p>
                  <p className='acc_links' onClick={() => history('/contract_adress')}>Contract Address</p>
                
                </div>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Drawer>

        <Box component="" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
         

          <Routes>
            <Route exact path="/" element={<Home_dash />} />
            <Route exact path="/activate" element={< Active />} />
            <Route exact path="/activate_history" element={< Activate_history />} />
            <Route exact path="/diect_icome" element={< Direct_icome />} />
            <Route exact path="/roi_icome" element={< Roi_income />} />
            <Route exact path="/Daliy_yield" element={< Daily_yield />} />
            <Route exact path="/Reg_rewarad" element={< Registration_reward />} />
            <Route exact path="/rang_yield" element={< Rank_yield />} />
            <Route exact path="/refereal_rang_yield" element={< Rank_yield />} />
        
            <Route exact path="/Activation_reward" element={< Activation_reward />} />
            <Route exact path="/refferal_daliy_income" element={< Reward_income />} />
            <Route exact path="/level_reward" element={< Registration_level_income />} />
            <Route exact path="/matching_reward" element={< Matching_income />} />
            <Route exact path="/dividend_reward" element={< Dividend />} />
            <Route exact path="/Rank_Achievers" element={< Rank_yield />} />
            <Route exact path="/withDrawal" element={< Withdrawal_activation />} />
            <Route exact path="/Registration_withDrawal_history" element={< WithDrawal_history />} />
            <Route exact path="/with_drawal" element={< WithDrawal />} />
            <Route exact path="/acc_withDrawal_history" element={<Reg_history />} />
            <Route exact path="/My_Refferal" element={<My_refferal />} />
            <Route exact path="/Direct_leg_business" element={<Direct_leg />} />
            <Route exact path="/Level_details_team" element={<Level_details />} />
            <Route exact path="/Matching_tree" element={<Matchig_tree />} />
            <Route exact path="/My_Team" element={<My_team />} />
            <Route exact path="/contract_adress" element={<Nft_adress />} />
            <Route exact path="/self_adress" element={<Self_adress />} />
            <Route exact path="/refferal_bonus" element={<Refferal_bonus />} />
            <Route exact path="/network_bonus" element={<Network_bonus />} />
            <Route exact path="/level_network_bonus" element={<Level_network_bonus />} />
            <Route exact path="/matrix_residuals_1" element={<Matrix_residual_1 />} />
            <Route exact path="/matrix_residuals_2" element={<Matrix_residual_2 />} />
            <Route exact path="/weekly_Yield" element={<Weekly_yield />} />
        
          </Routes>
         
        </Box>
      </Box>
    </div>
  )
}

export default Main_dra
