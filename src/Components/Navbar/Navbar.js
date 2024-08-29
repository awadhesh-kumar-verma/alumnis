import { useRef } from 'react';
import { FaBars } from 'react-icons/fa';
// import ME from '../../assets/logo.jpg';

import { AiOutlineHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BiBook } from 'react-icons/bi';
import { PiProjectorScreenChartLight } from 'react-icons/pi';
import { BiMessageSquareDetail } from 'react-icons/bi';

import "./navbar.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <a href='#home' ><h3> IERT Alumni </h3></a>

            <navi ref={navRef} onClick={showNavbar} >

                <a href='#home'><span className='deco' >Home</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href='#id1'><span className='deco' >News</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href='#register'><span className='deco' >Register</span></a>
                <a href='#member'><span className='deco' >Members</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href='#footer'>&nbsp;&nbsp;<span className='deco' >Contact</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
            </navi>

            <navi2 ref={navRef} onClick={showNavbar} >

                <div>
                    <div className='er1' >

                    </div>
                    <div className='er2' >
                        <a href='#home'>< AiOutlineHome />&nbsp; Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        <a href='#id1'>< BiUser />&nbsp; News&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        <a href='#register'>< BiBook />&nbsp; Register</a>
                        <a href='#member'>< PiProjectorScreenChartLight /> &nbsp;Member&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        <a href='#footer'>&nbsp;&nbsp;< BiMessageSquareDetail />&nbsp; Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                    </div>
                </div>
            </navi2>
            <button className='navi-btn' onClick={showNavbar} >
                <FaBars />
            </button>

        </header>
    );
}

export default Navbar;