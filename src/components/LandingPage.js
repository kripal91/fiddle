import React from 'react';
import './LandingPage.scss';
import LandingRight from '../images/LandingRight.png';
import logo from '../images/logo.png'


function LandingPage(){
    return(
        <div className="LandingCont">
            <div className='logo'><img src={logo} alt="Logo" /></div>
            <div className="SLeftCont">
                <div className='leftContent'>
                <h1>Opportunitites are waiting for you</h1>
                <h3>Explore Opportunitite such as competiton, workshops, giggs, artist performances</h3>
                </div>
                <div className='SignUpInBtn'>
                <a href='/Signup'>                
                <button className="SignUpBtn">Sign Up</button>
                </a>

                <a href='/Signin'>
                <button className="SignInBtn">Sign In</button>
                </a>
                </div>
            </div>
            <div className="SRightCont">
            <img className="RightLandImg" src={LandingRight} alt="Right Landing img"/>


            </div>

        </div>
    )
}

export default LandingPage