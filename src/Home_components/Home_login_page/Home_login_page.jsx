import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Components/Assets/logo.png"


function Home_login_page() {
  return (
    <div class="react_main_register">
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="react_layout">
            <div className="react_reg_box">
              <center
                style={{ marginBottom: "20px", marginTop: "5rem" }}
              ></center>
              <div class="reg-content">
                <div className="react_reg_img">
                  <img src={logo} alt="" class="reag_img" />
                </div>
                <div className="content_reg">
                  <div class="space_set react_space_set"></div>
                  <div class="react_subtitle">
                    Access your personal account
                  </div>
                  <span
                    id="metamaskConnection"
                    class="metamaskConnection react_wallet_text mb-3"
                    style={{ color: "red" }}
                  >
                    Wallet is not connected..!..Wait...
                  </span>
                  <br />
                  <button
                    class="btn btn-primary py_5 set_z_index react_button_register"
                    id="myBtn"
                  >
                  Authorized Login
                  </button>

                  <p class="note">
                    Remember to authorize with the correct Wallet address.
                  </p>
                  <div class="space_set"></div>
                  <div class="subtitle clr_white">View an Account</div>
                  <br />
                  <form>
                    <div class="form-row">
                      <input
                        id="loginid"
                        type="text"
                        maxlength="100"
                        oninput="return nameNumValidation(this);"
                        placeholder="Please enter ID or address "
                        class="form-input react_home_register"
                      />
                      <p class="note align_ment fs-3">
                      Enter the account id or wusdt address
                      </p>
                    </div>
                    <div class="form-row login_button">
                  <Link to='/main_draaa'>    <button
                        class="btn btn-primary py_5 set_z_index react_button_register login_button "
                        id="myBtn"
                      >
                        Login
                      </button>
                      </Link>

                      {/* <button type="button" class="btn   react_button_register" id="btnlogins" value="Connect to Wallet" onclick="idoraddresslogin()"> Connect to Wallet</button> */}
                    </div>
                  </form>
                  <p class="loginagain " style={{ color: "#ffffff" }}>
                  Don’t have an account?{" "}
                    <a href="login.html" style={{ color: "#fff" }}>
                    Register
                    </a>
                  </p>

                  <div class="footer-section2 copy_right_react ">
                  Copyright © 2022 wusdt.space . All Rights Reserved.   |  
                  </div>
                  <a href="#" class="got_home">
                  wusdt Smart Contract
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home_login_page
