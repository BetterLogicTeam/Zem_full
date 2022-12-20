import React from 'react'

function Login_page() {
  return (
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-5"></div>
                <div class="col-md-5">
                    <div id="root">
                        <div id="reg-layout">
                            <div class="Toastify"></div>
                            <div class="reg-box">
                                <center style={{marginBottom: '20px' ,marginTop:'5rem'}}>

                                </center>
                                <a href="index.html"><div class="reg-label"></div></a><br />

                                <div class="reg-content">
                                    <div class="subtitle">Access your personal account</div>
                                    <span id="lock" style={{display:'none'}}></span>
                                    <span id="metamaskConnection" style={{color:'red',fontWeight: '600',fontSize: '16px'}}>Wallet Link is not connected..!..Wait...</span><br />
                                    <br />
                                    <button class="btn btn-secondary" disabled id="vendor" onclick="authorizedlogin()">Authorized Login</button>
                                    <br />
                                    <br />
                                    <p class="note">Remember to authorize with the correct address.</p>
                                    <br />
                                    <div class="subtitle">View an Account</div><br />
                                    <form>
                                        <div class="form-row">
                                            <input id="loginid" type="text" maxlength="100" oninput="return nameNumValidation(this);" placeholder="Please enter ID or address " class="form-input"/>

                                            <p class="note">Enter the account id or wusdt address</p>
                                        </div>
                                        <div class="form-row">

                                            <input type="button" class="btn btn-secondary" id="btnlogin" value="Login"/>
                                        </div>
                                    </form>
                                    
                                    <p class="loginagain">Don’t have an account?<a href="register.html" style={{color:'#fff'}}>Register</a></p>
                                    <div class="footer-section2">
                                        Copyright © 2022  wusdt.space  . All Rights Reserved.&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;
                                        <a href="#" target="_blank" rel="noopener noreferrer" title="wusdt Smart Contract" style={{color:'#fff'}}>wusdt Smart Contract</a>
                                    </div>
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

export default Login_page
