import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import logo from "../../Components/Assets/logo.png"


function Home_landing() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);
    const [show13, setShow13] = useState(false);
    const [show14, setShow14] = useState(false);
    const [show15, setShow15] = useState(false);
    const [show16, setShow16] = useState(false);
    const [show17, setShow17] = useState(false);
    const [show18, setShow18] = useState(false);
    const [show19, setShow19] = useState(false);
    const [show20, setShow20] = useState(false);
    return (
    <div>
         <div class="page__wrapper">
        <header class="header" id="top">
            <div class="container">
                <div class="header__top">
                    <div class="header__top-text">
                        <p class="text text--fz-18 text--fw-700 text--lh-auto text--uppercase text--center color-gradient">
                            wusdt.space HAS OFFICIALLY LAUNCHED
                        </p>
                    </div>
                </div>
            </div>
            <div class="header__body">
                <div class="nav2 container">
                    <div class="nav-header">
                        <div class="nav-title">
                           <div class=' react_logo header__logo'> {/* <a href="/" class="logo header__logo"> */}
                                {/* <img src="HomeAssets/img/logo.png" /> */}
                            <img src={logo} alt="" />
                            {/* </a> */}
                            </div>
                        </div>
                        <div class="nav-btn">
                            <label for="nav-check">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </div>
                        <input type="checkbox" name="" id="nav-check"/>
                        <div class="nav-links">
                            <ul class="menu nav__menu">
                                <li>
                                    <a href="#about" data-href="#about">
                                        <span>About</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#features" data-href="#features">
                                        <span>Features</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="HomeAssets/wusdt.pdf" data-href="#plans">
                                        <span>Plan</span>
                                    </a>
                                </li>
                              <Link to='/main_draaa'  class='main_draa_link'>  <li>
                                    <a href="#faq" data-href="#faq">
                                        <span>Faq</span>
                                    </a>
                                </li>
                                </Link>

                            <Link to ='/home_login_page ' class='main_login_link'>    <li class="header__btns"> 
                                     <a class="header__btn button button--bordered-light" href="login.html">Login</a>
                                </li>
                                </Link>
                                <li class="header__btns">
                               <Link to ='/home_register'>     <a class="header__btn button" href="register.html">Register</a> </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

        </header>
        <div class="body-content">

         <main class="main page__main">
                <div class="hero">
                    <div class="container">
                        <div class="hero__info">
                            <h2 class="title title--fz-50 title--dots title--uppercase title--center mb-lg-15 mb-xl-20 mb-30">WUSDT.SPACE</h2>
                            <b class='fw-bold text-white fs-2'>The Upcoming Newly Launched Project coming soon - wusdt.space on 1st week of Dec. 2022 </b>
                            <p class="text text--fz-20 text--center color-periwinkle-070 hero__text mb-lg-25 mb-xl-30 mb-40">
                                Information about this Project WUSDT stable-coins With USDT regular return Investments Have Never Been This Simple Bridge-in-out  With just one click, get WUSDT with USDTs Multi-chains stable cryptocurrency.
                                Receive weekly profits of up to 2% to 3% on your crypto assets to expand your portfolio.
                                Powered by data from the workds 1st wrapped blockchain- WYChain WUSDT.SPACE is a platform for the financing of the future.
                            </p>
                            <div class="hero__box">
                                <div class="hero__box-wrapper">
                                    <div class="hero__box-inner">
                                        <div class="hero__box-inner-bg">
                                            <div class="hero__box-inner-bg-circles"></div>
                                        </div>
                                        {/* <!-- <p class="text text--fz-24 text--center mb-lg-15 mb-xl-20 mb-25 color-dodger-blue-light">Make 2 x 2 Matrix - 200 Days</p> --> */}
                                        <div class="hero__box-group">
                                            <div class="hero__box-group-text">
                                                <p class="text text--fz-20 text--center">400% Total Income</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="button hero__btn" href="HomeAssets/wusdt.pdf">GET STARTED NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hero__circles">
                        <div class="container"></div>
                    </div>
                </div>

                <section class="section about" id="about">
                    <div class="container">
                        <div class="box box--no-top">
                            <div class="box__wrapper">
                                <div class="box__wrapper-top"></div>
                                <div class="box__wrapper-bottom"></div>
                                <div class="box__inner">
                                    <div class="box__inner-top"></div>
                                    <div class="box__inner-bottom"></div>
                                    <div class="box__inner-bg">
                                        <div class="box__inner-circles"></div>
                                    </div>
                                    <div class="about__row">
                                        <div class="about__left">
                                            <h2 class="title title--fz-42 text-start title--dots mb-lg-15 mb-xl-20 mb-30">About WUSDT.SPACE</h2>
                                            <div class="content about__content text text--fz-18 text--justify text--lh-170 color-periwinkle-070 mb-xl-20 mb-30">
                                                <p style={{color:'#bbcdffb3'}}>
                                                    Information about this Project WUSDT stable-coins With USDT regular return Investments Have Never Been This Simple
                                                    Bridge-in-out With just one click, get WUSDT with USDTs Multi-chains stable cryptocurrency. Receive weekly profits
                                                    of up to 2% to 3% on your crypto assets to expand your portfolio. Powered by data from the workds 1st wrapped
                                                    blockchain- WYChain WUSDT.SPACE is a platform for the financing of the future.
                                                </p>
                                            </div>

                                        </div>
                                        <div class="about__right">
                                            <div class="content about__content text text--fz-18 text--justify text--lh-170 color-periwinkle-070">
                                                <p style={{color:'#bbcdffb3'}}>
                                                    Trading is not an easy task. Only a few can give results and provide a long-term project.
                                                    We believe we have what it takes to be leaders in this field and provide the best results within a sustainable platform.
                                                </p>
                                                <p style={{color:'#bbcdffb3'}}>
                                                    We can say, with confidence, that a 1.5% per day return is feasible. Not only that, we can make much more than 1.5%
                                                    in just a few minutes. Risk management is the key to keep doing what we do without losing a significant amount of funds.
                                                    That's why our team has the skills to keep the trades always under control. We also care about the safety of funds and
                                                    the security of the platform. Therefore, WUSDT.SPACE has a hardware cold wallet and the latest security applications.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section__circles">
                        <div class="container"></div>
                    </div>
                </section>

                <section class="section features" id="features">
                    <div class="container">
                        <div class="section__top">
                            <h2 class="title title--fz-42 title--dots section__title">Features</h2>
                            <p class="title title--fz-30 color-dodger-blue-light section__subtext">WUSDT.SPACE Main key features</p>
                        </div>
                        <div class="features__list">
                            <div class="features__item">
                                <div class="features-item">
                                    <div class="features-item__icon">
                                        <div class="features-item__icon-box">
                                            {/* <svg class="icon">
                                                <use xlink:href="HomeAssets/img/sprite.svg"></use>
                                            </svg> */}
                                        </div>
                                        <div class="features-item__line"></div>
                                    </div>
                                    <div class="features-item__info">
                                        <p class="text text--fz-18 text--lh-170 text--fw-600 mb-10">Professional Traders</p>
                                        <div class="content color-periwinkle-070 features-item__content text text--justify">
                                            <p style={{color:'#bbcdffb3'}} class='home_page_text' >
                                                Our traders work every day. All trades are processed manually to avoid any sudden changes on the market that may
                                                cause us
                                                losses while using bots. They are dedicated committed, professional, and skillful.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="features__item">
                                <div class="features-item">
                                    <div class="features-item__icon">
                                        <div class="features-item__icon-box">
                                            {/* <svg class="icon">
                                                <use xlink:href="HomeAssets/img/sprite.svg"></use>
                                            </svg> */}
                                        </div>
                                        <div class="features-item__line"></div>
                                    </div>
                                    <div class="features-item__info">
                                        <p class="text text--fz-18 text--lh-170 text--fw-600 mb-10">Earn 7 days a week</p>
                                        <div class="content color-periwinkle-070 features-item__content text text--justify">
                                            <p style={{color:'#bbcdffb3'}} class='home_page_text' >
                                                Unlike forex trading, WUSDT.SPACE specialized in crypto trading, which means no weekends, no holidays.
                                                The system will always keep paying investors until their deposits reach 400% profit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="features__item">
                                <div class="features-item">
                                    <div class="features-item__icon">
                                        <div class="features-item__icon-box">
                                            {/* <svg class="icon">
                                                <use xlink:href="HomeAssets/img/sprite.svg"></use>
                                            </svg> */}
                                        </div>
                                        <div class="features-item__line"></div>
                                    </div>
                                    <div class="features-item__info">
                                        <p class="text text--fz-18 text--lh-170 text--fw-600 mb-10">Instant withdrawals</p>
                                        <div class="content color-periwinkle-070 features-item__content text text--justify">
                                            <p style={{color:'#bbcdffb3'}} class='home_page_text'>
                                                When we say Instant, it means immediately without any delays. You will receive your payments right after
                                                you confirm the request. It doesn't matter how much you withdraw. It will always hit your wallet in no time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="features__item">
                                <div class="features-item">
                                    <div class="features-item__icon">
                                        <div class="features-item__icon-box">
                                            {/* <svg class="icon">
                                                <use xlink:href="HomeAssets/img/sprite.svg"></use>
                                            </svg> */}
                                        </div>
                                        <div class="features-item__line"></div>
                                    </div>
                                    <div class="features-item__info">
                                        <p class="text text--fz-18 text--lh-170 text--fw-600 mb-10">Improvement & Flexibility</p>
                                        <div class="content color-periwinkle-070 features-item__content text text--justify">
                                            <p style={{color:'#bbcdffb3'}} class='home_page_text'>
                                                Our developers are always ready to improve the website, add new features or modify the script and system.
                                                Our client's suggestions are a priority for us if you have any, we are always glad to hear them.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="features__item">
                                <div class="features-item">
                                    <div class="features-item__icon">
                                        <div class="features-item__icon-box">
                                            {/* <svg class="icon">
                                                <use xlink:href="HomeAssets/img/sprite.svg"></use>
                                            </svg> */}
                                        </div>
                                        <div class="features-item__line"></div>
                                    </div>
                                    <div class="features-item__info">
                                        <p class="text text--fz-18 text--lh-170 text--fw-600 mb-10">Security</p>
                                        <div class="content color-periwinkle-070 features-item__content text text--justify">
                                            <p style={{color:'#bbcdffb3'}} class='home_page_text'>
                                                WUSDT.SPACE has the highest security standards installed to make sure your personal information and funds are 100% safe.
                                                DDoS protection, Comodo SSL certificate, dedicated server, WAF, domain backup.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="features__item">
                                <div class="features-item">
                                    <div class="features-item__icon">
                                        <div class="features-item__icon-box">
                                            {/* <svg class="icon">

                                                <use xlink:href="HomeAssets/img/sprite.svg"></use>
                                            </svg> */}
                                        </div>
                                        <div class="features-item__line"></div>
                                    </div>
                                    <div class="features-item__info">
                                        <p class="text text--fz-18 text--lh-170 text--fw-600 mb-10">24/7 Support Team</p>
                                        <div class="content color-periwinkle-070 features-item__content text text--justify">
                                            <p style={{color:'#bbcdffb3'}} class='home_page_text'>
                                                Our support team is available around the clock to help you. If you have an issue concerning registration, deposit,
                                                withdrawal, referrals, security settings, it will be resolved within 24 hours or less.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="section__circles">
                        <div class="container"></div>
                    </div>
                </section>

                <section class="section plans" id="plans">
                    <div class="container">
                        <div class="section__top">
                            <h2 class="title title--fz-42 title--dots section__title">Investment Plan</h2>
                            <p class="title title--fz-30 color-dodger-blue-light section__subtext">Plan built for everyone. Simple, easy and profitable</p>
                        </div>
                        <div class="box box--no-top">
                            <div class="box__wrapper">
                                <div class="box__wrapper-top"></div>
                                <div class="box__wrapper-bottom"></div>
                                <div class="box__inner">
                                    <div class="box__inner-top"></div>
                                    <div class="box__inner-bottom"></div>
                                    <div class="box__inner-bg">
                                        <div class="box__inner-bg-circles"></div>
                                    </div>
                                    <div class="box__inner-content">
                                        <div class="plans__title mb-lg-20 mb-xl-25 mb-30">
                                            <p class="title title--center title--fz-48 title--fw-700">
                                                <span class="color-gradient">2.5% Weeks </span>
                                                <span class="color-gradient-stroke">- 60 Weeks</span>
                                            </p>
                                        </div>
                                        <div class="plans__row">
                                            <div class="plans__col">
                                                <div class="block block--bg-fill">
                                                    <div class="block__content text text--lh-auto text--uppercase text--fz-18 text--fw-600 text--center">
                                                        <p class="color-periwinkle-070">MINIMUM DEPOSIT</p>
                                                        <p class="text text--fz-24">FROM 50 USD</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="plans__col">
                                                <div class="block block--bg-fill">
                                                    <div class="block__content text text--lh-auto text--uppercase text--fz-18 text--fw-600 text--center">
                                                        <p class="color-periwinkle-070">MAXIMUM DEPOSIT</p>
                                                        <p class="text text--fz-24">TO 10000 USD</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text text--uppercase text--fz-18 text--lh-auto text--center color-periwinkle-070 mt-20 mb-lg-20 mb-xl-25 mb-30"></p>
                                        <div class="plans__row">
                                            <div class="plans__col">
                                                <div class="block">
                                                    <div class="block__content text text--lh-auto text--uppercase text--fz-18 text--fw-600 text--center">
                                                        <p class="color-periwinkle-070">MINIMUM WITHDRAW</p>
                                                        <p class="text text--fz-24">10 USD</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="plans__col">
                                                <div class="block">
                                                    <div class="block__content text text--lh-auto text--uppercase text--fz-18 text--fw-600 text--center">
                                                        <p class="color-periwinkle-070">WITHDRAWAL PAYMENT SYSTEM</p>
                                                        <p class="text text--fz-24">INSTANT PAYMENT IN USDT</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text text--uppercase text--fz-18 text--lh-auto text--center color-periwinkle-070 mt-20 mb-lg-20 mb-xl-25 mb-30"></p>

                                        <div class="plans__btn mb-lg-20 mb-xl-25 mb-30">
                                            <a class="button" href="register.html">START EARNING NOW</a>
                                        </div>
                                        <div class="plans__bottom">
                                            <div class="plans__bottom-text">
                                                <p class="text text--fz-30 text--center text--fw-600 color-dodger-blue-light">400% Total Income</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section__circles">
                        <div class="container"></div>
                    </div>
                </section>

                <section class="section news" id="news">
                    <div class="container">
                        <div class="section__top">
                            <h2 class="title title--fz-42 title--dots section__title">News</h2>
                            <p class="title title--fz-30 color-dodger-blue-light section__subtext">Platform Updates</p>
                        </div>
                        <div class="news__list">


                            <div class="news__item">
                                <div class="article-short">
                                    <div class="article-short__img">
                                        <img src="HomeAssets/img/news-01.png" alt=""/>
                                    </div>
                                    <div class="article-short__content">
                                        <p class="text text--fz-20 text--fw-600 text--uppercase">Welcome to WUSDT.SPACE</p>
                                        <div class="article-short__box">
                                            <div class="article-short__box-content">
                                                <p class="color-periwinkle-070 text text--justify">
                                                    We are proud to inform you that the official start of the WUSDT.SPACE
                                                    project has taken place!

                                                    WUSDT.SPACE is a platform that will help investors make a profit from their assets with minimal risk.

                                                    Welcome to WUSDT.SPACE, your profitable and long-term platform.
                                                </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="section__circles">
                        <div class="container"></div>
                    </div>
                </section>

                <section class="section faq" id="faq">
                    <div class="container">
                        <div class="section__top">
                            <h2 class="title title--fz-42 title--dots section__title">FAQ</h2>
                            <p class="title title--fz-30 color-dodger-blue-light section__subtext">What does WUSDT.SPACE do?</p>
                        </div>

                        
                        <div class="block mb-lg-40 mb-xl-50 mb-60">
                            <div class="block__content text text--fz-18 text--fw-600 text--center">
                                <p>
                                    WUSDT.SPACE is a crypto trading platform that offers a fixed interest rate on investments daily. For more info, please read the
                                    About us section on the homepage.
                                </p>
                            </div>
                        </div>
                        <div class="faq__row">
                            <div class="faq__col react_col">
        
                                <div class="accordion1 text-white  " >
                                    <button class="acc text-white"  onClick={() => setShow(!show)}>How to create an account?</button>
                                    <div  className={`${show ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            The registration is simple. You have to fill in the form, agree to the Privacy Policy and solve google reCAPTCHA.
                                            Please provide a valid e-mail address to verify your account and to be able to login
                                        </p>
                                    </div>
                                    
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white"  onClick={() => setShow1(!show1)}>Is my personal info safe?</button>
                                    <div className={`${show1 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            All your info is 100% safe in WUSDT.SPACE. Any transferred information within our website is encrypted by COMODO SSL and
                                            protected from getting to a third party. Our system uses a one-way encryption algorithm to store your password that
                                            makes it almost impossible to crack.
                                        </p>
                                    </div>
                                    
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white" onClick={() => setShow2(!show2)}>Do i need KYC for WUSDT.SPACE?</button>
                                    <div className={`${show2 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            No KYC required to use WUSDT.SPACE. We value the importance of our customer's anonymity and the security of their
                                            personal info.
                                        </p>
                                    </div>  
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white"  onClick={() => setShow3(!show3)}>How to protect my founds from being hacked?</button>
                                    <div className={`${show3 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            To protect your funds from being hacked, we have added Two-Factor Authentication (2FA) as an extra level of security. 2FA
                                            is OPTIONAL but we highly recommend to enable it.
                                        </p>
                                    </div>
                                    
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white" onClick={() => setShow4(!show4)}>I forgot my password. How to restore my account?</button>
                                    <div  className={`${show4? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            On sign in page at the bottom of the window, click Forgot password? and follow instructions sent to you by e-mail.
                                        </p>
                                    </div>   
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white " onClick={() => setShow5(!show5)}>Do I get my initial deposit back after the 60 Weeks plan?</button>
                                    <div  className={`${show5 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            No, your deposit is included in the daily earnings. You get 2.5% per Week on what you invested for 60 Weeks.
                                        </p>
                                    </div>  
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white" onClick={() => setShow6(!show6)}>What will happen to my deposit after 60 Weeks?</button>
                                    <div  className={`${show6 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            Your deposit will not generate any more profit and will no longer be active.
                                        </p>
                                    </div>  
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white" onClick={() => setShow7(!show7)}>Can I compound in WUSDT.SPACE?</button>
                                    <div  className={`${show7 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            No, compound option is not available.
                                        </p>
                                    </div>  
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white" onClick={() => setShow8(!show8)}>Can I reinvest my earnings in WUSDT.SPACE?</button>
                                    <div  className={`${show8 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            No, reinvest option is not available. You only withdraw your balance.
                                        </p>
                                    </div> 
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white" onClick={() => setShow9(!show9)}>What payment methods do we accept for deposits?</button>
                                    <div  className={`${show9 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            We accept wusdt.
                                        </p>
                                    </div>
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white"  onClick={() => setShow10(!show10)}>How long does it take for my deposit to show up?</button>
                                    <div  className={`${show10 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            Your deposit will show up in your account automatically after 2 to 3 blockchain network confirmations. Your deposit will
                                            show up immediately after the payment process is completed.
                                        </p>

                                    </div>
                                    
                                </div>
                                   
                                                   
                            </div>
                            <div class="faq__col">
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white" onClick={() => setShow11(!show11)}>How long does it take to receive my withdrawals?</button>
                                    <div className={`${show11 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            Withdrawals are instant after the request is processed by our payment processor.
                                        </p>

                                    </div>  
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white" onClick={() => setShow12(!show12)} >Do you charge any fees?</button>
                                    <div className={`${show12 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            Yes, we charge 3% fee on both depositing and withdrawing.
                                        </p>

                                    </div>  
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white" onClick={() => setShow13(!show13)}>What is the minimum and maximum amount for investment?</button>
                                    <div  className={`${show13 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            The minimum investment amount is $100, the maximum amount is $300 000.
                                            Your account is limited to "20" deposit slots. If you have no deposit slot available, you have to wait for your the first one to be
                                            available again, before you can make a new deposit. You can choose when to use them.
                                        </p>

                                    </div>   
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white" onClick={() => setShow14(!show14)}>What is the minimum and maximum amount for withdrawal?</button>
                                    <div className={`${show14 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            The minimum withdrawal amount is $30. There is no maximum limit for withdrawal.
                                        </p>

                                    </div>   
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white"  onClick={() => setShow15(!show15)}>Do you have an affiliate program?</button>
                                    <div  className={`${show15 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            Yes, we offer 3-levels referral program 8%-4%-2% for regular users and 9-levels 9% 5% 3% 1% 0.6% 0.5% 0.4% 0.3% 0.2% for
                                            team leaders.
                                        </p>

                                    </div>  
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white"  onClick={() => setShow16(!show16)}>Do I have to make a deposit to receive referral rewards?</button>
                                    <div  className={`${show16 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            Yes, a minimum deposit is required.
                                        </p>

                                    </div>  
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white" onClick={() => setShow17(!show17)}>Can I change my sponsor?</button>
                                    <div  className={`${show17 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            No, we do not allow this action.
                                        </p>

                                    </div>
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white"  onClick={() => setShow18(!show18)}>Why I can't see my sponsor email on registration page?</button>
                                    <div className={`${show18 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            Make sure you clicked the right link first. Some browsers block cookies by default, contact your upline to check
                                            with
                                            him/her.
                                        </p>

                                    </div>
                                </div>
                                <div class="accordion1" data-accordion="faq">
                                    <button class="acc text-white"   onClick={() => setShow19(!show19)}>Can I change my Wallet address?</button>
                                    <div className={`${show19 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            No.
                                        </p>

                                    </div>   
                                </div>
                                <div class="accordion1" onClick={() => setShow20(!show20)} data-accordion="faq">
                                    <button class="acc text-white">Can I create multiple accounts?</button>
                                    <div className={`${show20 ? "d-block panel acc_show_text" : "d-none"}`}>
                                        <p>
                                            You are allowed to have one account only. Abusing the system will lead to a permanent suspension of your accounts.
                                        </p>

                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section__circles">
                      <div class="container"></div>
                    </div>
              </section>

         </main>
         <h1></h1>


           <div class='main_footer'>

         
                <div class="container">
                    <div class="footer__inner">
                        <div class="footer__copy">
                            <p class="text text--fz-14 color-periwinkle-070">
                                WUSDT.SPACE is incorporated under the Companies Act as a private limited
                                company. | All rights reserved.
                            </p>
                        </div>

                        <div class="footer__links">
                            <a class="text text--fz-14 color-white-070 text text--no-underline" href="index.html">About WUSDT.SPACE</a>

                        </div>
                        <a class="footer__btn-top" href="#top" data-href="#top">
                            <i class="fa fa-arrow-up" style={{marginLeft:'15px'}}></i>
                            {/* <svg class="icon">
                                <use xlink:href="HomeAssets/img/sprite.svg"></use>
                            </svg> */}
                        </a>
                    </div>
                </div>
                </div>
           
        </div>
    </div>
      
    </div>
  )
}

export default Home_landing
